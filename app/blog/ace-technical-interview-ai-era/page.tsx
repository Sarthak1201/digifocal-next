import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: 'How to Ace the Technical Interview in the AI Era',
  description: "What hiring managers really evaluate now that AI assistants are part of every developer's workflow.",
  alternates: { canonical: '/blog/ace-technical-interview-ai-era' },
  openGraph: {
    title: 'How to Ace the Technical Interview in the AI Era',
    description: "What hiring managers really evaluate now that AI assistants are part of every developer's workflow.",
    url: '/blog/ace-technical-interview-ai-era',
    type: "website",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: 'How to Ace the Technical Interview in the AI Era',
    description: "What hiring managers really evaluate now that AI assistants are part of every developer's workflow.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
