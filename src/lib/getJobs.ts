// src/lib/getJobs.ts
// SERVER-SIDE job fetcher. Runs on the server (no "use client").
// Reads the Google Sheet as CSV so jobs + JobPosting JSON-LD render into the
// SSR HTML that Googlebot / Google Jobs reads.
//
// Google can be finicky about server-side fetches of Sheets. To be robust we:
//   1) send a real browser User-Agent (bot UAs get blocked),
//   2) follow redirects,
//   3) try multiple Google CSV endpoints until one returns real CSV.

import Papa from "papaparse";

const DOC_ID = "1HdTTvL8dv-1mIpHxiEBwtwUIPqjTetulg79wINmU_7A";

// Tried in order. First one that returns valid CSV (not an HTML error) wins.
const CSV_URLS = [
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1LXzKYZN9w2oEcAYHcmonYuGR42oSjE-CaLeIaEy-mSzTkPkw7pjw-ivMijwiLFMGSjz5rFFRDpiu/pub?output=csv",
  `https://docs.google.com/spreadsheets/d/${DOC_ID}/export?format=csv&gid=0`,
  `https://docs.google.com/spreadsheets/d/${DOC_ID}/gviz/tq?tqx=out:csv&gid=0`,
];

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  region: string;
  country: string;
  experience: string;
  employmentType: string;
  postedDate: string;
  validThrough: string;
  status: string;
  description: string;
  isRemote: boolean;
}

const CITY_TO_REGION: Record<string, string> = {
  mumbai: "Maharashtra", "navi mumbai": "Maharashtra", thane: "Maharashtra",
  pune: "Maharashtra", nagpur: "Maharashtra", nashik: "Maharashtra",
  bangalore: "Karnataka", bengaluru: "Karnataka", hyderabad: "Telangana",
  chennai: "Tamil Nadu", delhi: "Delhi", "new delhi": "Delhi",
  gurgaon: "Haryana", gurugram: "Haryana", noida: "Uttar Pradesh",
  kolkata: "West Bengal", ahmedabad: "Gujarat", jaipur: "Rajasthan",
  kochi: "Kerala", indore: "Madhya Pradesh",
};

function regionForCity(city: string): string {
  return CITY_TO_REGION[city.trim().toLowerCase()] || "";
}

function toIsoDate(value: string): string {
  const v = (value || "").trim();
  if (!v) return "";
  const d = new Date(v);
  if (isNaN(d.getTime())) return v;
  return d.toISOString().split("T")[0];
}

function parseRows(csvText: string): Job[] {
  const results = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  const today = new Date();

  return (results.data as any[])
    .map((row) => {
      const city = (row["city"] || row["City"] || row["Location"] || "").toString().trim();
      const location = (row["Location"] || row["location"] || "").toString().trim();
      const isRemote = /remote/i.test(`${city} ${location}`);
      return {
        id: (row["Job ID"] || row["ID"] || row["id"] || "").toString().trim(),
        slug: (row["slug"] || row["Slug"] || "").toString().trim(),
        title: (row["Title"] || row["title"] || "").toString().trim(),
        location,
        city,
        region: regionForCity(city),
        country: (row["country"] || row["Country"] || "IN").toString().trim(),
        experience: (row["Experience"] || row["experience"] || "").toString().trim(),
        employmentType: (row["employment_type"] || "FULL_TIME").toString().trim(),
        postedDate: toIsoDate(row["posted_date"] || new Date().toISOString().split("T")[0]),
        validThrough: toIsoDate(row["valid_through"] || ""),
        status: (row["Status"] || row["status"] || "").toString().trim(),
        description: (row["Job Description"] || row["Description"] || row["description"] || "").toString(),
        isRemote,
      } as Job;
    })
    .filter((job) => {
      if (!job.id || !job.slug) return false;
      if (job.status.toLowerCase() !== "active") return false;
      if (job.validThrough && !isNaN(new Date(job.validThrough).getTime()) && new Date(job.validThrough) < today) return false;
      return true;
    });
}

function looksLikeCsv(text: string): boolean {
  if (!text) return false;
  const head = text.slice(0, 200).toLowerCase();
  // Reject Google's HTML error/sign-in pages.
  if (head.includes("<html") || head.includes("<!doctype")) return false;
  return text.includes(",");
}

async function fetchOnce(url: string, timeoutMs: number): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": BROWSER_UA,
        Accept: "text/csv,text/plain,*/*",
      },
    });
    if (!res.ok) {
      console.error(`getJobs(): ${url} -> HTTP ${res.status}`);
      return null;
    }
    const text = await res.text();
    if (!looksLikeCsv(text)) {
      console.error(`getJobs(): ${url} -> response was not CSV (got HTML/empty)`);
      return null;
    }
    return text;
  } catch (err) {
    console.error(`getJobs(): ${url} -> ${(err as Error).message}`);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getJobs(): Promise<Job[]> {
  for (const url of CSV_URLS) {
    const csv = await fetchOnce(url, 10000);
    if (csv) {
      const jobs = parseRows(csv);
      console.log(`getJobs(): ${jobs.length} active job(s) via ${url.split("?")[0]}`);
      if (jobs.length > 0) return jobs;
      // CSV parsed but 0 active jobs — still return (sheet may genuinely be empty)
      // but keep trying other endpoints in case this one returned a stale/blank tab.
    }
  }
  console.error("getJobs(): all CSV endpoints failed or returned no active jobs");
  return [];
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug) || null;
}