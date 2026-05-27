"use client";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { Variants } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: 10, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 20, suffix: "+", label: "Clients Served" },
  { icon: Globe, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 20, suffix: "+", label: "Industry Partners" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  // Start at the REAL value so the server-rendered HTML always contains the
  // true number (Google reads this). We only switch to the count-up animation
  // after the component has mounted on the client.
  const [count, setCount] = useState(value);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Reset to 0 and animate up, but only on the client after mount.
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          setCount(0);

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMounted, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    }
  }
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
              <div className="text-3xl md:text-4xl font-medium text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
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