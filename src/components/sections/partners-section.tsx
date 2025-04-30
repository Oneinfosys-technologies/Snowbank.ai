
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image'; // Use next/image for optimized logos

// Placeholder logos - replace with actual partner logos
const partnerLogos = [
  '/placeholder-logo-1.svg', // Example path, replace with actuals
  '/placeholder-logo-2.svg',
  '/placeholder-logo-3.svg',
  '/placeholder-logo-4.svg',
  '/placeholder-logo-5.svg',
  '/placeholder-logo-6.svg',
];

export function PartnersSection() {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(3px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: "easeOut" } },
  };

  const logoHover = {
    scale: 1.1,
    filter: "brightness(1.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }

  return (
    <section id="partners" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Backed & Trusted
        </motion.h2>
         <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Snowbank collaborates with Web3 innovators, DeFi projects, and on-chain analysts for constant growth and network reach.
        </motion.p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
      >
        {partnerLogos.map((logoSrc, index) => (
          <motion.div
             key={index}
             variants={itemVariants}
             whileHover={logoHover}
             className="relative h-12 w-32 md:h-16 md:w-40 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
           >
             {/* Replace with actual Image components when logos are available */}
             <div className="w-full h-full flex items-center justify-center text-muted-foreground border border-dashed border-muted-foreground/50 rounded">
               Logo {index + 1}
            </div>
             {/* <Image
                src={logoSrc}
                alt={`Partner Logo ${index + 1}`}
                layout="fill"
                objectFit="contain"
             /> */}
           </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
