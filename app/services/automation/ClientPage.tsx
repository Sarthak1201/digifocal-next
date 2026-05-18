"use client";
import Link from "next/link";
import { ArrowRight, Bot, Workflow, Brain, Cog, FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks with software robots.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline business processes end-to-end.",
  },
  // {
  //   icon: Brain,
  //   title: "AI Integration",
  //   description: "Leverage machine learning for intelligent automation.",
  // },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Analyze and improve operational efficiency.",
  },
  // {
  //   icon: FileText,
  //   title: "Document Processing",
  //   description: "Intelligent document extraction and processing.",
  // },
];

export default function Automation() {
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

            <h1 className="text-foreground mb-6">Automation Services</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
            To identify Repetitive process in your business and automate them 
            with the help of process Automation tools so that your workforce 
            can do better and advanced level work to be motivated at workplace.
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
              Comprehensive automation solutions.
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
