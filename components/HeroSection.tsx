import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow" />

      {/* Animated Orbs - Purple focused */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '1s' }} />

      {/* Decorative floating shape */}
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] border border-primary/20 rounded-3xl rotate-12 animate-float-gentle opacity-40" />
      <div className="absolute bottom-1/4 left-[5%] w-[200px] h-[200px] border border-accent/15 rounded-3xl -rotate-12 animate-float-gentle" style={{ animationDelay: '3s' }} />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Digital transformation for SMEs</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your Business.{" "}
            <span className="gradient-text glow-text">Digitised Properly.</span>
            <br />
            <span className="text-foreground/90">Finally.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            You&apos;ve built a great business. Now it deserves its own operating system.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-8">
            We act as your internal CTO and delivery team - designing and building the systems your business has always needed.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Clarity", "Speed", "Capability"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground">{item}</span>
                {index < 2 && <span className="text-primary/50 mx-2 font-light">+</span>}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group animate-glow">
              Book a Working Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="group">
              <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
              See What We Build
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-12 text-sm text-muted-foreground/60">
            Delivered in days, not months - and shaped around the way you actually work.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
