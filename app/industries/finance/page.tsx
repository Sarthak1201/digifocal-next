import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Finance Industry Solutions',
  description: 'Digital transformation, secure platforms, and talent solutions for banks, NBFCs, and fintech firms.',
  alternates: { canonical: '/industries/finance' },
  openGraph: {
    title: 'Finance Industry Solutions',
    description: 'Digital transformation, secure platforms, and talent solutions for banks, NBFCs, and fintech firms.',
    url: '/industries/finance',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Finance Industry Solutions',
    description: 'Digital transformation, secure platforms, and talent solutions for banks, NBFCs, and fintech firms.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
