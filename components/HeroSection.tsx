"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroTileField } from "./HeroTileField";

// Staggered column layout - tiles only align vertically within columns
// Column 1: x ~72%, Column 2: x ~88% (cropped off edge)
// Phase-shifted vertically so no horizontal row alignment
const heroTiles = [
  // Column 1 - main visible column
  {
    id: "relay",
    label: "Relay",
    src: "/stacks/stack_relay.png",
    x: 72,
    y: 18,
    size: 160,
    r: -8,
    z: 1 as const,
  },
  {
    id: "niner",
    label: "Niner",
    src: "/stacks/stack_niner.png",
    x: 70,
    y: 52,
    size: 150,
    r: -5,
    z: 2 as const,
  },
  // Column 2 - offset vertically (phase shifted), partially cropped
  {
    id: "level",
    label: "Level",
    src: "/stacks/stack_level.png",
    x: 90,
    y: 32,
    size: 155,
    r: 7,
    z: 1 as const,
    crop: true,
  },
  {
    id: "track",
    label: "Track",
    src: "/stacks/stack_track.png",
    x: 88,
    y: 68,
    size: 145,
    r: 10,
    z: 2 as const,
    crop: true,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Tile Field - Rareloop style with ghost background + foreground tiles */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <HeroTileField tiles={heroTiles} />

        {/* Fade overlay - tiles fade as they approach the left/text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 45%, transparent 75%)",
            zIndex: 40,
          }}
        />
      </div>

      {/* Tablet: simplified background crop */}
      <div className="absolute inset-0 overflow-hidden hidden md:block lg:hidden">
        <div className="absolute inset-0 opacity-30">
          <HeroTileField tiles={heroTiles} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 90%)",
            zIndex: 40,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            <span className="font-semibold">Your Business.</span>{" "}
            <span className="text-primary font-bold">Digitised Properly.</span>
            <span className="font-semibold">{" "}Finally.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            You&apos;ve built a great business. Now it deserves its own
            operating system.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8">
            We act as your internal CTO and delivery team - designing and
            building the systems your business has always needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <Button variant="default" size="lg" className="group">
              Book a Working Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              See What We Build
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>No commitment required - Discovery call</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
