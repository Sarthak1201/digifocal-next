import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "IT Companies in Thane & Mumbai Hiring Freshers in 2026 — Full List",
  description:
    "A complete 2026 guide to IT companies, MNCs, and startups in Thane, Navi Mumbai, and Mumbai actively hiring tech freshers — Wagle Estate, Airoli Mindspace, Powai, and more.",
  keywords: [
    "IT companies in Thane hiring freshers",
    "tech jobs Mumbai 2026",
    "fresher IT jobs Navi Mumbai",
    "Wagle Estate software jobs",
    "Airoli Mindspace hiring",
  ],
  alternates: { canonical: "/blog/mastering-the-ats-resume" },
  openGraph: {
    title: "IT Companies in Thane & Mumbai Hiring Freshers in 2026 — Full List",
    description:
      "Where freshers are getting hired across Thane, Navi Mumbai, and Mumbai in 2026, plus the skills each hub values.",
    url: "/blog/mastering-the-ats-resume",
    type: "article",
    images: ["https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Companies in Thane & Mumbai Hiring Freshers in 2026 — Full List",
    description:
      "Where freshers are getting hired across Thane, Navi Mumbai, and Mumbai in 2026.",
    images: ["https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}