import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { TourCatalog } from "@/components/sections/TourCatalog";
import { TransferQuote } from "@/components/sections/TransferQuote";
import { ValueProps } from "@/components/sections/ValueProps";
import { Services } from "@/components/sections/Services";
import { TransportPolicy } from "@/components/sections/TransportPolicy";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Nightlife } from "@/components/sections/Nightlife";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedTours />
        <TourCatalog />
        <TransferQuote />
        <HowItWorks />
        <ValueProps />
        <Services />
        <TransportPolicy />
        <ServiceAreaMap />
        <Nightlife />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
      <div className="mobile-page-spacer md:hidden" aria-hidden="true" />
    </>
  );
}
