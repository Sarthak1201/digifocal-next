"use client";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Retail() {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="enterprise-container">
          <div className="max-w-3xl">
            <Link href="/industries" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Industries</Link>
            <div className="enterprise-divider mb-8" />
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-foreground mb-6">Retail & E-commerce</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Omnichannel retail technology and e-commerce platforms.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary">
        <div className="enterprise-container text-center">
          <h2 className="text-primary-foreground mb-4">Elevate Customer Experience</h2>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
