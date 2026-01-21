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
    description: "Professional transfer management software that gets you live in a day, not months. Built for VIP transfer operators who want to stop juggling spreadsheets and WhatsApp threads.",
    badge: "/stacks/stack_relay.png",
    href: "/services#relay",
  },
  {
    id: "track",
    name: "Track",
    tagline: "Your Asset & Fleet Control Layer.",
    description: "Operational visibility for high-value assets that move. Track inventory, handovers, maintenance, uptime, efficiency and utilisation (and more!) in one place.",
    badge: "/stacks/stack_track.png",
    href: "/services#track",
  },
  {
    id: "level",
    name: "Level",
    tagline: "Your Team's Scorecard. Track what matters.",
    description: "Performance visibility that helps teams level up without the micromanagement. Know where you stand, always.",
    badge: "/stacks/stack_level.png",
    href: "/services#level",
  },
  {
    id: "niner",
    name: "Niner",
    tagline: "CRM + Live Operations. Lead to outcome, tracked.",
    description: "A lightweight CRM that punches above its weight. Pipeline, clients, jobs, financials. From first contact to completed work, with live dashboards that surface what matters.",
    badge: "/stacks/stack_niner.png",
    href: "/services#niner",
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
    <Link href={stack.href} className="block h-full">
      <div
        ref={cardRef}
        className="stack-tilt-card group h-full"
        data-hovered="false"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="stack-tilt-inner h-full">
          <div className="stack-card-face h-full flex flex-col">
            {/* Badge - Centered and prominent */}
            <div className="flex justify-center mb-6">
              <div className="relative w-28 h-28">
                <Image
                  src={stack.badge}
                  alt={`${stack.name} Stack`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stack.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {stack.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {stack.description}
              </p>

              {/* Link indicator */}
              <div className="flex items-center justify-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                <span>Explore</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const StacksSection = () => {
  return (
    <section id="stacks" className="relative py-20 lg:py-28 section-dark">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(250 75% 58% / 0.4) 50%, transparent 100%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Stacks</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built Operating Stacks. Each one solves a real problem for a specific type of business and are already in use by our clients.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
