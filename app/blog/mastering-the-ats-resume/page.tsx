import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Mastering the ATS Resume',
  description: "How to build a resume that gets past applicant tracking systems and onto the hiring manager's screen.",
  alternates: { canonical: '/blog/mastering-the-ats-resume' },
  openGraph: {
    title: 'Mastering the ATS Resume',
    description: "How to build a resume that gets past applicant tracking systems and onto the hiring manager's screen.",
    url: '/blog/mastering-the-ats-resume',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Mastering the ATS Resume',
    description: "How to build a resume that gets past applicant tracking systems and onto the hiring manager's screen.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
