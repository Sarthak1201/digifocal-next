"use client";
import Link from "next/link";
import { 
  Building2, 
  Landmark, 
  ShoppingCart, 
  Rocket 
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedText,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";

const industries = [
  {
    icon: Building2,
    title: "Healthcare",
    description:
      "Digital health solutions and compliant systems for modern healthcare providers.",
    href: "/industries/healthcare",
  },
  {
    icon: Landmark,
    title: "Finance & BFSI",
    description:
      "Secure, scalable fintech solutions for banking and financial services.",
    href: "/industries/finance",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Omnichannel retail technology and e-commerce platforms.",
    href: "/industries/retail",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description:
      "Agile technology partnerships for growing businesses.",
    href: "/industries/startups",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="enterprise-container">

        {/* Header */}
        <AnimatedSection className="max-w-2xl mb-16">
          <AnimatedText>
            <h2 className="text-foreground mb-4">Industries We Serve</h2>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-muted-foreground text-lg">
              Deep domain expertise across key sectors, delivering solutions
              tailored to industry-specific challenges.
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <Link
                href={industry.href}
                className="group block p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <industry.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}