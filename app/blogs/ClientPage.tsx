"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Helmet } from "react-helmet-async"; 
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

// --- ADSENSE CONFIGURATION ---
const ADSENSE_PUBLISHER_ID = "ca-pub-5896545782309702"; 
const AD_SLOT_TOP = "XXXXXXXXXX"; 
const AD_SLOT_BOTTOM = "XXXXXXXXXX";

// --- BLOG DATA (Updated Excerpts & Removed Categories) ---
const blogPosts = [
  {
    id: 1,
    slug: "future-of-it-hiring-2026",
    title: "Companies Hiring React Developers in Pune 2026 — Salary, Skills, Top Employers",
    excerpt: "Discover the top companies in Pune aggressively hiring React developers in 2026, complete with real salary insights and required tech stacks.",
    date: "March 21, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    slug: "contract-vs-full-time-tech-career",
    title: "6-Month IT Contract Jobs Mumbai — What They Actually Pay vs Full-Time CTC",
    excerpt: "A deep dive into 6-month IT contract jobs in Mumbai. Are they worth the risk? See how the actual take-home pay compares to a full-time CTC.",
    date: "March 18, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    slug: "ace-technical-interview-ai-era",
    title: "ServiceNow Developer Interview Questions Asked by Mumbai MNCs in 2026 Updated: March 2026",
    excerpt: "Ace your next technical round with this comprehensive list of ServiceNow developer questions currently being asked by top MNCs in Mumbai.",
    date: "March 15, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    slug: "soft-skills-hardest-requirement-tech",
    title: "How to Get a 40% Hike When Switching IT Jobs in India — Real Numbers",
    excerpt: "Discover actionable strategies, real salary numbers, and the niche skills required to negotiate a 40% or higher CTC hike when switching jobs.",
    date: "March 10, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    slug: "mastering-the-ats-resume",
    title: "IT Companies in Thane and Mumbai Hiring Freshers in 2026 — Full List",
    excerpt: "A complete 2026 guide to IT companies, MNCs, and startups in Thane, Navi Mumbai, and Mumbai actively hiring tech freshers.",
    date: "March 5, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    slug: "building-developer-portfolio",
    title: "Average IT Salary in Mumbai vs Pune vs Bangalore 2026 — Skill-wise Breakdown",
    excerpt: "A comprehensive skill-wise breakdown of average IT salaries in Mumbai, Pune, and Bangalore. Compare CTCs for React, DevOps, and more.",
    date: "February 28, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blogs() {
  // --- ADSENSE INITIALIZATION ---
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
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Career Insights & IT Job Tips | Digifocal IT Solutions</title>
        <meta name="description" content="Expert advice for IT professionals to ace interviews, build their tech careers, and land their dream jobs in software development." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <h1 className="text-foreground mb-6 font-bold tracking-tight text-4xl md:text-5xl">Career Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Actionable advice, interview strategies, and insider knowledge to help you land your next big role in tech.
            </p>
          </div>
        </div>
      </section>

      {/* AdSense Top */}
      <div className="w-full bg-[#0a0a0a] py-4 flex justify-center border-y border-white/5 overflow-hidden" style={{ maxHeight: "122px" }}>
        <ins className="adsbygoogle"
             style={{ display: "inline-block", width: "100%", maxWidth: "900px", height: "90px", overflow: "hidden" }}
             data-ad-client={ADSENSE_PUBLISHER_ID}
             data-ad-slot={AD_SLOT_TOP}
             data-ad-format="horizontal"
             data-full-width-responsive="false">
        </ins>
      </div>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col h-full">
                
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#AB784A]" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#AB784A]" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-semibold text-white mb-4 leading-snug group-hover:text-[#AB784A] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#AB784A] hover:text-white transition-colors mt-auto w-fit"
                  >
                    Read Article 
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}

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

    </Layout>
  );
}