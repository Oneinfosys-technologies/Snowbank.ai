
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"; // Import useToast


export function NewsletterSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [email, setEmail] = useState('');
  const { toast } = useToast(); // Initialize toast

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
    hidden: { opacity: 0, filter: 'blur(5px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
       toast({
         title: "Invalid Email",
         description: "Please enter a valid email address.",
         variant: "destructive",
       });
      return;
    }

    // TODO: Implement actual newsletter subscription logic here
    console.log("Subscribing email:", email);

    // Show success toast
     toast({
       title: "Subscribed!",
       description: "Thank you for subscribing to the Snowbank newsletter.",
     });

    setEmail(''); // Clear input after submission
  };

  return (
    <section id="newsletter" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="glassmorphism p-8 md:p-12 rounded-xl text-center max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="inline-block bg-primary/10 p-4 rounded-full mb-6">
            <Mail className="text-primary h-10 w-10" />
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Stay Updated
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
          Be the first to hear Snowbank news, updates, and governance proposals.
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow text-base" // Adjusted text size
            required
            aria-label="Email for newsletter"
          />
          <Button
            type="submit"
            size="lg"
            className="animated-gradient-outline group text-base font-semibold"
          >
            Subscribe
            <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-[15deg]" />
          </Button>
        </motion.form>
         <motion.p variants={itemVariants} className="text-xs text-muted-foreground mt-4">
            Email: <a href="mailto:contact@snowbank.ai" className="hover:text-primary transition-colors">contact@snowbank.ai</a>
         </motion.p>
      </motion.div>
    </section>
  );
}
