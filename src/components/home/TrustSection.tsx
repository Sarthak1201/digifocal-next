"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/AnimatedSection";

// Ensure these files exist in your /public folder!
const clients = [
  { name: "HDFC Ergo", logo: "/HDFCERGO.png" },
  { name: "Kalpataru", logo: "/kalpataru.png" },
  { name: "Datamatics", logo: "/Datamatics.png" },
  { name: "NSEIT", logo: "/NSEIT.png" },
  { name: "Mastek", logo: "/Mastek_logo.png" },
  { name: "GreenPly", logo: "/Greenply_logo.svg.png" },
];

export function TrustSection() {
  // Duplicate the array to ensure seamless looping
  const duplicatedClients = [...clients, ...clients];

  // --- HELPER FUNCTION FOR LOGO STYLES ---
  const getLogoStyles = (clientName: string) => {
    // 1. Base styles for everyone
    let classes = "w-auto object-contain hover:scale-110 transition-transform duration-300 ";

    // 2. Sizing Logic: Make Datamatics much bigger
    if (clientName === "Datamatics") {
      classes += "max-h-20 "; // 80px height (Large)
    } else {
      classes += "max-h-12 "; // 48px height (Standard)
    }

    // 3. Color Logic
    // Keep Datamatics white/bright
    if (clientName === "Datamatics") {
       classes += "brightness-0 invert ";
    }

    // REMOVED: NSEIT logic. It will now render exactly "as is".
    
    return classes;
  };


  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <AnimatedText className="text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Trusted by leading enterprises
          </p>
        </AnimatedText>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`} 
              // Adjusted width to fit the larger Datamatics logo comfortably
              className="relative flex items-center justify-center min-w-[180px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={getLogoStyles(client.name)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}