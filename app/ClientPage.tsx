"use client";
import { Helmet } from "react-helmet-async"; // 1. Add this import
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import {TestimonialsSection} from "@/components/home/Testimonials"
const Index = () => {
  
  // 2. Define your Company Brand Identity (Schema)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ITService", // More specific than just "Organization"
    "name": "Digifocal IT Solutions",
    "alternateName": "Digifocal",
    "url": "https://digifocal.in",
    "logo": "https://digifocal.in/Dlogo.png",
    "description": "Digifocal provides full-stack web apps, mobile apps, and automation services to help businesses grow.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    // This connects your website to your social profiles in Google's eyes
    "sameAs": [
      "https://www.linkedin.com/company/digifocal",
      "https://www.instagram.com/digifocal" 
      // Add Facebook/Twitter here if you have them
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "alliance@digifocal.in"
    }
  };

  return (
    <>
      {/* 3. Your Existing SEO Component (Keep this!) */}
      <SEO 
        title="Digifocal | Custom Software & IT Consulting in Thane"
        description="Digifocal provides full-stack web apps, mobile apps, and automation services to help businesses grow. Expert IT solutions in Thane, India."
        canonical="/"
      />

      {/* 4. Inject the Brand Schema securely */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <StatsSection />
        <TestimonialsSection/>
        <TrustSection />
        {/* <CTASection /> */}
      </Layout>
    </>
  );
};

export default Index;