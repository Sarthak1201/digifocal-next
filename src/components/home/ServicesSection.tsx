"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Bot, Users, Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Ensure this matches your file name exactly in the public folder
const serviceBg = "/Digfocalwebsite.png";

const servicesList = [
  { icon: Code2, title: "Software Solutions", href: "/services/software-solutions" },
  { icon: Bot, title: "Intelligent Automation", href: "/services/automation" },
  { icon: Lightbulb, title: "Strategic Consulting", href: "/services/consulting" },
  { icon: Users, title: "Talent & HR", href: "/services/talent" },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Animation (min-width: 1024px)
      // Standard behavior: Image minimizes, content reveals
      mm.add("(min-width: 1024px)", () => {
        // Ensure image is visible on desktop
        gsap.set(imageWrapperRef.current, { display: "block", autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",      
            end: "+=100%",         
            scrub: 1,              
            pin: true,             
            anticipatePin: 1,
          },
        });

        // Step 1: Minimize Animation
        tl.to(imageWrapperRef.current, {
          scale: 0.45,            
          x: "5%",                
          transformOrigin: "left center", 
          borderRadius: "3rem",   
          ease: "power2.inOut",
          duration: 1
        }, "start");

        // Step 2: Content Reveal
        tl.fromTo(contentRef.current, 
          { opacity: 0, x: 50, autoAlpha: 0 },
          { opacity: 1, x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
          "start+=0.3"
        );
      });

      // Mobile Layout (max-width: 1023px)
      // Hides the image completely, shows content immediately
      mm.add("(max-width: 1023px)", () => {
        // Hide the image wrapper
        gsap.set(imageWrapperRef.current, { display: "none" });
        
        // Reset content to be fully visible immediately (no scroll trigger needed)
        gsap.set(contentRef.current, { opacity: 1, autoAlpha: 1, x: 0 });
        
        // Reset container height so it doesn't force a full screen scroll pin
        gsap.set(containerRef.current, { height: "auto", minHeight: "auto" });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full lg:h-screen bg-background overflow-hidden flex flex-col lg:flex-row items-stretch">
      
      {/* 1. The Image Wrapper */}
      <div 
        ref={imageWrapperRef} 
        className="absolute inset-0 z-10 overflow-hidden bg-muted origin-left hidden lg:block" // Hidden by default on mobile via CSS class as well to prevent flash
        style={{ width: '100%', height: '100%' }}
      >
        <img 
          src={serviceBg}
          alt="Our Expertise"
          className="w-full h-full object-cover object-top" 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" /> 
      </div>

      {/* 2. The Text Content Area */}
      <div className="container relative z-0 h-full w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full items-stretch">
          <div className="hidden lg:block"></div>

          <div 
            ref={contentRef} 
            className="h-full flex flex-col justify-start pt-16 lg:pt-28 pb-16 px-6 lg:px-16 lg:opacity-0 pointer-events-auto bg-background lg:bg-transparent"
          >
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From conceptualization to execution, we provide the digital infrastructure 
                your business needs to thrive in a connected world.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full max-w-xl">
              {servicesList.map((service) => (
                <Link 
                  key={service.title} 
                  href={service.href}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg text-foreground">{service.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}