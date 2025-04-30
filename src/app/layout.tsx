import type {Metadata} from 'next';
import { Inter, Orbitron } from 'next/font/google'; // Import Inter and Orbitron
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Define Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Define Orbitron font
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron', // Optional: Add as CSS variable
  weight: ['400', '700'] // Specify weights you need
});

export const metadata: Metadata = {
  title: 'Snowbank DeFi - Smart Crypto Savings & Lending',
  description: 'Snowbank: A futuristic, decentralized finance (DeFi) protocol for next-gen crypto savings and lending. Where Digital Assets Grow Smarter.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Apply dark theme by default - Moved comment outside the html tag */}
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable, // Use Inter variable
        orbitron.variable // Include Orbitron variable
      )}>
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
