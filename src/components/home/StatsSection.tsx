"use client";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "10+", label: "Projects Delivered" },
  { icon: Users,      value: "20+", label: "Clients Served"     },
  { icon: Globe,      value: "10+", label: "Years Experience"   },
  { icon: Award,      value: "20+", label: "Industry Partners"  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6 } },
};

export function StatsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="enterprise-container">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Value is a plain string — no useState, no JS counter.
                  Google reads the real number directly from the HTML. */}
              <div className="text-3xl md:text-4xl font-medium text-foreground mb-2">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}