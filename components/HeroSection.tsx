import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Clean gradient background - subtle, not mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Your Business.{" "}
              <span className="text-primary">Digitised Properly.</span>
              {" "}Finally.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-4">
              You&apos;ve built a great business. Now it deserves its own operating system.
            </p>

            <p className="text-base text-muted-foreground/80 mb-8">
              We act as your internal CTO and delivery team — designing and building the systems your business has always needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Button variant="default" size="lg" className="group">
                Book a Working Session
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                See What We Build
              </Button>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No commitment required • Discovery call</span>
            </div>
          </div>

          {/* Right Column - Media Placeholder */}
          <div className="relative lg:pl-8">
            {/* Product screenshot / demo placeholder */}
            <div className="relative aspect-[4/3] rounded-xl border border-border/50 bg-card/30 overflow-hidden">
              {/* Placeholder content - replace with actual screenshot/video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Product demo or screenshot
                  </p>
                </div>
              </div>

              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            </div>

            {/* Floating metrics - optional social proof */}
            <div className="absolute -bottom-4 -left-4 lg:left-0 px-4 py-3 rounded-lg bg-card border border-border/50 shadow-lg">
              <p className="text-2xl font-bold text-foreground">3 days</p>
              <p className="text-xs text-muted-foreground">Average time to first delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
