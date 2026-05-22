import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "How to Get a 40% Hike When Switching IT Jobs in India — Real Numbers",
  description:
    "Actionable strategies and real salary numbers to negotiate a 40% or higher CTC hike when switching IT jobs in India in 2026.",
  keywords: [
    "40% hike switching IT jobs",
    "IT salary hike India 2026",
    "software engineer salary negotiation",
    "job switch CTC increase",
    "Indian tech salary trends",
  ],
  alternates: { canonical: "/blog/soft-skills-hardest-requirement-tech" },
  openGraph: {
    title: "How to Get a 40% Hike When Switching IT Jobs in India — Real Numbers",
    description:
      "Real numbers and negotiation strategies to secure a 40%+ CTC hike when switching IT jobs in India in 2026.",
    url: "/blog/soft-skills-hardest-requirement-tech",
    type: "article",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a 40% Hike When Switching IT Jobs in India — Real Numbers",
    description:
      "Real numbers and negotiation strategies to secure a 40%+ CTC hike in 2026.",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}