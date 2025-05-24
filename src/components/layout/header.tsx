
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
          {/* New Logo */}
          <div className="relative w-8 h-8">
             <Image 
               src="/src/app/logo.png" 
               alt="Snowbank Logo" 
               width={32} 
               height={32} 
               className="transition-transform duration-300 group-hover:scale-110"
             />
          </div>
          <span className="text-xl font-bold font-orbitron text-primary">
            Snowbank
          </span>
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
