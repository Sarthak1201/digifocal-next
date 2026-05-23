// app/sitemap.ts
// DYNAMIC sitemap. Replaces the static public/sitemap.xml. It lists every
// static page, every blog, AND every active job URL (fetched server-side) so
// Google can discover /careers/[slug] pages — without discovery there is no
// Google Jobs listing.
//
// IMPORTANT: delete public/sitemap.xml after adding this file, otherwise the
// static file shadows this route and your job URLs never get listed.

import type { MetadataRoute } from "next";
import { getJobs } from "@/lib/getJobs";

const BASE = "https://digifocal.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "daily", priority: 1.0, lastModified: now },
    { url: `${BASE}/services`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE}/services/software-solutions`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/services/automation`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/services/consulting`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/services/talent`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/careers`, changeFrequency: "daily", priority: 0.9, lastModified: now },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/privacy-policy`, changeFrequency: "yearly", priority: 0.5, lastModified: now },
    { url: `${BASE}/blogs`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE}/blog/future-of-it-hiring-2026`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/blog/contract-vs-full-time-tech-career`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/blog/ace-technical-interview-ai-era`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/blog/soft-skills-hardest-requirement-tech`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/blog/mastering-the-ats-resume`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/blog/building-developer-portfolio`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
  ];

  let jobRoutes: MetadataRoute.Sitemap = [];
  try {
    const jobs = await getJobs();
    jobRoutes = jobs.map((job) => ({
      url: `${BASE}/careers/${job.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: job.postedDate ? new Date(job.postedDate) : now,
    }));
  } catch {
    // If the Sheet is unreachable at build time, still ship the static routes.
  }

  return [...staticRoutes, ...jobRoutes];
}
