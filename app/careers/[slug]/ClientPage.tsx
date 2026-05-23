"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Briefcase, Calendar, ArrowLeft, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "@/hooks/useJobs";
import type { Job } from "@/lib/getJobs";
import { ApplicationModal } from "@/components/ApplicationModal";

const ADSENSE_PUBLISHER_ID = "ca-pub-5896545782309702";
const AD_SLOT_TOP = "XXXXXXXXXX";

// initialJob is provided by the server component (page.tsx). We render it
// immediately (no "Loading..." flash, and the visible content matches the
// SSR JobPosting schema). useJobs() is still used to compute "similar" roles.
export default function JobDetail({ initialJob }: { initialJob?: Job }) {
  const { jobs } = useJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // AdSense script is loaded globally in app/layout.tsx;
  // here we just trigger a rescan on mount so this page's ad slots fill.
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  // Prefer the server-provided job; fall back to the client list if needed.
  const job =
    initialJob || jobs.find((j) => j.slug === initialJob?.slug) || null;

  if (!job) {
    return (
      <Layout>
        <div className="py-20 text-center text-gray-400">Loading...</div>
      </Layout>
    );
  }

  const similarJobs = jobs
    .filter(
      (j) =>
        j.id !== job.id &&
        (j.city === job.city || j.experience === job.experience)
    )
    .slice(0, 4);

  return (
    <Layout>
      <section className="py-12 bg-[#0a0a0a] border-b border-white/5">
        <div className="enterprise-container max-w-4xl">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/careers" className="hover:text-white">Careers</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{job.title}</span>
          </nav>

          <h1 className="text-4xl font-bold text-white mb-4">{job.title}</h1>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#AB784A]" /> {job.city}, India
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#AB784A]" /> {job.experience}
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#AB784A]" /> {job.employmentType.replace("_", " ")}
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#AB784A]" /> Posted {job.postedDate}
            </span>
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#AB784A] hover:bg-[#976436] text-white px-8 py-6 text-lg rounded font-medium"
          >
            Apply Now
          </Button>
        </div>
      </section>

      <div className="w-full bg-[#0a0a0a] py-4 flex justify-center border-y border-white/5 overflow-hidden" style={{ maxHeight: "122px" }}>
        <ins className="adsbygoogle"
             style={{ display: "inline-block", width: "100%", maxWidth: "900px", height: "90px", overflow: "hidden" }}
             data-ad-client={ADSENSE_PUBLISHER_ID}
             data-ad-slot={AD_SLOT_TOP}
             data-ad-format="horizontal"
             data-full-width-responsive="false">
        </ins>
      </div>

      <section className="py-12 bg-[#0a0a0a]">
        <div className="enterprise-container max-w-4xl">
          <h2 className="text-2xl font-semibold text-white mb-6">Job Description</h2>
          <div className="text-gray-300 whitespace-pre-wrap leading-relaxed text-[15px]">
            {job.description}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4 items-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#AB784A] hover:bg-[#976436] text-white px-8 py-3 rounded font-medium"
            >
              Apply for this Role
            </Button>
            <Link href="/careers" className="text-gray-400 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to all jobs
            </Link>
          </div>
        </div>
      </section>

      {similarJobs.length > 0 && (
        <section className="py-12 bg-[#0a0a0a] border-t border-white/5">
          <div className="enterprise-container max-w-4xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Similar Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {similarJobs.map((j) => (
                <Link
                  key={j.id}
                  href={`/careers/${j.slug}`}
                  className="block bg-[#141414] border border-white/5 hover:border-[#AB784A]/40 rounded p-5 transition-all"
                >
                  <div className="text-white font-medium mb-2">{j.title}</div>
                  <div className="text-gray-500 text-sm flex gap-4">
                    <span>{j.city}</span>
                    <span>{j.experience}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={job}
      />
    </Layout>
  );
}