import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Contract vs Full-Time: Which Tech Career Wins?',
  description: 'A practical comparison of contract and full-time tech careers — pay, growth, flexibility, and trade-offs.',
  alternates: { canonical: '/blog/contract-vs-full-time-tech-career' },
  openGraph: {
    title: 'Contract vs Full-Time: Which Tech Career Wins?',
    description: 'A practical comparison of contract and full-time tech careers — pay, growth, flexibility, and trade-offs.',
    url: '/blog/contract-vs-full-time-tech-career',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contract vs Full-Time: Which Tech Career Wins?',
    description: 'A practical comparison of contract and full-time tech careers — pay, growth, flexibility, and trade-offs.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
