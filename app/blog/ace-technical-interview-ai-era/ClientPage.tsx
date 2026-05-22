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
        <meta name="description" content="Prepare for your next technical round with the top ServiceNow Developer interview questions actually asked by major MNCs in Mumbai in 2026, with detailed answer keys." />
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
                10 min read
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
                ServiceNow has completely taken over enterprise service management. In Mumbai, major IT giants and Global Capability Centers (GCCs) in Powai, Airoli, and Malad are massively scaling their ServiceNow practices across ITSM, ITOM, HRSD, and custom app development. As a result, certified ServiceNow developers are among the most sought-after — and best-paid — professionals in the city's IT job market.
              </p>
              <p>
                Because the platform has evolved from a simple ticketing tool to a complex PaaS (Platform as a Service), the technical interviews have become significantly harder. Interviewers now probe deep into scripting, integrations, and architectural decision-making. To help you clear your L2/L3 rounds, we've compiled the actual interview questions currently being asked by top Mumbai MNCs in 2026, complete with answer keys.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Core ServiceNow Platform Questions</h2>
              <p>
                Interviewers always start by testing your foundational understanding before diving into scripting. Nailing these basics builds the credibility you need for the harder rounds.
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
                <li>
                  <strong className="text-white">What are Access Control Lists (ACLs) and how is security evaluated?</strong><br/>
                  <em>Answer key:</em> ACLs control row and field-level access. Explain the evaluation order (table → field) and how roles, conditions, and scripts combine to grant or deny access.
                </li>
              </ul>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Advanced Scripting & Integration (Crucial for Senior Roles)</h2>
              <p>
                If you are applying for a role with 3+ years of experience, expect heavy focus on integrations and custom scripting. This is where most candidates are filtered out.
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong className="text-white">How do you consume a third-party REST API in ServiceNow?</strong><br/>
                  Interviewers want to hear you talk about <strong>REST Messages</strong>, defining endpoints, setting up HTTP Methods, using Outbound HTTP requests via Script Includes (<code>RESTMessageV2</code> API), and handling the JSON parsing of the response.
                </li>
                <li>
                  <strong className="text-white">What is a Script Include? Explain client-callable vs non-client-callable.</strong><br/>
                  You must explain that Script Includes are reusable server-side scripts. Client-callable ones extend <code>AbstractAjaxProcessor</code> and can be called from the UI via GlideAjax.
                </li>
                <li>
                  <strong className="text-white">How do you optimize a slow-running GlideRecord query?</strong><br/>
                  Key points: Never use <code>.getRowCount()</code> on a large table (use GlideAggregate instead). Ensure you are querying on indexed fields. Limit the data returned using <code>.setLimit()</code>.
                </li>
                <li>
                  <strong className="text-white">What is the difference between synchronous and asynchronous Business Rules?</strong><br/>
                  Async rules run after the database transaction completes via the scheduler, improving form performance — ideal for non-blocking tasks like notifications or integrations.
                </li>
              </ol>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">The Scenario-Based Question</h2>
              <p>
                MNCs love scenario-based questions to test your logic and architectural judgement. A common one in 2026 is:
              </p>
              <blockquote className="border-l-4 border-[#AB784A] pl-4 italic text-gray-300">
                "A client wants to ensure that whenever an Incident's Priority changes to P1, a critical notification is sent to the IT Director, and a specific task is generated for the network team. How would you architect this?"
              </blockquote>
              <p>
                <strong className="text-white">The expected answer:</strong> Do not just say "Business Rule." In 2026, the expected answer is utilizing <strong>Flow Designer</strong>. Explain how you would create a trigger condition (Incident updated, Priority changes to P1), add an action to send the email notification, and add another action to create the catalog task (SCTASK). Emphasize that Flow Designer is the modern best practice over writing custom script in Business Rules — it is low-code, easier to maintain, and upgrade-safe.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Behavioural & Project Questions</h2>
              <p>
                Senior ServiceNow roles also assess how you operate within delivery teams. Be ready for: "Walk me through a complex integration you built end-to-end," "How do you keep customizations upgrade-safe?" and "How do you handle a stakeholder who wants heavy customization against best practice?" Structured, honest answers backed by real project examples win these rounds.
              </p>
              <p>
                ServiceNow specialists frequently command premium contract rates in Mumbai. If you are weighing your options, read our breakdown of <Link href="/blog/contract-vs-full-time-tech-career" className="text-[#AB784A] underline">6-month contract jobs vs full-time CTC in Mumbai</Link>.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Frequently Asked Questions</h2>
              <p><strong className="text-white">Is ServiceNow a good career in 2026?</strong><br/>
                Yes. Demand for certified ServiceNow developers and administrators continues to outstrip supply, making it one of the highest-paying enterprise platforms in India.
              </p>
              <p><strong className="text-white">What is the most important ServiceNow skill for interviews?</strong><br/>
                Strong server-side scripting (GlideRecord, Script Includes), integration knowledge (REST/SOAP), and modern Flow Designer expertise are the most tested areas.
              </p>
              <p><strong className="text-white">Do I need certification to get a ServiceNow job in Mumbai?</strong><br/>
                Certifications (CSA, CAD) significantly improve shortlisting odds, but demonstrated project experience and scripting ability matter just as much.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Final Thoughts</h2>
              <p>
                ServiceNow interviews in Mumbai reward depth, not memorisation. The strongest candidates can explain not just <em>what</em> a feature does, but <em>why</em> they would choose one approach over another. Master the fundamentals, get comfortable with scripting and integrations, and lean into modern, upgrade-safe practices like Flow Designer.
              </p>
              <p>
                Digifocal IT Solutions regularly places ServiceNow developers and administrators across Mumbai's leading MNCs and GCCs. Explore open ServiceNow and platform roles on our <Link href="/careers" className="text-[#AB784A] underline">careers page</Link> and put this preparation to work.
              </p>

              <div className="pt-6">
                <Link href="/careers" className="inline-flex items-center gap-2 text-white font-semibold bg-[#AB784A] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Browse Open Roles <ArrowRight className="w-4 h-4" />
                </Link>
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

    </Layout>
  );
}