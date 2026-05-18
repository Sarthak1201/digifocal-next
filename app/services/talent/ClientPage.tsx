"use client";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Search,
  UserCheck,
  Briefcase,
  Award,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Search,
    title: "IT Recruitment",
    description: "End-to-end technical hiring solutions.",
  },
  {
    icon: UserCheck,
    title: "Executive Search",
    description: "Leadership and C-suite placements.",
  },
  {
    icon: Users,
    title: "Contract Staffing",
    description: "Flexible workforce solutions.",
  },
  {
    icon: Briefcase,
    title: "HR Consulting",
    description: "Strategic HR advisory services.",
  },
  {
    icon: Award,
    title: "Talent Management",
    description: "Retention and development programs.",
  },
];

export default function TalentSolutions() {
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

            <h1 className="text-foreground mb-6">Talent Solutions</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end recruitment and HR consulting services for IT and
              non-IT sectors. We connect organizations with the right talent
              to drive business success.
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
              Comprehensive talent acquisition services.
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
