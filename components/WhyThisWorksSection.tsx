'use client'

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
      title: "Days, Not Months",
      description: "We build in days, not months. No gold-plating. No six-month projects. No waiting.",
    },
    {
      title: "Senior Delivery Only",
      description: "You work directly with experienced product, tech and ops leaders. No juniors learning on your time.",
    },
    {
      title: "Value First, Always",
      description: "See outcomes before you commit. If we can't prove value fast, you walk away.",
    },
    {
      title: "One System, Not Ten Subscriptions",
      description: "Replace the patchwork of tools you're paying for but barely using.",
    },
    {
      title: "Clarity Before Complexity",
      description: "We cut through noise and find what's really blocking you. Fast.",
    },
    {
      title: "Capability That Lasts",
      description: "You get permanent improvement. Real tools. Real value. Not documentation.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned */}
          <div className="mb-12">
            <h2
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Why this <span className="text-primary">works</span>
            </h2>
          </div>

          {/* Cards Grid - 2x3 */}
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group p-7 rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(262,83%,58%,0.4)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 75 + 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
