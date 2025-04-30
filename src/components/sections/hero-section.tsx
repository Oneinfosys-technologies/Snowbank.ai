
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Quote, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroSection() {
  // Placeholder for stats/data
  const totalAssetsManaged = "$2.3 Billion"; // Example data from user text

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative container mx-auto px-4 py-24 md:py-36 text-center min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300"
        >
          A next-gen decentralized liquidity protocol.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Supply, borrow, swap, stake, and explore DeFi like never before — all in one intuitive, secure, and transparent platform.
        </motion.p>

        <motion.blockquote
          variants={itemVariants}
          className="text-xl italic text-accent mb-12 border-l-4 border-accent pl-4 mx-auto max-w-lg text-left"
        >
          <Quote className="inline-block h-5 w-5 mr-2 opacity-50 transform -scale-x-100" />
           Experience finance, reimagined — powered by Web3.
          <Quote className="inline-block h-5 w-5 ml-2 opacity-50" />
        </motion.blockquote>


        {/* Asset Managed Display */}
         <motion.div
           variants={itemVariants}
           className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8"
         >
           <div className="flex items-center gap-3 text-lg glassmorphism p-3 px-6 rounded-lg">
              <TrendingUp className="text-primary" size={24} />
              <span className="text-primary">Over <span className="font-bold">{totalAssetsManaged}</span> in assets managed across Snowbank’s growing multi-chain ecosystem.</span>
           </div>
         </motion.div>


        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="animated-gradient-outline group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-primary-foreground text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <motion.a href="#get-started" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Open App
              <Rocket className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="animated-gradient-outline group text-base font-semibold backdrop-blur-sm bg-transparent hover:bg-white/10 transition-all duration-300"
             asChild
          >
             <motion.a href="#products" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Explore Products
             </motion.a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

