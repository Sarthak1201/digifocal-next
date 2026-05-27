import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10+", label: "Projects Delivered" },
  { icon: Users,      value: "20+", label: "Clients Served"     },
  { icon: Globe,      value: "10+", label: "Years Experience"   },
  { icon: Award,      value: "20+", label: "Industry Partners"  },
];

// Pure server component — no "use client", no framer-motion, no useState.
// Values are baked into the HTML at build time so Google reads them instantly.
export function StatsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="enterprise-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-medium text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}