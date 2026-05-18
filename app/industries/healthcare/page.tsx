import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Healthcare Industry Solutions',
  description: 'HIPAA-aware software, EHR integrations, and healthcare IT consulting from Digifocal.',
  alternates: { canonical: '/industries/healthcare' },
  openGraph: {
    title: 'Healthcare Industry Solutions',
    description: 'HIPAA-aware software, EHR integrations, and healthcare IT consulting from Digifocal.',
    url: '/industries/healthcare',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Healthcare Industry Solutions',
    description: 'HIPAA-aware software, EHR integrations, and healthcare IT consulting from Digifocal.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
