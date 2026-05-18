"use client";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Layers,
  ShoppingCart, // Added for Shopify
  Bot,          // Added for Automation
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Tailored, high-performance web applications designed for scalability, featuring robust architecture and intuitive user experiences to meet your specific business goals.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Speed-optimized, conversion-ready WordPress sites with bespoke designs, ensuring effortless content management for non-technical teams.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify E-commerce",
    description:
      "Streamlined Shopify storefronts built for sales performance, offering custom designs and seamless payment integration aligned with your operational needs.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Scalable full-stack applications for mobile and web, equipped with secure payment gateways, real-time capabilities, and enterprise-grade architecture.",
  },
  {
    icon: Database,
    title: "Billing & CRM Platforms",
    description:
      "Intelligent systems for managing subscriptions, automating invoicing, and tracking the complete customer lifecycle to improve client retention.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description:
      "Advanced workflows that eliminate repetitive manual tasks and streamline operations, empowering your team to make smarter, data-driven decisions.",
  },
];

export default function SoftwareSolutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="text-sm text-white hover:underline mb-4 inline-block"
            >
              ← Back to Services
            </Link>

            {/* <div className="enterprise-divider mb-8" /> */}

            <h1 className="text-foreground mb-6">Software Solutions</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Development of responsive approach for both Web and Mobile apps across all operating systems.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="enterprise-container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-foreground mb-4">Our Capabilities</h2>
            <p className="text-muted-foreground">
              End-to-end software development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="enterprise-card">
                <cap.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}