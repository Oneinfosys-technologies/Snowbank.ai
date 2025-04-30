
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Network, DollarSign, Activity, Percent, BarChart2 } from 'lucide-react';

export function StatsSection() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

 const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Faster stagger
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] } },
  };

  const stats = [
    { icon: Network, value: "14+", label: "Networks Supported" },
    { icon: DollarSign, value: "$2.3B", label: "Supplied Liquidity" },
    { icon: Activity, value: "30M+ USD", label: "Volume (30d Avg)" },
    { icon: BarChart2, value: "3.1%", label: "Avg. Supply APY (Stable)" },
    { icon: Percent, value: "4.8%", label: "Avg. Borrow APR (Stable)" },
  ];

  return (
    <section id="stats" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Snowbank by the Numbers
        </motion.h2>
         <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Real-time insights into the scale and activity of the Snowbank protocol.
        </motion.p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="glassmorphism text-center p-6 h-full flex flex-col justify-center items-center">
                <stat.icon className="text-accent h-10 w-10 mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
