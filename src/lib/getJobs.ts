// src/lib/getJobs.ts
// 3-layer robust job loader:
//   1) tries a fresh fetch from the Apps Script at runtime (live updates),
//   2) falls back to src/data/jobs.json bundled at build time (never empty),
//   3) jobs.json itself is refreshed at every deploy by scripts/fetch-jobs.mjs.
// Result: jobs render no matter what — and update automatically.

import bundledJobs from "@/data/jobs.json";

const APPS_SCRIPT_URL =
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

function normaliseRow(raw: any): any {
  const out: any = {};
  for (const key of Object.keys(raw)) out[key.trim()] = raw[key];
  return out;
}

function mapRows(raw: any[]): Job[] {
  return raw
    .map((rawRow) => {
      const row = normaliseRow(rawRow);
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
      if (!job.id || !job.slug) return false;
      if (job.status.toLowerCase() !== "active") return false; // Status is the sole control
      return true;
    });
}

// Layer 1: best-effort fresh fetch at runtime.
async function tryFreshFetch(): Promise<any[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": BROWSER_UA, Accept: "application/json,*/*" },
    });
    if (!res.ok) return null;
    const text = await res.text();
    if (text.trimStart().startsWith("<")) return null;
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getJobs(): Promise<Job[]> {
  const fresh = await tryFreshFetch();
  if (fresh && fresh.length > 0) {
    const jobs = mapRows(fresh);
    if (jobs.length > 0) {
      console.log(`getJobs(): ${jobs.length} active job(s) [live fetch]`);
      return jobs;
    }
  }
  // Layer 2: bundled build-time data (refreshed each deploy by prebuild script)
  const fallback = mapRows(bundledJobs as any[]);
  console.log(`getJobs(): ${fallback.length} active job(s) [bundled fallback]`);
  return fallback;
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug) || null;
}