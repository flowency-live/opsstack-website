'use client'

import { ArrowRight } from "lucide-react";
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
      title: "Discovery Day",
      subtitle: "Clarity first",
      description: "We learn how your business really runs, identify the blockers and show you what can change. You leave with clarity, a value picture and a working starting point.",
      highlight: "Walk away with insights"
    },
    {
      number: "2",
      title: "Build Week",
      subtitle: "Working product in your hands",
      description: "We build the first usable version of your business operating system. Not mockups. Not decks. Real software you can use immediately.",
      highlight: "Real, working software"
    },
    {
      number: "3",
      title: "Evolve",
      subtitle: "Add capability at your pace",
      description: "You add capability at your own pace using Credits. No retainers. No long contracts. No surprises. Just practical improvements when you want them.",
      highlight: "Scale on your terms"
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="relative py-24 lg:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned */}
          <div className="mb-12">
            <h2
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              How it <span className="text-primary">works</span>
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              From first conversation to working system. Here&apos;s how.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group p-7 rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(262,83%,58%,0.4)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {step.title}
                      </h3>
                      <span className="text-primary text-sm font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <ArrowRight className="w-4 h-4" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg mb-2">
              <span className="text-primary font-medium">AI plus humans</span>{" "}
              <span className="text-foreground">equals practical transformation.</span>
            </p>
            <p className="text-muted-foreground">
              Digital capability used to be slow and expensive - it&apos;s not anymore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
