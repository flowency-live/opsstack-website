'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA Card */}
          <div className={`glass-card p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Glow Effects */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to build your{" "}
                <span className="gradient-text glow-text">business operating system?</span>
              </h2>

              <p className={`text-muted-foreground mb-4 max-w-xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Start with a working session. No pressure. No sales pitch.
              </p>

              <div className={`flex flex-col gap-4 my-8 text-left max-w-md mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Bring your biggest operational headache</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">We will show you what it looks like as a simple, fast, tailored system</span>
                </div>
              </div>

              <p className={`text-foreground font-medium mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                You leave with clarity and a working prototype before spending anything.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Button variant="hero" size="lg" className="group w-full sm:w-auto animate-glow">
                  Book a Working Session
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="hero-outline" size="lg" className="group w-full sm:w-auto">
                  <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
                  See What We Build
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
