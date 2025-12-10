'use client'

import { Lightbulb, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      icon: Lightbulb,
      title: "Discovery Day",
      subtitle: "Clarity first",
      description: "We learn how your business really runs, identify the blockers and show you what can change. You leave with clarity, a value picture and a working starting point.",
      highlight: "Walk away with insights"
    },
    {
      number: "2",
      icon: Rocket,
      title: "Build Week",
      subtitle: "Working product in your hands",
      description: "We build the first usable version of your business operating system. Not mockups. Not decks. Real software you can use immediately.",
      highlight: "Real, working software"
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Evolve",
      subtitle: "Add capability at your pace",
      description: "You add capability at your own pace using Credits. No retainers. No long contracts. No surprises. Just practical improvements when you want them.",
      highlight: "Scale on your terms"
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      {/* Floating elements */}
      <div className="absolute top-1/3 left-[5%] w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              How it <span className="gradient-text glow-text">works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Three simple steps to transform your operations
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px z-10">
                    <div className={`w-full h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: `${index * 200 + 600}ms`, transformOrigin: 'left' }} />
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary/30" />
                  </div>
                )}

                <div className="glass-card p-8 h-full card-hover relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number Badge */}
                  <div className="number-badge mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlight Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                      <step.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card p-6 md:p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
              <div className="relative">
                <p className="text-lg md:text-xl font-display font-semibold mb-2">
                  <span className="gradient-text glow-text">AI plus humans</span> equals practical transformation.
                </p>
                <p className="text-muted-foreground">
                  Digital capability used to be slow and expensive - it&apos;s not anymore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
