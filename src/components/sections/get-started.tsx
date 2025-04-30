"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap, Fuel } from 'lucide-react';
import { getGasFee } from '@/services/ethereum';
import type { GasFee } from '@/services/ethereum';
import Image from 'next/image'; // Import next/image

export function GetStarted() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [gasFee, setGasFee] = useState<GasFee | null>(null);
  const [isLoadingGas, setIsLoadingGas] = useState(true);

  useEffect(() => {
    const fetchGas = async () => {
      try {
        setIsLoadingGas(true);
        const fee = await getGasFee();
        setGasFee(fee);
      } catch (error) {
        console.error("Failed to fetch gas fee:", error);
        setGasFee({ eth: 0 }); // Default or error state
      } finally {
        setIsLoadingGas(false);
      }
    };
    fetchGas();
    // Optionally refresh gas fee periodically
    const intervalId = setInterval(fetchGas, 30000); // Refresh every 30 seconds
    return () => clearInterval(intervalId);
  }, []);


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

   const walletIconHover = {
     scale: 1.1,
     filter: "brightness(1.2) drop-shadow(0 0 10px hsla(var(--accent)/0.5))",
     transition: { type: "spring", stiffness: 400, damping: 10 }
   }


  return (
    <section id="get-started" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="glassmorphism p-8 md:p-12 lg:p-16 rounded-xl text-center"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Start Your DeFi Journey
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Connect your wallet in seconds and unlock the power of Snowbank's intelligent savings and lending.
        </motion.p>

        {/* Animated Wallet Icons */}
        <motion.div variants={itemVariants} className="flex justify-center items-center space-x-6 md:space-x-10 mb-10">
          {/* Using generic placeholders - replace with actual SVGs/Images */}
          <motion.div whileHover={walletIconHover} className="cursor-pointer">
             {/* Placeholder SVG - Replace with actual MetaMask SVG/Image */}
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M17.5 9.5L15 7l-2.5 2.5M17.5 9.5L19 11l-1.5 1.5M17.5 9.5L15 12l2.5 2.5M9.5 14.5L7 17l2.5 2.5M9.5 14.5L12 12l2.5 2.5M9.5 14.5L11 13l1.5-1.5M4.5 4.5l2.5 2.5M4.5 4.5L7 7M4.5 4.5L3 6l1.5 1.5M19.5 19.5l-2.5-2.5M19.5 19.5L17 17m2.5 2.5l1.5-1.5-1.5-1.5"/></svg>
             <p className="text-xs mt-1 text-muted-foreground">MetaMask</p>
          </motion.div>
           <motion.div whileHover={walletIconHover} className="cursor-pointer">
             {/* Placeholder SVG - Replace with actual WalletConnect SVG/Image */}
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z"/><path d="M12 22v-3"/><path d="M10 19a2 2 0 1 1 4 0"/></svg>
             <p className="text-xs mt-1 text-muted-foreground">WalletConnect</p>
          </motion.div>
          {/* Add more wallet icons as needed */}
        </motion.div>

        {/* Connect Button */}
         <motion.div variants={itemVariants}>
             <Button
               size="lg"
               className="animated-gradient-outline group bg-gradient-to-r from-accent to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-primary-foreground text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
               asChild
             >
               <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 Connect Wallet Now
                 <Zap className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-[-15deg]" />
               </motion.a>
             </Button>
         </motion.div>

        {/* Real-time Gas Fee Estimator */}
        <motion.div variants={itemVariants} className="mt-12">
          <Card className="inline-block bg-background/50 border-white/5 backdrop-blur-sm">
            <CardContent className="pt-4 flex items-center space-x-3">
              <Fuel className="text-accent" size={20} />
              <span className="text-sm text-muted-foreground">
                Est. Gas Fee (ETH):
              </span>
              {isLoadingGas ? (
                 <span className="text-sm font-mono text-primary animate-pulse">Loading...</span>
              ) : (
                <span className="text-sm font-mono font-bold text-primary">
                    {gasFee ? `${gasFee.eth.toFixed(5)} ETH` : 'N/A'}
                </span>
              )}

            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

