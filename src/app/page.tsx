
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ProductsSection } from '@/components/sections/protocol-overview'; // Renamed import
import { FrostStablecoinSection } from '@/components/sections/frost-stablecoin';
import { StatsSection } from '@/components/sections/stats-section';
import { WhySnowbankSection } from '@/components/sections/why-snowbank';
import { DeveloperZoneSection } from '@/components/sections/developer-zone';
import { SecuritySection } from '@/components/sections/security-section';
import { CommunityGovernanceSection } from '@/components/sections/community-governance';
import { PartnersSection } from '@/components/sections/partners-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { GetStarted } from '@/components/sections/get-started';
import { BackgroundAnimation } from '@/components/background-animation';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundAnimation /> {/* Add background animation */}
      <Header />
      <main className="flex-grow relative z-10"> {/* Ensure content is above background */}
        <HeroSection />
        <ProductsSection /> {/* Renamed component */}
        <FrostStablecoinSection />
        <StatsSection />
        <WhySnowbankSection />
        <DeveloperZoneSection />
        <SecuritySection />
        <CommunityGovernanceSection />
        <PartnersSection />
        <GetStarted />
        <NewsletterSection />
        {/* Add other sections like Token Utility, Ecosystem, Security later */}
      </main>
      <Footer />
    </div>
  );
}
