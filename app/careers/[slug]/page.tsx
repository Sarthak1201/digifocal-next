// app/careers/[slug]/page.tsx
// SERVER COMPONENT. Fetches the real job by slug, generates accurate per-job
// metadata, and renders the JobPosting JSON-LD directly into the SSR HTML so
// Google Jobs can read it. The interactive UI is still handled by ClientPage.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobBySlug, type Job } from "@/lib/getJobs";
import ClientPage from "./ClientPage";

type Props = {
  params: { slug: string };
};

// Always render on the server at request time so the job + JobPosting JSON-LD
// are fetched fresh from the Google Sheet (avoids empty build-time caching).
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await getJobBySlug(params.slug);

  if (!job) {
    return {
      title: "Job Not Found | Careers",
      description: "This role is no longer available. Browse our other open IT roles at Digifocal IT Solutions.",
      alternates: { canonical: `/careers/${params.slug}` },
      robots: { index: false, follow: true },
    };
  }

  const desc = job.description
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${job.title} in ${job.city} | Digifocal Careers`,
    description:
      desc ||
      `Apply for ${job.title} at Digifocal IT Solutions in ${job.city}, India.`,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} in ${job.city} | Digifocal Careers`,
      description: desc,
      url: `/careers/${job.slug}`,
      type: "website",
      images: ["https://digifocal.in/Dlogo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} in ${job.city}`,
      description: desc,
      images: ["https://digifocal.in/Dlogo.png"],
    },
  };
}

function buildJobPostingSchema(job: Job) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Digifocal IT Solutions",
      value: job.id,
    },
    datePosted: job.postedDate,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Digifocal IT Solutions",
      sameAs: "https://digifocal.in",
      logo: "https://digifocal.in/DigifocalLogo.jpg",
    },
    directApply: true,
  };

  if (job.validThrough) schema.validThrough = job.validThrough;

  // Location block. For remote roles Google wants jobLocationType +
  // applicantLocationRequirements; for on-site it wants a real address.
  const address: Record<string, any> = {
    "@type": "PostalAddress",
    addressCountry: job.country || "IN",
  };
  if (job.city) address.addressLocality = job.city;
  if (job.region) address.addressRegion = job.region;

  schema.jobLocation = { "@type": "Place", address };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: "India",
    };
  }

  return schema;
}

export default async function Page({ params }: Props) {
  const job = await getJobBySlug(params.slug);

  // If the slug doesn't match an active job, return a real 404 instead of a
  // client-side redirect (better for crawlers).
  if (!job) {
    notFound();
  }

  const jobSchema = buildJobPostingSchema(job);

  return (
    <>
      {/* SSR JobPosting structured data — this is what Google Jobs reads */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />
      <ClientPage initialJob={job} />
    </>
  );
}