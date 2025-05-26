"use client"; // Add "use client" directive

import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from '@/components/preloader'; // Import Preloader
import { useState, useEffect } from 'react'; // Import hooks

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

// Removed Metadata export as it's not compatible with "use client"
// export const metadata: Metadata = {
//   title: 'Snowbank DeFi - Smart Crypto Savings & Lending',
//   description: 'Snowbank: A futuristic, decentralized finance (DeFi) protocol for next-gen crypto savings and lending. Where Digital Assets Grow Smarter.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, assets loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Cannot export metadata from a client component
  // Add metadata in a separate head.js or using generateMetadata in page.js if needed server-side
  // Or manage title/meta tags dynamically within the client component using useEffect if simple enough

  useEffect(() => {
    // Example of setting title dynamically on the client
    document.title = isLoading
      ? 'Loading Snowbank...'
      : 'Snowbank DeFi - Smart Crypto Savings & Lending';
  }, [isLoading]);


  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
         {/* Basic meta tags can be placed here if needed */}
         <meta name="description" content="Snowbank: A futuristic, decentralized finance (DeFi) protocol for next-gen crypto savings and lending. Where Digital Assets Grow Smarter." />
         {/* Favicon links */}
         <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
         <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable, // Use Inter variable
        orbitron.variable // Include Orbitron variable
      )}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {children}
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
