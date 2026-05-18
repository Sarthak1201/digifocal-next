import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Our Services',
  description: "Explore Digifocal's services: software solutions, automation, management consulting, and talent acquisition.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services',
    description: "Explore Digifocal's services: software solutions, automation, management consulting, and talent acquisition.",
    url: '/services',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Services',
    description: "Explore Digifocal's services: software solutions, automation, management consulting, and talent acquisition.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
