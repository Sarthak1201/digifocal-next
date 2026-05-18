import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Startup Solutions',
  description: 'MVP development, scalable architecture, and tech-team building for ambitious startups.',
  alternates: { canonical: '/industries/startups' },
  openGraph: {
    title: 'Startup Solutions',
    description: 'MVP development, scalable architecture, and tech-team building for ambitious startups.',
    url: '/industries/startups',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Startup Solutions',
    description: 'MVP development, scalable architecture, and tech-team building for ambitious startups.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
