"use client";
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string; // e.g. "/services"
  image?: string;     // Optional: specific image for this page
  type?: 'website' | 'article';
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  image = "/Dlogo.png", // Default to your logo if no image is provided
  type = "website" 
}: SEOProps) {
  
  const siteUrl = "https://digifocal.in"; 
  
  // Logic: If canonical path is provided, combine it. Otherwise, use current URL.
  const fullUrl = canonical 
    ? `${siteUrl}${canonical}` 
    : typeof window !== 'undefined' ? window.location.href : siteUrl;

  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* 1. Standard Metadata */}
      {/* Logic: Only add "| Digifocal" if it's not already in the title */}
      <title>{title.includes("Digifocal") ? title : `${title} | Digifocal`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* 2. Open Graph (Facebook/LinkedIn/WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* 3. Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}