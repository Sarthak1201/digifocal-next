"use client";
import Link from "next/link";
import { ArrowRight, Code2, Bot, Lightbulb, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Software Solutions",
    description:
      "Custom web and mobile applications built with cutting-edge technologies. From enterprise platforms to consumer apps, we deliver scalable solutions that drive your digital presence.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Custom Platforms",
      
      
    ],
    href: "/services/software-solutions",
  },
  {
    icon: Bot,
    title: "Automation Services",
    description:
      "RPA and AI-driven automation solutions that optimize operations, reduce costs, and improve efficiency. Transform manual processes into intelligent workflows.",
    features: [
      "Robotic Process Automation",
      "Workflow Automation",
      "Process Optimization",
      
    ],
    href: "/services/automation",
  },
  {
    icon: Lightbulb,
    title: "Management Consulting",
    description:
      "Strategic technology advisory to navigate digital transformation and make informed architecture decisions. We help you build a technology roadmap for sustainable growth.",
    features: [
      "Business Strategy",
      "Organizational Design",
      "Risk & Compliance",
      "Process Optimization",
      
    ],
    href: "/services/consulting",
  },
  {
    icon: Users,
    title: "Talent Solutions",
    description:
      "End-to-end recruitment and HR consulting services for IT and non-IT sectors. We connect organizations with the right talent to drive business success.",
    features: [
      "IT Recruitment",
      "Executive Search",
      "Contract Staffing",
      "HR Consulting",
      "Talent Management",
    ],
    href: "/services/talent",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero / Header section stays BROWN */}
      <section className="section-padding bg-[#624d3b]">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            {/* <div className="enterprise-divider mb-8" /> */}
            <h1 className="text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
            "We provide you with state-of-the-art End to end services to hand hold you from conceptualization to implementation of technology with your own pace to take a leap to grow your business. Patience is the key at both ends
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="enterprise-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-medium text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="enterprise" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Capability card stays DARK */}
                <div
                  className={`bg-[#1A1A1A] p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                    Capabilities
                  </h4>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    </Layout>
  );
}
