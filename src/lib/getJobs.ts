// src/lib/getJobs.ts
// SERVER-SIDE job reader. Reads jobs from src/data/jobs.json which is bundled
// at build time. Zero network calls, zero IP block issues, 100% reliable.
// To update jobs: paste the latest JSON from your Apps Script /exec URL into
// src/data/jobs.json, then git push. Netlify rebuilds with fresh data.

import jobsRaw from "@/data/jobs.json";

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

// Trim all column header keys (fixes trailing-space headers like "city ")
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
      // Status = "active" (any case) is the sole visibility control.
      if (job.status.toLowerCase() !== "active") return false;
      return true;
    });
}

// Jobs are read from the bundled JSON file — no network call needed.
export function getJobs(): Job[] {
  return mapRows(jobsRaw as any[]);
}

export function getJobBySlug(slug: string): Job | null {
  return getJobs().find((j) => j.slug === slug) || null;
}