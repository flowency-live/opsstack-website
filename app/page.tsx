import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <WhyThisWorksSection />
      <WhoThisIsForSection />
      <VisionSection />
      <CTASection />
    </main>
  );
};

export default Index;
