import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ProtocolOverview } from '@/components/sections/protocol-overview';
import { GetStarted } from '@/components/sections/get-started';
import { BackgroundAnimation } from '@/components/background-animation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundAnimation /> {/* Add background animation */}
      <Header />
      <main className="flex-grow relative z-10"> {/* Ensure content is above background */}
        <HeroSection />
        <ProtocolOverview />
        <GetStarted />
        {/* Add other sections like Token Utility, Ecosystem, Security later */}
      </main>
      <Footer />
    </div>
  );
}
