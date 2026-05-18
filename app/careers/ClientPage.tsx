"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Helmet } from "react-helmet-async";
import {
  MapPin, Briefcase, ArrowRight,
  FileText, Code, Users, ChevronDown
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useJobs } from "@/hooks/useJobs";
import { ApplicationModal } from "@/components/ApplicationModal";

const ADSENSE_PUBLISHER_ID = "ca-pub-5896545782309702";
const AD_SLOT_TOP = "XXXXXXXXXX";
const AD_SLOT_BOTTOM = "XXXXXXXXXX";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-[#141414] rounded-lg transition-colors hover:border-white/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none cursor-pointer group"
      >
        <h4 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors pr-4">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-[#AB784A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[#AB784A] leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

export default function CareersList() {
  const { jobs, isLoading } = useJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // AdSense load (Removed the manual .push() here because App.tsx handles it now, preventing double-push errors)
  useEffect(() => {
    const scriptId = "google-adsense-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, []);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": jobs.map((j, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://digifocal.in/careers/${j.slug}`,
      "name": j.title,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Careers at Digifocal | Active IT Jobs in India`}</title>
        <meta name="description" content={`Browse active IT job openings at DigiFocal IT Solutions. React, Java, ServiceNow, full-stack roles across Mumbai, Pune, Bangalore, Hyderabad. Apply directly online.`} />
        <link rel="canonical" href="https://digifocal.in/careers" />
        {jobs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        )}
      </Helmet>

      {/* Hero */}
      <section className="py-12 bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6 font-bold tracking-tight">Discover Your Next Great Role</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Apply to Digifocal and let our team connect your expertise with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* AdSense Top (Moved right under Hero for better visibility) */}
      <div className="w-full bg-[#0a0a0a] py-4 flex justify-center border-b border-white/5 overflow-hidden" style={{ maxHeight: "122px" }}>
        <ins className="adsbygoogle"
             style={{ display: "inline-block", width: "100%", maxWidth: "900px", height: "90px", overflow: "hidden" }}
             data-ad-client={ADSENSE_PUBLISHER_ID}
             data-ad-slot={AD_SLOT_TOP}
             data-ad-format="horizontal"
             data-full-width-responsive="false">
        </ins>
      </div>

      {/* Job Cards Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="enterprise-container">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-3xl font-semibold text-white tracking-tight">Open Positions</h2>
            {!isLoading && <span className="text-gray-500">{jobs.length} active</span>}
          </div>

          {isLoading ? (
            <p className="text-gray-400">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <div className="bg-[#141414] border border-white/5 rounded-lg p-10 text-center">
              <p className="text-gray-400 text-lg">No active openings right now.</p>
              <p className="text-gray-500 mt-2">Submit your resume to our talent pool below and we'll reach out when something matches.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.slug}`}
                  className="block bg-[#141414] border border-white/5 hover:border-[#AB784A]/40 rounded-lg p-6 transition-all group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#AB784A] transition-colors">
                    {job.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#AB784A]" />
                      {job.city || job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#AB784A]" />
                      {job.experience}
                    </div>
                  </div>
                  <div className="flex items-center text-[#AB784A] text-sm font-medium">
                    View & Apply <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Talent Pool CTA */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="enterprise-container">
          <div className="max-w-3xl mx-auto text-center bg-[#141414] border border-white/5 rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#624d3b] rounded-full flex items-center justify-center mb-6 border border-[#bf9b30]/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Join Our Talent Pool</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Don't see a matching role above? Submit your resume to our database and we'll contact you when the right opportunity arises.
              </p>
              <Button
                variant="default"
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer bg-[#AB784A] hover:bg-[#976436] text-white px-8 py-6 text-lg rounded-md font-medium"
              >
                Upload Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Bot-Readable Content Block (Moved here for SEO without ruining UX) */}
      <section className="py-8 bg-[#0a0a0a]">
        <div className="enterprise-container">
          <article className="prose prose-invert max-w-none text-gray-400 bg-[#141414] border border-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">IT Talent Acquisition & Open Roles</h2>
            <p className="mb-4 text-base leading-relaxed">
              Digifocal IT Solutions specializes in connecting elite technical professionals with top-tier corporate opportunities. We are actively recruiting for specialized roles including React Developers, Full-Stack Engineers, Cloud Architects, and ServiceNow Consultants across major tech hubs like Mumbai, Pune, and Thane. 
            </p>
            <p className="text-base leading-relaxed">
              Our comprehensive talent acquisition pipeline ensures that whether you are seeking high-paying IT contract jobs or permanent placements in enterprise software environments, your profile reaches the right decision-makers. Explore our current inventory of technical vacancies above.
            </p>
          </article>
        </div>
      </section>

      {/* Hiring Guide + FAQs */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto space-y-20">
            <div>
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">The Digifocal Hiring Guide</h2>
              <p className="text-gray-400 leading-relaxed mb-12 text-lg">
                At Digifocal, we believe in connecting top-tier technical talent with the right corporate opportunities. Whether you are a full-stack software engineer, a specialized frontend developer, or an experienced IT consultant, our recruitment process is designed to be transparent, efficient, and deeply focused on matching your core technical competencies with our specific client requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#141414] border border-white/5 p-8 rounded-lg">
                  <Briefcase className="w-7 h-7 text-[#AB784A] mb-5" />
                  <h4 className="text-white font-medium text-lg mb-3">1. Application</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Apply through our website careers page.</p>
                </div>
                <div className="bg-[#141414] border border-white/5 p-8 rounded-lg">
                  <Code className="w-7 h-7 text-[#AB784A] mb-5" />
                  <h4 className="text-white font-medium text-lg mb-3">2. Screening</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Our recruiter will get in touch.</p>
                </div>
                <div className="bg-[#141414] border border-white/5 p-8 rounded-lg">
                  <Users className="w-7 h-7 text-[#AB784A] mb-5" />
                  <h4 className="text-white font-medium text-lg mb-3">3. Next Steps</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">And if eligible, we will align you with an interview.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-16 text-left">
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-400 mb-8 text-lg">Quick answers to common questions about joining the team.</p>
              <div className="space-y-4">
                <FAQItem question="How long does the hiring process take to hear back?" answer="Once you submit your resume through our website, our automated systems and HR team begin the screening process almost immediately. Typically, if your skills match an active requirement, you can expect an email or a phone call within 3 to 5 business days. Even if there are no immediate openings, your profile is securely stored in our active database." />
                <FAQItem question="Do you hire freshers or only experienced IT professionals?" answer="Digifocal recruits across all experience levels. While many of our premium enterprise clients require senior developers, tech leads, and highly experienced architects, we also frequently post requirements for junior developers, interns, and freshers who demonstrate exceptional coding fundamentals and a willingness to learn." />
                <FAQItem question="What specific tech stacks are currently in highest demand?" answer="While the technology landscape shifts rapidly, we currently see the highest volume of demand for full-stack JavaScript developers. Proficiency in the MERN stack, Next.js for server-side rendering, and strong cloud deployment skills (AWS, Azure) are consistently requested by our clients. We also have steady requirements for Python developers and UI/UX designers." />
                <FAQItem question="Are the job opportunities remote, hybrid, or work-from-office?" answer="This depends entirely on the specific role and the hiring company. Digifocal handles placements for a wide variety of operational models. We have fully remote positions that allow developers to work from anywhere in India, hybrid roles that require occasional office visits in Mumbai or Thane, and traditional full-time office-based roles." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Bottom */}
      <div className="w-full bg-[#0a0a0a] py-8 flex justify-center border-t border-white/5 overflow-hidden" style={{ maxHeight: "154px" }}>
        <ins className="adsbygoogle"
             style={{ display: "inline-block", width: "100%", maxWidth: "900px", height: "90px", overflow: "hidden" }}
             data-ad-client={ADSENSE_PUBLISHER_ID}
             data-ad-slot={AD_SLOT_BOTTOM}
             data-ad-format="horizontal"
             data-full-width-responsive="false">
        </ins>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={null}
      />
    </Layout>
  );
}