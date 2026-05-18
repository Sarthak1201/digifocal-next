import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Latest insights on IT hiring, technology trends, and career advice from the Digifocal team.',
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Blog & Insights',
    description: 'Latest insights on IT hiring, technology trends, and career advice from the Digifocal team.',
    url: '/blogs',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Blog & Insights',
    description: 'Latest insights on IT hiring, technology trends, and career advice from the Digifocal team.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
