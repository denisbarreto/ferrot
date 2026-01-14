import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load below-the-fold components
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const BrandsSection = lazy(() => import("@/components/BrandsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const LeadCaptureSection = lazy(() => import("@/components/LeadCaptureSection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <BenefitsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <BrandsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <LeadCaptureSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
