// src/lib/getJobs.ts
// SERVER-SIDE job fetcher. Runs on the server (no "use client").
// Fetches the same Google Sheet CSV your useJobs() hook uses, but on the
// server, so job data + JobPosting JSON-LD can be rendered into the SSR HTML
// that Googlebot (and Google Jobs) reads.

import Papa from "papaparse";

const JOBS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1LXzKYZN9w2oEcAYHcmonYuGR42oSjE-CaLeIaEy-mSzTkPkw7pjw-ivMijwiLFMGSjz5rFFRDpiu/pub?output=csv";

export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  region: string; // addressRegion (state) — derived for Google Jobs
  country: string;
  experience: string;
  employmentType: string;
  postedDate: string;
  validThrough: string;
  status: string;
  description: string;
  isRemote: boolean;
}

// Map major Indian hubs to their state, so JobPosting.jobLocation can include
// addressRegion (recommended by Google for Job listings).
const CITY_TO_REGION: Record<string, string> = {
  mumbai: "Maharashtra",
  "navi mumbai": "Maharashtra",
  thane: "Maharashtra",
  pune: "Maharashtra",
  nagpur: "Maharashtra",
  nashik: "Maharashtra",
  bangalore: "Karnataka",
  bengaluru: "Karnataka",
  hyderabad: "Telangana",
  chennai: "Tamil Nadu",
  delhi: "Delhi",
  "new delhi": "Delhi",
  gurgaon: "Haryana",
  gurugram: "Haryana",
  noida: "Uttar Pradesh",
  kolkata: "West Bengal",
  ahmedabad: "Gujarat",
  jaipur: "Rajasthan",
  kochi: "Kerala",
  indore: "Madhya Pradesh",
};

function regionForCity(city: string): string {
  return CITY_TO_REGION[city.trim().toLowerCase()] || "";
}

// Normalize a date string to YYYY-MM-DD (ISO 8601) for datePosted / validThrough.
function toIsoDate(value: string): string {
  const v = (value || "").trim();
  if (!v) return "";
  const d = new Date(v);
  if (isNaN(d.getTime())) return v; // leave as-is if unparseable
  return d.toISOString().split("T")[0];
}

function parseRows(csvText: string): Job[] {
  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const today = new Date();

  return (results.data as any[])
    .map((row) => {
      const city = (row["city"] || row["City"] || row["Location"] || "")
        .toString()
        .trim();
      const location = (row["Location"] || row["location"] || "")
        .toString()
        .trim();
      const isRemote = /remote/i.test(`${city} ${location}`);

      return {
        id: (row["Job ID"] || row["ID"] || row["id"] || "").toString().trim(),
        slug: (row["slug"] || row["Slug"] || "").toString().trim(),
        title: (row["Title"] || row["title"] || "").toString().trim(),
        location,
        city,
        region: regionForCity(city),
        country: (row["country"] || row["Country"] || "IN").toString().trim(),
        experience: (row["Experience"] || row["experience"] || "")
          .toString()
          .trim(),
        employmentType: (row["employment_type"] || "FULL_TIME")
          .toString()
          .trim(),
        postedDate: toIsoDate(
          row["posted_date"] || new Date().toISOString().split("T")[0]
        ),
        validThrough: toIsoDate(row["valid_through"] || ""),
        status: (row["Status"] || row["status"] || "").toString().trim(),
        description: (
          row["Job Description"] ||
          row["Description"] ||
          row["description"] ||
          ""
        ).toString(),
        isRemote,
      } as Job;
    })
    .filter((job) => {
      if (!job.id || !job.slug) return false;
      if (job.status.toLowerCase() !== "active") return false;
      if (
        job.validThrough &&
        !isNaN(new Date(job.validThrough).getTime()) &&
        new Date(job.validThrough) < today
      )
        return false;
      return true;
    });
}

// Fetch all active jobs on the server. Cached for 1 hour (ISR), so the Sheet
// stays the single source of truth without hammering Google on every request.
export async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(JOBS_CSV_URL, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const csvText = await res.text();
    return parseRows(csvText);
  } catch (err) {
    console.error("getJobs() server fetch failed:", err);
    return [];
  }
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((j) => j.slug === slug) || null;
}
