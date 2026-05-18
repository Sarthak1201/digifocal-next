"use client";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedSection,
  AnimatedText,
} from "@/components/animations/AnimatedSection";

const testimonials = [
  {
    id: 1,
    quote:
      "A great team is the outcome of its leader. Digifocal, led by Mr. Alhad Nimbalkar has been an absolute boon for LearningMate and has made it a point to understand priority requirements and meet them as per expectations. It's not a vendor / customer relationship but a customer / partner relationship. Flexibility, adaptability and resilience are synonyms to Digifocal.",
    author: "Zal Doctor", // Replace with actual name
    role: "VP - Talent Acquisition",
  },
  {
    id: 2,
    quote:
      "We have been working with Digifocal for 4+ years for our contract staffing and permanent staffing requirements. Digifocal team takes efforts to understand the job requirements and do the market intelligence to provide the realistic picture of job market ground reality... The team ensures initial technical screening is done so we always get high quality profiles. I recommend Digifocal for their job market reach, thorough market intelligence, and tier 1 service approach.",
    author: "Abhijeet Kothavde", // Replace with actual name
    role: "Managing Director",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-swipe logic: loops every 8 seconds now
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="enterprise-container">
        
        {/* Header */}
        <AnimatedSection className="max-w-2xl mb-16">
          <AnimatedText>
            <h2 className="text-foreground mb-4">Client Success Stories</h2>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-muted-foreground text-lg">
              Trusted by industry leaders to deliver mission-critical digital
              transformations and staffing solutions.
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Carousel Area */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Card Container */}
              <div className="group p-8 md:p-12 bg-card border border-border hover:border-primary/30 transition-all duration-300 rounded-lg shadow-sm">
                <div className="flex flex-col items-start gap-6">
                  
                  {/* Icon with hover animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Quote className="w-10 h-10 text-primary opacity-80" />
                  </motion.div>

                  {/* Testimonial Text & Author */}
                  <div className="space-y-8 w-full">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium italic">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    
                    <div className="border-t border-border pt-6 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {testimonials[activeIndex].author}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                      
                      {/* Optional: Visual indicator of which slide is active */}
                      <span className="text-sm text-muted-foreground/50 font-mono">
                        0{activeIndex + 1} / 0{testimonials.length}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}