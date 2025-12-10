'use client'

import {
  Users,
  BarChart3,
  Briefcase,
  Package,
  FileText,
  Calendar,
  Bot,
  Smartphone,
  Layers
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhatWeBuildSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceCategories = [
    {
      title: "Customer and workflow tools",
      services: [
        "Custom CRM shaped to your sales process",
        "Job, project and case management tools",
        "Customer and supplier portals"
      ]
    },
    {
      title: "Operational insight",
      services: [
        "Dashboards and reporting tools",
        "Real time margin visibility",
        "Automated reporting and compliance"
      ]
    },
    {
      title: "Automation and intelligence",
      services: [
        "Workflow automation",
        "AI assistants tuned to your business",
        "Smart scheduling and reminders"
      ]
    },
    {
      title: "Systems and apps",
      services: [
        "Mobile and web apps",
        "Mini ERP modules",
        "Stock and asset tracking"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-float-gentle" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What we <span className="gradient-text glow-text">build</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              If you can describe the problem, we can build the system.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`glass-card p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${catIndex * 100 + 200}ms` }}
              >
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg font-display font-semibold gradient-text">
              Your problem. Our system. No templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
