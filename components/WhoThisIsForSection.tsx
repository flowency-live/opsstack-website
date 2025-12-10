'use client'

import { Building2, Users, Briefcase, TrendingUp, Cog, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhoThisIsForSection = () => {
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

  const audiences = [
    { icon: Building2, text: "SMEs turning over £1m to £20m" },
    { icon: Users, text: "Owners drowning in admin they should not be doing" },
    { icon: Briefcase, text: "Teams running the business from Excel and memory" },
    { icon: TrendingUp, text: "Fast growing companies with no internal tech capability" },
    { icon: Cog, text: "Operations too complex for off the shelf software" },
    { icon: Target, text: "Leaders who want visibility, control and simplicity" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Who this is <span className="gradient-text glow-text">for</span>
            </h2>
          </div>

          {/* Audience Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={`glass-card p-5 card-hover flex items-center gap-4 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  <audience.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-300">{audience.text}</p>
              </div>
            ))}
          </div>

          {/* Highlight Statement */}
          <div className={`glass-card p-8 text-center relative overflow-hidden transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-lg md:text-xl font-display font-medium">
                If your business is held together by{" "}
                <span className="gradient-text font-semibold glow-text">good people compensating for bad systems</span>,{" "}
                we fix that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
