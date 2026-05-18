import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Read Digifocal IT Solutions' privacy policy to understand how we handle your data.",
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy',
    description: "Read Digifocal IT Solutions' privacy policy to understand how we handle your data.",
    url: '/privacy-policy',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Privacy Policy',
    description: "Read Digifocal IT Solutions' privacy policy to understand how we handle your data.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
