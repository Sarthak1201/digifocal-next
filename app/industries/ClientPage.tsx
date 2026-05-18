"use client";
import Link from "next/link";
import { ArrowRight, Building2, Landmark, ShoppingCart, Rocket } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    title: "Healthcare",
    description: "Digital health solutions and compliant systems for modern healthcare providers. We help healthcare organizations leverage technology to improve patient outcomes and operational efficiency.",
    challenges: ["HIPAA Compliance", "Patient Data Management", "Telemedicine", "Healthcare Analytics", "EHR Integration"],
    href: "/industries/healthcare",
  },
  {
    icon: Landmark,
    title: "Finance & BFSI",
    description: "Secure, scalable fintech solutions for banking and financial services. Our expertise spans regulatory compliance, digital banking, and innovative payment solutions.",
    challenges: ["Regulatory Compliance", "Digital Banking", "Payment Solutions", "Risk Management", "Data Security"],
    href: "/industries/finance",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Omnichannel retail technology and e-commerce platforms that drive customer engagement and sales. We help retailers create seamless shopping experiences.",
    challenges: ["Omnichannel Strategy", "Inventory Management", "Customer Analytics", "POS Integration", "Supply Chain"],
    href: "/industries/retail",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description: "Agile technology partnerships for growing businesses. We provide flexible, cost-effective solutions that scale with your business needs.",
    challenges: ["MVP Development", "Rapid Scaling", "Cost Optimization", "Tech Strategy", "Team Augmentation"],
    href: "/industries/startups",
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <div className="enterprise-divider mb-8" />
            <h1 className="text-foreground mb-6">Industries</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep domain expertise across key sectors, delivering solutions 
              tailored to industry-specific challenges and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div 
                key={industry.title}
                className="enterprise-card"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.challenges.map((challenge) => (
                      <span 
                        key={challenge}
                        className="px-3 py-1 bg-secondary text-sm text-foreground rounded-sm"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={industry.href} className="enterprise-link">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="enterprise-container text-center">
          <h2 className="text-primary-foreground mb-4">Industry Expertise You Can Trust</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our industry specialists understand your unique challenges and deliver proven solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/contact">
              Discuss Your Industry
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
