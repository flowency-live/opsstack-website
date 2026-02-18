import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BigSaasChallenge from "@/components/BigSaasChallenge";
import ProcessSection from "@/components/ProcessSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import StacksSection from "@/components/StacksSection";
import InsightsSection from "@/components/InsightsSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <BigSaasChallenge />
      <ProcessSection />
      <WhyThisWorksSection />
      <StacksSection />
      <WhoThisIsForSection />
      <TrustSection />
      <InsightsSection />
      <CTASection />
    </main>
  );
};

export default Index;
