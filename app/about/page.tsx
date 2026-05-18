import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Digifocal IT Solutions — our mission, values, and the team transforming businesses across India.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us',
    description: 'Learn about Digifocal IT Solutions — our mission, values, and the team transforming businesses across India.',
    url: '/about',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Us',
    description: 'Learn about Digifocal IT Solutions — our mission, values, and the team transforming businesses across India.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
