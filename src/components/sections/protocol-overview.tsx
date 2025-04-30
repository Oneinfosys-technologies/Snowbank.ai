"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BarChart, LineChart, TrendingUp, Users, Lock } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: "Jan", lending: 4.2, borrowing: 6.1 },
  { month: "Feb", lending: 4.5, borrowing: 6.3 },
  { month: "Mar", lending: 4.8, borrowing: 6.5 },
  { month: "Apr", lending: 5.1, borrowing: 6.8 },
  { month: "May", lending: 5.0, borrowing: 6.7 },
  { month: "Jun", lending: 5.3, borrowing: 7.0 },
];

const chartConfig = {
  lending: {
    label: "Lending APY",
    color: "hsl(var(--chart-1))",
    icon: TrendingUp,
  },
  borrowing: {
    label: "Borrowing APY",
    color: "hsl(var(--chart-2))",
     icon: TrendingUp,
  },
}

export function ProtocolOverview() {
   const controls = useAnimation();
   const ref = useRef(null);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
           // Optional: Reset animation when out of view
           // controls.start("hidden");
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
      transition: { staggerChildren: 0.3 },
    },
  };

   const itemVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  const cardHoverEffect = {
     scale: 1.03,
     boxShadow: "0px 10px 30px hsla(var(--accent)/0.2)",
     transition: { type: "spring", stiffness: 300, damping: 15 }
  }


  return (
    <section id="protocol" ref={ref} className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
         variants={sectionVariants}
         initial="hidden"
         animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4"
        >
          The Snowbank Engine
        </motion.h2>
        <motion.p
           variants={itemVariants}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Discover how our decentralized protocol intelligently manages assets to maximize yield and ensure security.
        </motion.p>

        {/* Animated Graph */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center gap-2">
                 <LineChart className="text-accent" /> Historical APY Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
               <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                      accessibilityLayer
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                         cursor={{ fill: 'hsla(var(--accent)/0.1)' }}
                         content={<ChartTooltipContent indicator="line" />}
                       />
                      <Legend content={<ChartLegendContent />} />
                      <Line type="monotone" dataKey="lending" stroke="var(--color-lending)" strokeWidth={2} dot={{ r: 4, fill: "var(--color-lending)" }} activeDot={{ r: 6 }} />
                      <Line type="monotone" dataKey="borrowing" stroke="var(--color-borrowing)" strokeWidth={2} dot={{ r: 4, fill: "var(--color-borrowing)" }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>


        {/* Modular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden"> {/* Added h-full */}
             {/* Placeholder for flip/expand animation */}
             {/* Card content */}
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2"> <TrendingUp className="text-accent"/> Smart Yield Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our algorithms constantly optimize asset allocation across various DeFi strategies to generate competitive returns for lenders.
                </p>
              </CardContent>
            </Card>
          </motion.div>

           <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden"> {/* Added h-full */}
               {/* Placeholder for flip/expand animation */}
               {/* Card content */}
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2"> <Users className="text-accent"/> Decentralized Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SNOW token holders shape the future of the protocol through on-chain voting on proposals and parameter changes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="glassmorphism h-full overflow-hidden"> {/* Added h-full */}
              {/* Placeholder for flip/expand animation */}
              {/* Card content */}
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2"> <Lock className="text-accent"/> Robust Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with security at its core, audited by leading firms, and utilizing over-collateralized loans to protect user funds.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

         {/* Placeholder for Embedded Animation */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
             <Card className="glassmorphism p-8 inline-block">
                  <p className="text-muted-foreground">
                     [Embedded animation demonstrating protocol flow will be here]
                     <br/> (e.g., Lender deposits -> Assets allocated -> Borrower takes loan -> Interest accrues)
                  </p>
             </Card>
        </motion.div>

      </motion.div>
    </section>
  );
}
