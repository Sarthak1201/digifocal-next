"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Helmet } from "react-helmet-async"; 
import { Calendar, Clock, ChevronLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

// --- ADSENSE CONFIGURATION ---
const ADSENSE_PUBLISHER_ID = "ca-pub-5896545782309702"; 
const AD_SLOT_TOP = "XXXXXXXXXX"; 
const AD_SLOT_BOTTOM = "XXXXXXXXXX";

export default function Blog3() {
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
        <title>ServiceNow Interview Questions by Mumbai MNCs 2026 | Digifocal</title>
        <meta name="description" content="Prepare for your next technical round with the top ServiceNow Developer interview questions actually asked by major MNCs in Mumbai in 2026." />
        <meta name="keywords" content="ServiceNow developer interview questions, ServiceNow scripting questions, Mumbai IT MNC interviews, GlideRecord, Business Rules, ServiceNow ITSM jobs" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-[#624d3b]">
        <div className="enterprise-container">
          <Link href="/blogs" className="flex items-center text-sm font-medium text-white hover:text-gray-200 transition-colors mb-8 group w-fit">
            <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6 font-bold tracking-tight text-4xl md:text-5xl leading-tight text-white">
              ServiceNow Developer Interview Questions Asked by Mumbai MNCs in 2026
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-200 font-medium uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-white" />
                Updated: March 2026
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-white" />
                8 min read
              </div>
            </div>
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

      {/* Main Blog Content Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="enterprise-container">
          <div className="max-w-3xl mx-auto">
            
            {/* Article Image */}
            <div className="w-full h-[400px] mb-12 overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                alt="IT Professional Preparing for Interview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-8 text-gray-400">
              <p>
                ServiceNow has completely taken over enterprise service management. In Mumbai, major IT giants and Global Capability Centers (GCCs) in Powai, Airoli, and Malad are massively scaling their ServiceNow practices across ITSM, ITOM, HRSD, and custom app development.
              </p>
              <p>
                Because the platform has evolved from a simple ticketing tool to a complex PaaS (Platform as a Service), the technical interviews have become significantly harder. To help you clear your L2/L3 rounds, we’ve compiled the actual interview questions currently being asked by top Mumbai MNCs in 2026.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Core ServiceNow Platform Questions</h2>
              <p>
                Interviewers always start by testing your foundational understanding before diving into scripting.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Explain the difference between a Business Rule and a Client Script. When would you use which?</strong><br/>
                  <em>Answer key:</em> Emphasize execution location (Server vs. Browser). Business Rules run on database operations (Insert, Update, Delete), while Client Scripts handle UI behavior (onLoad, onChange, onSubmit).
                </li>
                <li>
                  <strong className="text-white">What is a Transform Map, and how do you handle data coalesce?</strong><br/>
                  <em>Answer key:</em> Discuss how Transform Maps map data from a staging table to a target table. Coalescing ensures records are updated instead of duplicated by defining a unique key.
                </li>
                <li>
                  <strong className="text-white">What is the difference between GlideRecord and GlideAggregate?</strong><br/>
                  <em>Answer key:</em> GlideRecord is used for database CRUD operations. GlideAggregate is explicitly used for database calculations (COUNT, SUM, MIN, MAX) and is highly preferred for performance when just checking row counts.
                </li>
              </ul>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Advanced Scripting & Integration (Crucial for Senior Roles)</h2>
              <p>
                If you are applying for a role with 3+ years of experience, expect heavy focus on integrations and custom scripting.
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong className="text-white">How do you consume a third-party REST API in ServiceNow?</strong><br/>
                  Interviewers want to hear you talk about <strong>REST Messages</strong>, defining endpoints, setting up HTTP Methods, using Outbound HTTP requests via Script Includes (<code>RESTMessageV2</code> API), and handling the JSON parsing of the response.
                </li>
                <li>
                  <strong className="text-white">What is a Script Include? Explain the difference between client-callable and non-client-callable.</strong><br/>
                  You must explain that Script Includes are reusable server-side scripts. Client-callable ones extend <code>AbstractAjaxProcessor</code> and can be called from the UI via GlideAjax.
                </li>
                <li>
                  <strong className="text-white">How do you optimize a slow-running GlideRecord query?</strong><br/>
                  Key points: Never use <code>.getRowCount()</code> on a large table (use GlideAggregate instead). Ensure you are querying on indexed fields. Limit the data returned using <code>.setLimit()</code>.
                </li>
              </ol>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">The Scenario-Based Question</h2>
              <p>
                MNCs love scenario-based questions to test your logic. A common one in 2026 is:
              </p>
              <blockquote className="border-l-4 border-[#AB784A] pl-4 italic text-gray-300">
                "A client wants to ensure that whenever an Incident's Priority changes to P1, a critical notification is sent to the IT Director, and a specific task is generated for the network team. How would you architect this?"
              </blockquote>
              <p>
                <strong>The expected answer:</strong> Do not just say "Business Rule." In 2026, the expected answer is utilizing <strong>Flow Designer</strong>. Explain how you would create a trigger condition (Incident updated, Priority changes to P1), add an action to send the email notification, and add another action to create the catalog task (SCTASK). Emphasize that Flow Designer is the modern best practice over writing custom script in Business Rules.
              </p>
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

    </Layout>
  );
}