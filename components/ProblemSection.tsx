'use client'

import { AlertTriangle, FileSpreadsheet, Copy, Eye, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProblemSection = () => {
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

  const problems = [
    { icon: FileSpreadsheet, text: "Manual updates everywhere" },
    { icon: Copy, text: "Copy-paste between systems" },
    { icon: Eye, text: "No real visibility" },
    { icon: Brain, text: "Decisions made on gut feel" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Floating accents */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-gentle" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">The truth nobody tells SMEs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Spreadsheets feel comfortable{" "}
              <span className="gradient-text">until they become a trap.</span>
            </h2>
          </div>

          {/* Problem Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`glass-card p-4 text-center card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="feature-icon mx-auto mb-3">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className={`glass-card p-8 md:p-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Most SMEs run on spreadsheets, inboxes and heroic memory. You&apos;ve built something real - but your systems haven&apos;t kept up.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Your team is firefighting because the systems you need don&apos;t exist.
                You&apos;re compensating with spreadsheets, memory and heroic effort.
              </p>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />

              <p className="text-xl font-medium text-foreground">
                And here&apos;s the truth: none of this is your fault.
              </p>

              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                SMEs were never given access to the tools, capability or expertise that bigger firms take for granted. Digital transformation was sold as something slow, expensive and out of reach.
              </p>

              <p className="text-lg font-display font-semibold gradient-text pt-4">
                We&apos;re here to change that.
              </p>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-primary/20 bg-primary/5">
              <span className="text-muted-foreground">Our superpower isn&apos;t AI.</span>
              <span className="font-medium gradient-text">It&apos;s making digital transformation accessible.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
