
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureHighlights from "@/components/FeatureHighlights";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureHighlights />
      <BenefitsSection />
      <HowItWorks />
      <PricingSection />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
