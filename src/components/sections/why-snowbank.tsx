
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, KeyRound, Globe, GitBranch, Users, DatabaseZap } from 'lucide-react';

export function WhySnowbankSection() {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
  };

   const cardHoverEffect = {
     y: -5, // Subtle lift on hover
     transition: { type: "spring", stiffness: 400, damping: 15 }
  }

  const features = [
    { icon: ShieldCheck, title: "Health Factor Monitoring", description: "Track your portfolio’s risk in real-time with built-in safety indicators." },
    { icon: KeyRound, title: "Fully Non-Custodial", description: "Your keys, your coins — always. Snowbank never holds your assets." },
    { icon: Globe, title: "Multi-Network Support", description: "Integrated across top EVM-compatible blockchains for seamless flexibility." },
    { icon: GitBranch, title: "Transparent & Open Source", description: "Smart contracts and transactions are public and verifiable." },
    { icon: Users, title: "Governed by the Community", description: "SNOW token holders vote on upgrades, listings, and protocol decisions." },
    { icon: DatabaseZap, title: "Composable Infrastructure", description: "Plug Snowbank’s liquidity and logic into your own dApps." },
  ];

  return (
    <section id="why-snowbank" ref={ref} className="container mx-auto px-4 py-20 md:py-28 bg-card/5">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Why Choose Snowbank?
        </motion.h2>
         <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover the advantages of using Snowbank for your DeFi activities.
        </motion.p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism p-6 h-full border-transparent hover:border-accent/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                    <feature.icon className="text-accent h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
