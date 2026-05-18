import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'Retail Industry Solutions',
  description: 'Omnichannel commerce, inventory automation, and retail IT consulting from Digifocal.',
  alternates: { canonical: '/industries/retail' },
  openGraph: {
    title: 'Retail Industry Solutions',
    description: 'Omnichannel commerce, inventory automation, and retail IT consulting from Digifocal.',
    url: '/industries/retail',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Retail Industry Solutions',
    description: 'Omnichannel commerce, inventory automation, and retail IT consulting from Digifocal.',
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
