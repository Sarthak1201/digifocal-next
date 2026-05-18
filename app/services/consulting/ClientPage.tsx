"use client";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Shield,
  Network,
  Target,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description:
      "Data-driven strategies to improve performance and achieve long-term growth.",
  },
  {
    icon: Network,
    title: "Organizational Design",
    description:
      "Design efficient operating models, structures, and workflows.",
  },
  {
    icon: Target,
    title: "Change Management",
    description:
      "Enable smooth transitions during business and organizational change.",
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description:
      "Identify, assess, and mitigate operational and regulatory risks.",
  },
  {
    icon: Lightbulb,
    title: "Process Optimization",
    description:
      "Improve efficiency, reduce costs, and streamline core business processes.",
  },
];

export default function Consulting() {
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

            <h1 className="text-foreground mb-6">Management Consulting</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategic management advisory to help organizations improve
              performance, navigate change, and achieve sustainable growth. We
              partner with leaders to solve complex business challenges and
              drive measurable outcomes.
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
              End-to-end management consulting services tailored to your
              business goals.
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
