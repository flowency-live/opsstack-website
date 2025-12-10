'use client'

import { Search, Zap, Trophy, UserCheck, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyThisWorksSection = () => {
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

  const reasons = [
    {
      icon: Search,
      title: "Clarity before complexity",
      description: "We cut through noise and find what is really blocking you.",
    },
    {
      icon: Zap,
      title: "Speed with discipline",
      description: "We build in days, not months. No gold plating. No drag. No theatre.",
    },
    {
      icon: Trophy,
      title: "Capability that lasts",
      description: "You get permanent improvement through real tools and real value, not documentation.",
    },
    {
      icon: UserCheck,
      title: "Senior delivery only",
      description: "You work directly with experienced product, technology and operations leaders.",
    },
    {
      icon: DollarSign,
      title: "Value first, always",
      description: "You see outcomes before you commit. If we cannot prove value fast, you walk away.",
      highlight: true
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Floating elements */}
      <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '3s' }} />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why this <span className="gradient-text glow-text">works</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className={`glass-card p-8 card-hover group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="feature-icon mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {reasons.slice(3).map((reason, index) => (
              <div
                key={index}
                className={`glass-card p-8 card-hover group transition-all duration-700 ${reason.highlight ? 'border-accent/30' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className={`feature-icon mb-6 group-hover:scale-110 transition-all duration-300 ${reason.highlight ? 'bg-accent/15 border-accent/30 group-hover:border-accent/50' : 'group-hover:border-primary/50'}`}>
                  <reason.icon className={`w-6 h-6 ${reason.highlight ? 'text-accent' : 'text-primary'}`} />
                </div>
                <h3 className={`font-display text-lg font-semibold mb-3 transition-colors duration-300 ${reason.highlight ? 'group-hover:text-accent' : 'group-hover:text-primary'}`}>{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
