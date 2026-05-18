import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Digifocal IT Solutions | Enterprise Software & Consulting',
  description: 'Digifocal IT Solutions provides custom software, cloud automation, and IT consulting services in Mumbai & Thane.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Digifocal IT Solutions | Enterprise Software & Consulting',
    description: 'Digifocal IT Solutions provides custom software, cloud automation, and IT consulting services in Mumbai & Thane.',
    url: '/',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Digifocal IT Solutions | Enterprise Software & Consulting',
    description: 'Digifocal IT Solutions provides custom software, cloud automation, and IT consulting services in Mumbai & Thane.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
