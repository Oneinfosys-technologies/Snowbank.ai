
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code, BookOpen, TestTube, Database } from 'lucide-react'; // Added TestTube
import Link from "next/link";

export function DeveloperZoneSection() {
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
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(5px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5 } },
  };

  const devTools = [
      { icon: Code, title: "SDKs & APIs", description: "Open-source libraries for seamless integration." },
      { icon: BookOpen, title: "Technical Docs", description: "Comprehensive guides and references." },
      { icon: TestTube, title: "Sandbox Environments", description: "Test your integrations safely." },
      { icon: Database, title: "Snowbank Subgraphs", description: "Access real-time, indexed blockchain data." },
  ]

  return (
    <section id="developers" ref={ref} className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-b from-card/10 to-background">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="glassmorphism p-8 md:p-12 lg:p-16 rounded-xl text-center"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Developer Zone
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Explore the tools and resources to build innovative applications on top of the Snowbank protocol.
        </motion.p>

        {/* Developer Tools Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {devTools.map((tool, index) => (
                 <div key={index} className="text-left p-4 rounded-lg bg-background/30 border border-white/10">
                     <tool.icon className="text-accent h-8 w-8 mb-3" />
                     <h3 className="text-md font-orbitron font-semibold text-primary mb-1">{tool.title}</h3>
                     <p className="text-xs text-muted-foreground">{tool.description}</p>
                 </div>
            ))}
        </motion.div>


        {/* CTA Button */}
         <motion.div variants={itemVariants}>
             <Button
               size="lg"
               className="animated-gradient-outline group"
               asChild
             >
               <motion.a href="/docs" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 View Documentation
                 <BookOpen className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
               </motion.a>
             </Button>
         </motion.div>

      </motion.div>
    </section>
  );
}

