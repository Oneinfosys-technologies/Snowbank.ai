
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle, Layers, Link as LinkIcon } from "lucide-react"; // Changed icon

export function FrostStablecoinSection() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

 const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, x: -50, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
  };


  return (
    <section id="frost" ref={ref} className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-b from-background to-card/10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
         {/* Left Column: Text Content */}
        <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-primary">
              Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FROST</span> — Our Native Stablecoin
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A fully decentralized, overcollateralized stablecoin native to the Snowbank Protocol.
            </p>
            <ul className="space-y-4 mb-10 text-muted-foreground">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent h-5 w-5 shrink-0" />
                <span>Pegged to the dollar</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent h-5 w-5 shrink-0" />
                <span>Backed by on-chain liquidity</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent h-5 w-5 shrink-0" />
                <span>Governed by the community</span>
              </li>
            </ul>
            <Button
              variant="outline"
              size="lg"
              className="animated-gradient-outline group text-base font-semibold"
              asChild
             >
               <motion.a href="/frost-details" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More About FROST
                <LinkIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
               </motion.a>
             </Button>
        </motion.div>

        {/* Right Column: Visual/Card */}
        <motion.div variants={itemVariantsRight}>
            <Card className="glassmorphism p-8 relative overflow-hidden">
                {/* Placeholder for FROST visual */}
                <div className="absolute inset-0 opacity-10 z-0">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="frostPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(1) rotate(45)">
                            <path d="M0 30 L30 60 L60 30 L30 0 Z" fill="hsla(var(--accent)/0.5)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#frostPattern)" />
                    </svg>
                 </div>
                 <div className="relative z-10 text-center">
                     <Layers className="text-cyan-400 mx-auto mb-4 h-16 w-16" />
                     <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">FROST</h3>
                     <p className="text-sm text-muted-foreground">The Stable Foundation of Snowbank</p>
                     <div className="mt-6 text-3xl font-bold text-cyan-400">$1.00</div>
                     <p className="text-xs text-muted-foreground mt-1">Target Peg</p>
                 </div>

            </Card>
        </motion.div>

      </motion.div>
    </section>
  );
}
