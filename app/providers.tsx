"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Initialize GA4 once
let gaInitialized = false;
const initGA = () => {
  if (gaInitialized) return;
  ReactGA.initialize("G-2134PPD5FJ");
  gaInitialized = true;
};

function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (!pathname) return;
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AdSenseTracker() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (e) {
      // Silence errors if AdSense is blocked
    }
  }, [pathname]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnalyticsTracker />
          <ScrollToTop />
          <AdSenseTracker />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
