import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Soft Skills: The Hardest Requirement in Tech',
  description: 'Why communication, ownership, and collaboration now decide who gets hired and promoted in tech.',
  alternates: { canonical: '/blog/soft-skills-hardest-requirement-tech' },
  openGraph: {
    title: 'Soft Skills: The Hardest Requirement in Tech',
    description: 'Why communication, ownership, and collaboration now decide who gets hired and promoted in tech.',
    url: '/blog/soft-skills-hardest-requirement-tech',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Soft Skills: The Hardest Requirement in Tech',
    description: 'Why communication, ownership, and collaboration now decide who gets hired and promoted in tech.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
