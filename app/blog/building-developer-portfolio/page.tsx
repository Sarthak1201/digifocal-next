import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Building a Developer Portfolio That Gets You Hired',
  description: 'What to include, what to skip, and how to present your work so recruiters actually read it.',
  alternates: { canonical: '/blog/building-developer-portfolio' },
  openGraph: {
    title: 'Building a Developer Portfolio That Gets You Hired',
    description: 'What to include, what to skip, and how to present your work so recruiters actually read it.',
    url: '/blog/building-developer-portfolio',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Building a Developer Portfolio That Gets You Hired',
    description: 'What to include, what to skip, and how to present your work so recruiters actually read it.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
