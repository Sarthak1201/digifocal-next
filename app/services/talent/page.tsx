import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Talent Solutions',
  description: 'IT recruitment and HR consulting that connects elite tech professionals with top companies.',
  alternates: { canonical: '/services/talent' },
  openGraph: {
    title: 'Talent Solutions',
    description: 'IT recruitment and HR consulting that connects elite tech professionals with top companies.',
    url: '/services/talent',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Talent Solutions',
    description: 'IT recruitment and HR consulting that connects elite tech professionals with top companies.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
