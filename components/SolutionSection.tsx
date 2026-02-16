'use client'

import { Check, Zap, BarChart3, Bot, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SolutionSection = () => {
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

  const features = [
    "A single place for jobs, customers, data and workflow",
    "Dashboards that show real margins, not guesses",
    "Automations that remove repetitive admin",
    "AI used practically, safely and only where it helps",
    "Systems shaped around your people and process",
    "All delivered in days, not months",
  ];

  const notFeatures = [
    "Not software you have to bend yourself to fit",
    "Not a one-size-fits-all CRM",
    "Not a template",
    "Not a patchwork of tools held together with hope",
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Your Business{" "}
              <span className="gradient-text glow-text">Operating System</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One simple system, built around how your business actually runs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What it's NOT */}
            <div className={`glass-card p-8 border-destructive/20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive font-bold">✕</span>
                </div>
                What we don&apos;t build
              </h3>
              <ul className="space-y-4">
                {notFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-muted-foreground">✕</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What it IS */}
            <div className={`glass-card p-8 border-primary/30 relative overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                What we deliver
              </h3>
              <ul className="space-y-4 relative">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground group">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Zap, label: "Speed", desc: "days, not months" },
              { icon: BarChart3, label: "Visibility", desc: "real-time data" },
              { icon: Bot, label: "Practical AI", desc: "useful automation, not gimmicks" },
              { icon: Users, label: "Human-first", desc: "built around your team" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
