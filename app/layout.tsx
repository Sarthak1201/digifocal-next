import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://digifocal.in"),
  title: {
    default: "Digifocal IT Solutions | Enterprise Software & Consulting",
    template: "%s | Digifocal",
  },
  description:
    "Digifocal IT Solutions provides custom software, cloud automation, and IT consulting services in Mumbai & Thane.",
  authors: [{ name: "Digifocal IT Solutions" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/Dlogo.jpg" },
  other: {
    "google-adsense-account": "ca-pub-5896545782309702",
    "impact-site-verification": "f7e3cae6-3d83-48d8-b850-b86072c56c1e",
    "google-site-verification": "39XDSqfDULYD2h5hkUxAwj0-SlPqFWv_xF8N357jVPI",
  },
  openGraph: {
    title: "Digifocal IT Solutions",
    description: "Transforming businesses through IT and ITES excellence.",
    type: "website",
    url: "https://digifocal.in/",
    images: ["https://digifocal.in/Dlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digifocal IT Solutions",
    description: "Transforming businesses through IT and ITES excellence.",
    images: ["https://digifocal.in/Dlogo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5896545782309702"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}