import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Management Consulting',
  description: 'Digital transformation, architecture review, and IT strategy consulting for growing enterprises.',
  alternates: { canonical: '/services/consulting' },
  openGraph: {
    title: 'Management Consulting',
    description: 'Digital transformation, architecture review, and IT strategy consulting for growing enterprises.',
    url: '/services/consulting',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Management Consulting',
    description: 'Digital transformation, architecture review, and IT strategy consulting for growing enterprises.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
