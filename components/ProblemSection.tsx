'use client'

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "One Place for Everything",
    description: "Jobs, customers, data, workflow - no more tab-switching or copy-pasting between systems.",
  },
  {
    title: "Real Margins, Not Guesses",
    description: "Dashboards that show what's actually happening. Live numbers you can trust.",
  },
  {
    title: "Automation That Actually Helps",
    description: "Remove the repetitive admin. Keep the human judgment where it matters.",
  },
  {
    title: "Shaped to Your Team",
    description: "Built around your people and your process. Not a template you bend yourself to fit.",
  },
];

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned like Anythink */}
          <div className="mb-16">
            {/* Headline */}
            <h2
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Your Business <span className="text-primary">Operating System</span>
            </h2>

            {/* Subhead */}
            <p
              className={`text-xl text-muted-foreground max-w-xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              One simple system, built around how your business actually runs.
            </p>
          </div>

          {/* Feature Cards - 3x2 Grid like Anythink */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 75 + 200}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p
            className={`text-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-muted-foreground">Our superpower isn&apos;t AI.</span>{" "}
            <span className="text-primary font-medium">It&apos;s making digital transformation accessible.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
