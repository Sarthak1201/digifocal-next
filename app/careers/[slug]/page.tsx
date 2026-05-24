// app/careers/[slug]/page.tsx — SERVER COMPONENT (statically pre-rendered per job)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobs, getJobBySlug, type Job } from "@/lib/getJobs";
import ClientPage from "./ClientPage";

type Props = { params: { slug: string } };

// Pre-render a page for every job in jobs.json at build time.
export function generateStaticParams() {
  return getJobs().map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = getJobBySlug(params.slug);
  if (!job) return {
    title: "Job Not Found | Careers",
    robots: { index: false, follow: true },
  };
  const desc = job.description.replace(/\s+/g, " ").trim().slice(0, 160);
  return {
    title: `${job.title} in ${job.city} | Digifocal Careers`,
    description: desc || `Apply for ${job.title} at Digifocal IT Solutions in ${job.city}.`,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} in ${job.city} | Digifocal Careers`,
      description: desc, url: `/careers/${job.slug}`,
      type: "website", images: ["https://digifocal.in/Dlogo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} in ${job.city}`,
      description: desc, images: ["https://digifocal.in/Dlogo.png"],
    },
  };
}

function buildJobPostingSchema(job: Job) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org/", "@type": "JobPosting",
    title: job.title, description: job.description,
    identifier: { "@type": "PropertyValue", name: "Digifocal IT Solutions", value: job.id },
    datePosted: job.postedDate, employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization", name: "Digifocal IT Solutions",
      sameAs: "https://digifocal.in", logo: "https://digifocal.in/DigifocalLogo.jpg",
    },
    directApply: true,
  };
  if (job.validThrough) schema.validThrough = job.validThrough;
  const address: Record<string, any> = { "@type": "PostalAddress", addressCountry: job.country || "IN" };
  if (job.city) address.addressLocality = job.city.split(",")[0].trim();
  if (job.region) address.addressRegion = job.region;
  schema.jobLocation = { "@type": "Place", address };
  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = { "@type": "Country", name: "India" };
  }
  return schema;
}

export default function Page({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      {/* SSR JobPosting JSON-LD — this is what Google Jobs reads */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJobPostingSchema(job)) }}
      />
      <ClientPage initialJob={job} />
    </>
  );
}