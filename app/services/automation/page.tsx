import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Automation Services',
  description: 'RPA, workflow automation, and AI-driven automation services that eliminate manual inefficiencies.',
  alternates: { canonical: '/services/automation' },
  openGraph: {
    title: 'Automation Services',
    description: 'RPA, workflow automation, and AI-driven automation services that eliminate manual inefficiencies.',
    url: '/services/automation',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Automation Services',
    description: 'RPA, workflow automation, and AI-driven automation services that eliminate manual inefficiencies.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
