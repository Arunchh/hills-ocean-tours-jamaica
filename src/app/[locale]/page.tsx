import { SiteChrome } from "@/components/layout/SiteChrome";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { HomeExplore } from "@/components/sections/HomeExplore";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ValueProps } from "@/components/sections/ValueProps";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <Hero />
        <TrustBar />
        <FeaturedTours />
        <HomeExplore />
        <HowItWorks />
        <ValueProps />
        <Services />
        <Testimonials />
      </main>
    </SiteChrome>
  );
}
