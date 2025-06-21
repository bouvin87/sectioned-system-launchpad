
import Hero from "@/components/Hero";
import FeatureHighlights from "@/components/FeatureHighlights";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeatureHighlights />
      <BenefitsSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
