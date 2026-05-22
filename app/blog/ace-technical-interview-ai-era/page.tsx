import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "ServiceNow Developer Interview Questions by Mumbai MNCs 2026",
  description:
    "Prepare for your next technical round with the top ServiceNow Developer interview questions actually asked by major MNCs in Mumbai in 2026, with detailed answer keys.",
  keywords: [
    "ServiceNow developer interview questions",
    "ServiceNow scripting questions",
    "Mumbai IT MNC interviews",
    "GlideRecord",
    "Business Rules",
    "ServiceNow ITSM jobs",
  ],
  alternates: { canonical: "/blog/ace-technical-interview-ai-era" },
  openGraph: {
    title: "ServiceNow Developer Interview Questions by Mumbai MNCs 2026",
    description:
      "Top ServiceNow interview questions asked by Mumbai MNCs in 2026, with detailed answer keys for L2/L3 rounds.",
    url: "/blog/ace-technical-interview-ai-era",
    type: "article",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceNow Developer Interview Questions by Mumbai MNCs 2026",
    description:
      "Top ServiceNow interview questions asked by Mumbai MNCs in 2026, with answer keys.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}