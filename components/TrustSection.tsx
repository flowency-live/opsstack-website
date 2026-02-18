'use client'

import { ShieldCheck, Lock, MapPin } from "lucide-react";
import SectionReveal from "./SectionReveal";

const badges = [
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Data protection by design"
  },
  {
    icon: ShieldCheck,
    title: "Security Audited",
    description: "Rigorous code reviews"
  },
  {
    icon: MapPin,
    title: "UK Built & Hosted",
    description: "Data sovereignty assured"
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-20 lg:py-28 section-dark-enhanced overflow-hidden">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(250 75% 58% / 0.4) 20%, hsl(250 75% 58% / 0.4) 50%, transparent 100%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center">
            {/* Shield Icon with Dotted Ring Effect */}
            <div className="relative mx-auto mb-10 w-40 h-40 flex items-center justify-center">
              {/* Outer dotted ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, transparent 45%, hsl(250 75% 58% / 0.1) 50%, transparent 55%)',
                }}
              />
              {/* Dotted circle effect */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  backgroundImage: `radial-gradient(circle at center, transparent 60%, transparent 60%),
                    repeating-conic-gradient(from 0deg, hsl(250 75% 58% / 0.4) 0deg 2deg, transparent 2deg 10deg)`,
                  maskImage: 'radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)',
                }}
              />
              {/* Inner glow */}
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(250 75% 58% / 0.15) 0%, transparent 70%)',
                }}
              />
              {/* Shield container */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
                <ShieldCheck className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              We Are <span className="text-primary">Enterprise Ready</span>
            </h2>

            {/* Subhead */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We understand the needs and concerns of growing businesses,
              data-sensitive sectors, and regulated industries.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="reveal-child group glass-card p-6 text-center hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-md bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              ))}
            </div>

            {/* Supporting text */}
            <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto">
              Every OpStack product undergoes rigorous security review and code audit before deployment.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default TrustSection;
