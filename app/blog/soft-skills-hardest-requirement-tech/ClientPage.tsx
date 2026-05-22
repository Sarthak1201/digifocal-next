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

export default function Blog5() {
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
        <title>How to Get a 40% Hike When Switching IT Jobs in India | Real Numbers</title>
        <meta name="description" content="Discover actionable strategies and real salary numbers to negotiate a 40% or higher CTC hike when switching IT jobs in India in 2026." />
        <meta name="keywords" content="40% hike switching IT jobs, IT salary hike India 2026, software engineer salary negotiation, job switch CTC increase, Indian tech salary trends" />
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
              How to Get a 40% Hike When Switching IT Jobs in India — Real Numbers
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-200 font-medium uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-white" />
                March 25, 2026
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                alt="Calculating salary hike and finances on a calculator"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-8 text-gray-400">
              <p>
                The standard IT appraisal in India hovers around 8% to 12%. If you want to significantly change your financial trajectory, switching companies is the fastest route. But while a 20% hike is considered standard for a lateral move, scoring a 40% (or even 50%+) increment requires a highly calculated approach — not luck.
              </p>
              <p>
                As we navigate the 2026 hiring landscape, companies have optimized their budgets. They are no longer throwing money at generic talent, but they <em>will</em> pay top of the market for specialized problem solvers who can demonstrate clear impact. Here are the real numbers and strategies to negotiate a massive hike when you switch.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">The "Niche Skill" Premium</h2>
              <p>
                You cannot demand a 40% hike if your skill set is highly commoditized. If you are a standard Java/Spring Boot developer with 4 years of experience, the market rate is relatively fixed. To break the ceiling, you need to present an "in-demand + scarce" combination of skills.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-white">The 2026 Multipliers:</strong> Pairing a core language with high-value infrastructure or data skills. For example, React + AWS Serverless, or Python + MLOps/LLM Integration.</li>
                <li><strong className="text-white">Real Numbers:</strong> A standard Frontend Developer at 4 YOE might jump from ₹12 LPA to ₹15 LPA (25%). But a Frontend Developer with proven WebGL/Three.js experience for immersive UI can easily jump from ₹12 LPA to ₹18-20 LPA (50%+).</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">The Power of the Counter-Offer (The Right Way)</h2>
              <p>
                The most reliable way to secure a 40% hike is to hold multiple offers. However, the days of bluffing HR are over; recruiters talk, and background checks are rigorous, so honesty is essential.
              </p>
              <p>
                Start by interviewing at Tier-3 or service-based companies to secure a baseline offer. This usually gives you a 20-25% bump. Use this "Offer in Hand" to accelerate interview processes at product-based companies or high-growth startups. When a startup sees you have an offer and a short notice period (or are already serving it), their willingness to stretch their budget increases drastically to close the position quickly.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Negotiating on the Total CTC, Not Just Fixed Pay</h2>
              <p>
                HR departments often have strict percentage caps on fixed salary increments. If they cannot breach the 30% barrier on your fixed pay, negotiate the variable components to reach your 40% target:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-white">Joining Bonus:</strong> This comes out of a different budget pool. Asking for a ₹2-3 Lakh joining bonus can effectively bridge the gap for your first year.</li>
                <li><strong className="text-white">RSUs/ESOPs:</strong> Product companies and startups heavily leverage equity. While not immediate cash, securing strong RSU grants can push your overall financial gain well past 40%.</li>
                <li><strong className="text-white">Performance Multipliers:</strong> Negotiate a higher variable percentage that is tied to realistic, achievable quarterly goals.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Timing Your Switch for Maximum Leverage</h2>
              <p>
                Timing matters as much as skills. The strongest negotiating windows are when you have just shipped a high-visibility project, when your niche skill is trending (e.g., during an AI hiring wave), and during Q1–Q2 when fresh annual budgets are allocated. Avoid switching during hiring freezes or immediately after company-wide cost-cutting, when budgets are tightest.
              </p>
              <p>
                It also helps to understand how compensation differs by city. A 40% hike in Bangalore may be partly eaten by higher rent, while the same hike in Pune stretches further. See our detailed <Link href="/blog/building-developer-portfolio" className="text-[#AB784A] underline">city-by-city salary comparison for Mumbai, Pune, and Bangalore</Link> before you decide where to move.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Frequently Asked Questions</h2>
              <p><strong className="text-white">Is a 40% hike realistic when switching jobs in India?</strong><br/>
                Yes, but typically only for in-demand, specialised skill sets or when you hold competing offers. For commoditised skills, 20–25% is more common.
              </p>
              <p><strong className="text-white">Should I tell a company I have another offer?</strong><br/>
                Yes, honestly and professionally. A genuine competing offer is the single strongest negotiating lever — but never fabricate one.
              </p>
              <p><strong className="text-white">What if HR refuses to go above 30% on fixed pay?</strong><br/>
                Negotiate joining bonus, ESOPs/RSUs, and a higher variable component to bridge the gap to your target total CTC.
              </p>

              <h2 className="text-3xl font-semibold text-white tracking-tight pt-8">Final Thoughts</h2>
              <p>
                Remember, a 40% hike is never given; it is justified. Document your impact, build scarce and in-demand skills, clear the technical rounds decisively, and let the market competition for your specific abilities do the heavy lifting in the negotiation room.
              </p>
              <p>
                Digifocal IT Solutions helps professionals find roles that genuinely advance their careers and compensation. Explore current openings on our <Link href="/careers" className="text-[#AB784A] underline">careers page</Link> and make your next switch count.
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