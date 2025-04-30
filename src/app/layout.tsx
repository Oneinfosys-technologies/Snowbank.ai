import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { Orbitron } from 'next/font/google'; // Import Orbitron
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

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
    <html lang="en" className="dark"> {/* Apply dark theme by default */}
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.variable,
        orbitron.variable // Include Orbitron variable
      )}>
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
