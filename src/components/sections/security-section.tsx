
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, Bug, FileText, Lock } from 'lucide-react'; // Use Lock as main icon
import Link from "next/link";

export function SecuritySection() {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: "easeOut" } },
  };

   const lockAnimation = {
     // Example: Subtle pulsating glow or rotation?
     // For demo, let's just scale slightly on visible
     visible: {
         scale: [1, 1.05, 1],
         transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
     }
   }


  const securityFeatures = [
      { icon: ShieldCheck, title: "Smart Contract Audits", description: "Audited by leading firms to ensure resilience and reliability." },
      { icon: Bug, title: "Bug Bounty Program", description: "Report vulnerabilities responsibly and get rewarded." },
      { icon: FileText, title: "Shortfall Insurance Pool", description: "Protection against unforeseen protocol risks." },
  ]

  return (
    <section id="security" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
         <motion.div variants={lockAnimation} initial="hidden" animate="visible" className="inline-block mb-6">
           <Lock className="text-accent h-16 w-16" />
         </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Security First
        </motion.h2>
         <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Snowbank prioritizes the safety and security of user funds through rigorous measures.
        </motion.p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {securityFeatures.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="glassmorphism p-6 h-full text-center border-transparent hover:border-blue-500/30 transition-colors duration-300">
                <feature.icon className="text-blue-400 h-10 w-10 mx-auto mb-4" />
                <h3 className="text-lg font-orbitron font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div variants={itemVariants} className="text-center">
           <Button
             size="lg"
             variant="outline"
             className="animated-gradient-outline group"
             asChild
           >
             <motion.a href="/security" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               Read Security Docs
               <FileText className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
             </motion.a>
           </Button>
       </motion.div>

    </section>
  );
}

