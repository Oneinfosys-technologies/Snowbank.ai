"use client"; // Add 'use client' directive

import Link from 'next/link';
import { Github, Twitter, Disc } from 'lucide-react'; // Using Disc for Discord

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Copyright */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-primary mb-2">Snowbank</h3>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Snowbank Protocol. All rights reserved.
              <br />
              Decentralized Finance, Reimagined.
            </p>
            <div className="mt-4 flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={18} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Disc size={18} /></a> {/* Discord Placeholder */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-primary mb-2 tracking-wider">LINKS</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="#protocol" className="text-muted-foreground hover:text-primary transition-colors">Protocol</Link></li>
              <li><Link href="#token" className="text-muted-foreground hover:text-primary transition-colors">Token</Link></li>
              <li><Link href="#security" className="text-muted-foreground hover:text-primary transition-colors">Security Audits</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal/Info */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-primary mb-2 tracking-wider">INFO</h4>
             <ul className="space-y-1 text-xs">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
               <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
               <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
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
