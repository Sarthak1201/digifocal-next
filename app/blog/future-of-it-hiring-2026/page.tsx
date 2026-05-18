import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'The Future of IT Hiring in 2026',
  description: 'How AI, contract work, and remote-first culture are reshaping IT hiring in 2026 and beyond.',
  alternates: { canonical: '/blog/future-of-it-hiring-2026' },
  openGraph: {
    title: 'The Future of IT Hiring in 2026',
    description: 'How AI, contract work, and remote-first culture are reshaping IT hiring in 2026 and beyond.',
    url: '/blog/future-of-it-hiring-2026',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'The Future of IT Hiring in 2026',
    description: 'How AI, contract work, and remote-first culture are reshaping IT hiring in 2026 and beyond.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
