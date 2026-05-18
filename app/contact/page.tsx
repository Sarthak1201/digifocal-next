import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Digifocal IT Solutions for custom software, automation, consulting, and IT talent solutions.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with Digifocal IT Solutions for custom software, automation, consulting, and IT talent solutions.',
    url: '/contact',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contact Us',
    description: 'Get in touch with Digifocal IT Solutions for custom software, automation, consulting, and IT talent solutions.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return (
    <Suspense>
      <ClientPage />
    </Suspense>
  );
}
