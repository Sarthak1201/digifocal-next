import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Companies Hiring React Developers in Pune 2026 — Salary & Skills",
  description:
    "Discover the top companies hiring React developers in Pune for 2026. Real data on average salaries, essential skills, top IT hubs like Hinjewadi and Kharadi, and how to clear interviews.",
  keywords: [
    "React developer jobs Pune",
    "React JS salary Pune 2026",
    "top IT companies Pune hiring React",
    "Hinjewadi IT jobs",
    "frontend developer skills",
  ],
  alternates: { canonical: "/blog/future-of-it-hiring-2026" },
  openGraph: {
    title: "Companies Hiring React Developers in Pune 2026 — Salary & Skills",
    description:
      "Top companies hiring React developers in Pune for 2026, with real salary data, in-demand skills, and interview prep.",
    url: "/blog/future-of-it-hiring-2026",
    type: "article",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Companies Hiring React Developers in Pune 2026 — Salary & Skills",
    description:
      "Top companies hiring React developers in Pune for 2026, with real salary data and interview prep.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}