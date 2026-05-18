import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Digifocal serves finance, healthcare, retail, and startups with tailored IT and recruitment solutions.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries We Serve',
    description: 'Digifocal serves finance, healthcare, retail, and startups with tailored IT and recruitment solutions.',
    url: '/industries',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Industries We Serve',
    description: 'Digifocal serves finance, healthcare, retail, and startups with tailored IT and recruitment solutions.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
