// app/careers/page.tsx
// SERVER COMPONENT. Fetches jobs on the server so the list (and its links to
// each /careers/[slug]) exist in the SSR HTML for crawlers, and emits an
// ItemList JSON-LD. Interactive rendering still happens in ClientPage.

import type { Metadata } from "next";
import { getJobs } from "@/lib/getJobs";
import ClientPage from "./ClientPage";

// Always render on the server at request time so jobs are fetched fresh from
// the Google Sheet (avoids an empty build-time fetch being cached).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers",
    description:
      "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
    url: "/careers",
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers",
    description:
      "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default async function Page() {
  const jobs = await getJobs();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobs.map((j, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://digifocal.in/careers/${j.slug}`,
      name: j.title,
    })),
  };

  return (
    <>
      {jobs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
      <ClientPage initialJobs={jobs} />
    </>
  );
}