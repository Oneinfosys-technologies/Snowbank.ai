
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Download, Repeat, Anchor } from 'lucide-react'; // Simplified icons

export function ProductsSection() { // Renamed component
   const controls = useAnimation();
   const ref = useRef(null);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);


  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Adjusted stagger
    },
  };

   const itemVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }, // Adjusted duration
    },
  };

  const cardHoverEffect = {
     scale: 1.03,
     boxShadow: "0px 10px 30px hsla(var(--accent)/0.2)",
     transition: { type: "spring", stiffness: 300, damping: 15 }
  }


  return (
    <section id="products" ref={ref} className="container mx-auto px-4 py-20 md:py-28"> {/* Changed id */}
      <motion.div
         variants={sectionVariants}
         initial="hidden"
         animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16" // Increased bottom margin
        >
          Snowbank Products
        </motion.h2>

        {/* Modular Cards for Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Supply Card */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <TrendingUp className="text-accent"/> Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn yield on your digital assets by contributing to Snowbank's liquidity pools.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Borrow Card */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Download className="text-accent"/> Borrow
                 </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access overcollateralized loans instantly, without intermediaries.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Swap Card */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Repeat className="text-accent"/> Swap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Swap ERC-20 tokens — even borrowed ones — with one click.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stake Card */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <Anchor className="text-accent"/> Stake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contribute to protocol security and earn governance incentives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
