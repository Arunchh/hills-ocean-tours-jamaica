import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PromoBanner } from "@/components/layout/PromoBanner";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoBanner />
      <Header />
      {children}
      <Footer />
      <MobileCTA />
      <div className="mobile-page-spacer md:hidden" aria-hidden="true" />
    </>
  );
}
