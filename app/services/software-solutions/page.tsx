import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Software Solutions',
  description: 'Custom web and mobile apps, full-stack development, and unified digital platforms built for scale.',
  alternates: { canonical: '/services/software-solutions' },
  openGraph: {
    title: 'Software Solutions',
    description: 'Custom web and mobile apps, full-stack development, and unified digital platforms built for scale.',
    url: '/services/software-solutions',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Software Solutions',
    description: 'Custom web and mobile apps, full-stack development, and unified digital platforms built for scale.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
