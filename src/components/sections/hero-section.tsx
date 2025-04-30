"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroSection() {
  // Placeholder for real-time APY data
  const [apy, setApy] = useState({ lend: 4.5, borrow: 6.2 });

  // Simulate APY changes
  useEffect(() => {
    const interval = setInterval(() => {
      setApy({
        lend: +(4 + Math.random()).toFixed(2),
        borrow: +(6 + Math.random()).toFixed(2),
      });
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

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
      transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] },
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
          Where Digital Assets Grow Smarter
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Experience the future of decentralized finance. Secure, transparent, and intelligent savings & lending on the blockchain.
        </motion.p>

        {/* Real-time APY Display */}
         <motion.div
           variants={itemVariants}
           className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8"
         >
           <div className="flex items-center gap-2 text-lg glassmorphism p-3 px-5">
              <TrendingUp className="text-green-400" size={20} />
              <span>Lend APY: <span className="font-bold text-green-400">{apy.lend}%</span></span>
           </div>
           <div className="flex items-center gap-2 text-lg glassmorphism p-3 px-5">
             <TrendingUp className="text-red-400 transform rotate-90" size={20} />
             <span>Borrow APY: <span className="font-bold text-red-400">{apy.borrow}%</span></span>
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
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="animated-gradient-outline group text-base font-semibold backdrop-blur-sm bg-transparent hover:bg-white/10 transition-all duration-300"
             asChild
          >
             <motion.a href="#protocol" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
             </motion.a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
