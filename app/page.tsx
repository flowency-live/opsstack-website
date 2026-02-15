import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import StacksSection from "@/components/StacksSection";
import InsightsSection from "@/components/InsightsSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <WhyThisWorksSection />
      <StacksSection />
      <WhoThisIsForSection />
      <InsightsSection />
      <CTASection />
    </main>
  );
};

export default Index;
