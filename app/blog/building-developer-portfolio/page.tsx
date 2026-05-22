import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Average IT Salary in Mumbai vs Pune vs Bangalore 2026 — Skill-wise Breakdown",
  description:
    "A comprehensive skill-wise breakdown of average IT salaries in Mumbai, Pune, and Bangalore for 2026. Compare CTCs for React, DevOps, Full Stack, and FinTech roles, with cost-of-living context.",
  keywords: [
    "Average IT salary Mumbai vs Pune vs Bangalore",
    "tech salaries 2026 India",
    "software engineer CTC comparison",
    "React developer salary Bangalore",
    "DevOps salary Pune",
  ],
  alternates: { canonical: "/blog/building-developer-portfolio" },
  openGraph: {
    title: "Average IT Salary in Mumbai vs Pune vs Bangalore 2026 — Skill-wise Breakdown",
    description:
      "Skill-wise IT salary comparison across Mumbai, Pune, and Bangalore for 2026, with cost-of-living context.",
    url: "/blog/building-developer-portfolio",
    type: "article",
    images: ["https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Average IT Salary in Mumbai vs Pune vs Bangalore 2026",
    description:
      "Skill-wise IT salary comparison across Mumbai, Pune, and Bangalore for 2026.",
    images: ["https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}