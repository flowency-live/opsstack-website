"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const stacks = [
  {
    id: "relay",
    name: "Relay",
    tagline: "Your Transfer Business. Affordable Intelligence.",
    description: "Professional transfer management software that gets you live in a day, not months. Built for operators who want to stop juggling spreadsheets.",
    badge: "/stacks/stack_relay.png",
    href: "https://relay.opstack.uk",
  },
  {
    id: "level",
    name: "Level",
    tagline: "Your Team's Scorecard. Track what matters.",
    description: "Performance visibility that helps teams level up without the micromanagement. Know where you stand, always.",
    badge: "/stacks/stack_level.png",
    href: "https://level.opstack.uk",
  },
  {
    id: "niner",
    name: "Niner",
    tagline: "Your Operations Dashboard. Real-time clarity.",
    description: "See your business at a glance. The metrics that matter, surfaced automatically.",
    badge: "/stacks/stack_niner.png",
    href: "https://niner.opstack.uk",
  },
];

interface TiltCardProps {
  stack: typeof stacks[0];
}

const TiltCard = ({ stack }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--pointer-x", x.toFixed(2));
    card.style.setProperty("--pointer-y", y.toFixed(2));
  }, []);

  const handleMouseEnter = useCallback(() => {
    cardRef.current?.setAttribute("data-hovered", "true");
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.setAttribute("data-hovered", "false");
    card.style.setProperty("--pointer-x", "0");
    card.style.setProperty("--pointer-y", "0");
  }, []);

  return (
    <Link href={stack.href} target="_blank" rel="noopener noreferrer" className="block">
      <div
        ref={cardRef}
        className="stack-tilt-card group"
        data-hovered="false"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="stack-tilt-inner">
          <div className="stack-card-face">
            {/* Badge */}
            <div className="relative w-20 h-20 mb-6">
              <Image
                src={stack.badge}
                alt={`${stack.name} Stack`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {stack.name}
            </h3>
            <p className="text-sm font-medium text-primary mb-3">
              {stack.tagline}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {stack.description}
            </p>

            {/* Link indicator */}
            <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const StacksSection = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(250 75% 58% / 0.4) 50%, transparent 100%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Stacks</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built Operating Stacks. Each one solves a real problem for a specific type of business.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {stacks.map((stack) => (
                <TiltCard key={stack.id} stack={stack} />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default StacksSection;
