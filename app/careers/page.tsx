import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Browse current IT openings at Digifocal IT Solutions across India. Apply online today.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers',
    description: 'Browse current IT openings at Digifocal IT Solutions across India. Apply online today.',
    url: '/careers',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Careers',
    description: 'Browse current IT openings at Digifocal IT Solutions across India. Apply online today.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
