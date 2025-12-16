'use client'

import { Layers, BarChart3, Zap, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Layers,
    title: "One Place for Everything",
    description: "Jobs, customers, data, workflow — no more tab-switching or copy-pasting between systems.",
  },
  {
    icon: BarChart3,
    title: "Real Margins, Not Guesses",
    description: "Dashboards that show what's actually happening. Live numbers you can trust.",
  },
  {
    icon: Zap,
    title: "Automation That Actually Helps",
    description: "Remove the repetitive admin. Keep the human judgment where it matters.",
  },
  {
    icon: Users,
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
        <div className="max-w-5xl mx-auto">
          {/* Intro Line */}
          <p
            className={`text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Most SMEs run on spreadsheets, inboxes and heroic memory. You&apos;ve built something real — but your systems aren&apos;t empowering you.
          </p>

          {/* Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Your Business <span className="text-primary">Operating System</span>
          </h2>

          {/* Subhead */}
          <p
            className={`text-xl text-muted-foreground text-center max-w-xl mx-auto mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            One simple system, built around how your business actually runs.
          </p>

          {/* Feature Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-6 lg:p-8 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <p
            className={`text-center text-lg transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
