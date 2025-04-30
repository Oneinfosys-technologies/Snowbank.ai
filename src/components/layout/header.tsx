"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Snowflake } from 'lucide-react'; // Using Snowflake as placeholder
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
          {/* Placeholder Logo - Snowflake x Vault */}
          <div className="relative w-8 h-8">
             <Snowflake className="absolute inset-0 w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
             {/* Simple overlay to suggest vault */}
             <div className="absolute inset-1 border border-primary/50 rounded-full group-hover:opacity-0 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold font-orbitron text-primary">
            Snowbank
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#protocol" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Protocol
          </Link>
          <Link href="#token" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Token
          </Link>
           <Link href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Security
          </Link>
          <Link href="#ecosystem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Ecosystem
          </Link>
        </nav>

        <Button variant="outline" className="animated-gradient-outline text-sm">
          Connect Wallet
        </Button>
      </div>
    </motion.header>
  );
}
