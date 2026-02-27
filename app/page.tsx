import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <HeroSection />
      <ValuesSection />
      <ProblemSection />
      <ProcessSection />
      <WhyThisWorksSection />
      <TrustSection />
      <CTASection />
    </main>
  );
};

export default Index;
