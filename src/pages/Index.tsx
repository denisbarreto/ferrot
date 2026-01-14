import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <BrandsSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <LeadCaptureSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
