import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "6-Month IT Contract Jobs Mumbai — Pay vs Full-Time CTC 2026",
  description:
    "Deciding between a 6-month IT contract and a full-time role in Mumbai? We break down the real in-hand pay differences, hidden tax costs, and career impacts for 2026.",
  keywords: [
    "6 month IT contract jobs Mumbai",
    "contract vs full time CTC India",
    "IT contractor salary Mumbai",
    "C2H jobs Mumbai",
    "freelance tech jobs Mumbai",
  ],
  alternates: { canonical: "/blog/contract-vs-full-time-tech-career" },
  openGraph: {
    title: "6-Month IT Contract Jobs Mumbai — Pay vs Full-Time CTC 2026",
    description:
      "Real in-hand pay, hidden tax costs, and career trade-offs of 6-month IT contracts vs full-time roles in Mumbai.",
    url: "/blog/contract-vs-full-time-tech-career",
    type: "article",
    images: ["https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"],
  },
  twitter: {
    card: "summary_large_image",
    title: "6-Month IT Contract Jobs Mumbai — Pay vs Full-Time CTC 2026",
    description:
      "Real in-hand pay, hidden tax costs, and career trade-offs of contract vs full-time roles in Mumbai.",
    images: ["https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"],
  },
};

export default function Page() {
  return <ClientPage />;
}