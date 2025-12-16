'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

  const steps = [
    "Bring your biggest operational headache",
    "We'll show you what it looks like as a simple, fast, tailored system",
    "You leave with clarity and a working prototype before spending anything",
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned */}
          <div className="mb-12">
            <h2
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Ready to build your{" "}
              <span className="text-primary">business operating system?</span>
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Start with a working session. No pressure. No sales pitch.
            </p>
          </div>

          {/* Steps List */}
          <ul className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`flex items-center gap-4 text-lg text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {step}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button variant="default" size="lg" className="group">
              Book a Working Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              See What We Build
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
