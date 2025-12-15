import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <WhatWeBuildSection />
      <WhyThisWorksSection />
      <WhoThisIsForSection />
      <CTASection />
    </main>
  );
};

export default Index;
