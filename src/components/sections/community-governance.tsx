
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, MessageSquare, Vote, MessageCircle } from 'lucide-react'; // Added icons
import Link from "next/link";

export function CommunityGovernanceSection() {
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

  const communityPoints = [
      { icon: MessageSquare, text: "Forum-driven proposals and feedback loops" },
      { icon: Vote, text: "DAO governance via SNOW tokens" },
      { icon: MessageCircle, text: "Active Discord and dev chats" },
  ]

  return (
    <section id="community" ref={ref} className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-b from-background to-card/10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="glassmorphism p-8 md:p-12 lg:p-16 rounded-xl text-center"
      >
        <motion.div variants={itemVariants} className="inline-block bg-accent/10 p-4 rounded-full mb-6">
            <Users className="text-accent h-10 w-10" />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Community & Governance
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Join our global community of users, developers, and contributors shaping the future of Snowbank.
        </motion.p>

        {/* Community Points */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {communityPoints.map((point, index) => (
                 <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg ">
                     <point.icon className="text-primary h-8 w-8 mb-3" />
                     <p className="text-sm text-muted-foreground">{point.text}</p>
                 </div>
            ))}
        </motion.div>


        {/* CTA Button */}
         <motion.div variants={itemVariants}>
             <Button
               size="lg"
               className="animated-gradient-outline group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-primary-foreground"
               asChild
             >
               <motion.a href="/governance" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 Go to Governance Forum
                 <MessageSquare className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-[-10deg]" />
               </motion.a>
             </Button>
         </motion.div>

      </motion.div>
    </section>
  );
}
