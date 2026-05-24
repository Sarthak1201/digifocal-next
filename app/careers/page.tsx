// app/careers/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import { getJobs } from "@/lib/getJobs";
import ClientPage from "./ClientPage";

// Regenerate at most every 10 minutes: picks up Sheet edits automatically.
export const revalidate = 600;

export const metadata: Metadata = {
  title: "Careers",
  description: "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers",
    description: "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
    url: "/careers", type: "website", images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image", title: "Careers",
    description: "Browse current IT openings at Digifocal IT Solutions across India. Apply online today.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default async function Page() {
  const jobs = await getJobs();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobs.map((j, i) => ({
      "@type": "ListItem", position: i + 1,
      url: `https://digifocal.in/careers/${j.slug}`, name: j.title,
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