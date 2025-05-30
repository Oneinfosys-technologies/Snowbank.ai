"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image component
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full",
        "glassmorphism border-b border-white/10 !rounded-none !shadow-none" // Override glassmorphism defaults for header
      )}
      style={{ backgroundColor: 'hsla(var(--background) / 0.5)' }} // Ensure some background for backdrop blur
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Responsive Logo */}
          <div className="relative w-20 h-5 sm:w-28 sm:h-7 md:w-36 md:h-10 transition-all duration-300">
            <Image 
              src="/logo.png" 
              alt="Snowbank Logo" 
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#frost" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            FROST
          </Link>
           <Link href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Security
          </Link>
          <Link href="#developers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Developers
          </Link>
           <Link href="#community" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Community
          </Link>
        </nav>

        <Button variant="outline" className="animated-gradient-outline text-sm">
          Open App
        </Button>
      </div>
    </motion.header>
  );
}
