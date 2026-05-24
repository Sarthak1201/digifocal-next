// src/lib/getJobs.ts
// SERVER-SIDE job fetcher. Runs on the server (no "use client").
// Pulls jobs from a Google Apps Script that reads the Sheet inside Google and
// returns JSON — this bypasses Google's IP block on direct Sheets CSV fetches
// from cloud servers (Netlify runs on AWS Lambda which Google blocks).

const JOBS_API_URL =
  "https://script.google.com/macros/s/AKfycbyTzGjRxHYHsEYNQ31QWUi4k1_VaJu69hvME40qM34tw-utx-LJDns4y68R0NXLc_eu/exec";

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
  // city may be "Thane, Maharashtra" — take first part before comma
  const base = city.split(",")[0].trim().toLowerCase();
  return CITY_TO_REGION[base] || "";
}

function toIsoDate(value: any): string {
  const v = (value ?? "").toString().trim();
  if (!v) return "";
  const d = new Date(v);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
}

// Normalise a raw sheet row: trim ALL key names so a column header with an
// accidental trailing space ("city ") still maps correctly to "city".
function normaliseRow(raw: any): any {
  const out: any = {};
  for (const key of Object.keys(raw)) {
    out[key.trim()] = raw[key];
  }
  return out;
}

function mapRows(raw: any[]): Job[] {
  return raw
    .map((rawRow) => {
      const row = normaliseRow(rawRow); // fix trailing-space column headers
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
        postedDate: toIsoDate(row["posted_date"]) || new Date().toISOString().split("T")[0],
        validThrough: toIsoDate(row["valid_through"]),
        status: (row["Status"] || row["status"] || "").toString().trim(),
        description: (row["Job Description"] || row["Description"] || row["description"] || "").toString(),
        isRemote,
      } as Job;
    })
    .filter((job) => {
      // Must have an ID and slug to be usable
      if (!job.id || !job.slug) return false;
      // Status = "active" (any case) is the SOLE visibility control.
      // We intentionally skip the validThrough date filter because:
      //   1. Apps Script returns real Date objects (parseable, often past),
      //   2. the browser CSV version gets unparseable date strings (never filtered),
      //   3. so the two would behave differently — Status is the source of truth.
      // To expire a job: change its Status to anything other than "active".
      if (job.status.toLowerCase() !== "active") return false;
      return true;
    });
}

async function fetchJson(timeoutMs: number): Promise<any[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(JOBS_API_URL, {
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": BROWSER_UA, Accept: "application/json,*/*" },
    });
    if (!res.ok) {
      console.error(`getJobs(): Apps Script HTTP ${res.status}`);
      return null;
    }
    const text = await res.text();
    if (text.trimStart().startsWith("<")) {
      console.error("getJobs(): Apps Script returned HTML — check deployment access = Anyone");
      return null;
    }
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("getJobs(): fetch error:", (err as Error).message);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getJobs(): Promise<Job[]> {
  let raw = await fetchJson(10000);
  if (!raw) {
    console.warn("getJobs(): retrying...");
    raw = await fetchJson(10000);
  }
  if (!raw) {
    console.error("getJobs(): all attempts failed");
    return [];
  }
  const jobs = mapRows(raw);
  console.log(`getJobs(): ${jobs.length} active job(s) from Apps Script (total rows: ${raw.length})`);
  return jobs;
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug) || null;
}