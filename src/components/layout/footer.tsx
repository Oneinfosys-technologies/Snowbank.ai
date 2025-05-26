"use client";

import Link from 'next/link';
import { Github, Twitter, Disc, Mail } from 'lucide-react'; // Using Disc for Discord, Added Mail
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 mt-20 bg-black/20 backdrop-blur-sm overflow-hidden">
      {/* Subtle Snowfall Effect Placeholder - using CSS radial gradients */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, white 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, white 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, white 1px, transparent 1px),
            radial-gradient(circle at 90% 90%, white 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 70px 70px, 60px 60px, 80px 80px, 40px 40px',
          animation: 'snowfall 20s linear infinite',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Changed to 4 columns */}
          {/* Column 1: Brand & Copyright */}
          <div>
            {/* Responsive Logo */}
            <div className="relative w-40 h-10 sm:w-56 sm:h-14 md:w-72 md:h-20 mb-2">
              <Image 
                src="/logo.png" 
                alt="Snowbank Logo" 
                fill
                className="object-contain"
                loading="lazy"
                priority={false}
              />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-primary mb-2">Snowbank</h3>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Snowbank Protocol. All rights reserved.
              <br />
              Experience finance, reimagined.
            </p>
            <div className="mt-4 flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snowbank Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snowbank Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snowbank Discord" className="text-muted-foreground hover:text-primary transition-colors"><Disc size={18} /></a>
                <a href="mailto:contact@snowbank.ai" aria-label="Contact Snowbank Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          {/* Column 2: Products (Placeholder - adjust links) */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-primary mb-2 tracking-wider">PRODUCTS</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Supply</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Borrow</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Swap</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Stake</Link></li>
              <li><Link href="#frost" className="text-muted-foreground hover:text-primary transition-colors">FROST Stablecoin</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-primary mb-2 tracking-wider">RESOURCES</h4>
             <ul className="space-y-1 text-xs">
              <li><Link href="/brand-assets" className="text-muted-foreground hover:text-primary transition-colors">Brand Assets & Guidelines</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">Help & Support Docs</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Developer Documentation</Link></li>
              <li><Link href="/governance" className="text-muted-foreground hover:text-primary transition-colors">Governance Proposals</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-primary mb-2 tracking-wider">LEGAL</h4>
             <ul className="space-y-1 text-xs">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</Link></li> {/* Link to support page */}
            </ul>
          </div>

        </div>

        {/* Command-line style bottom border */}
        <div className="mt-8 pt-4 border-t border-dashed border-accent/30 text-center text-xs text-muted-foreground">
          <span className="font-mono">// Snowbank Network Status: <span className="text-green-400">Operational</span> [Block: 19876543]</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes snowfall {
          0% { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%; }
          100% { background-position: 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%; }
        }
      `}</style>
    </footer>
  );
}
