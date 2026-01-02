"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroTileField } from "./HeroTileField";
import Image from "next/image";

// Staggered column layout - tiles only align vertically within columns
// Phase-shifted vertically so no horizontal row alignment
const heroTiles = [
  // Column 1 - main visible column
  {
    id: "relay",
    label: "Relay",
    src: "/stacks/stack_relay.png",
    x: 68,
    y: 15,
    size: 170,
    r: -10,
    z: 1 as const,
  },
  {
    id: "niner",
    label: "Niner",
    src: "/stacks/stack_niner.png",
    x: 65,
    y: 55,
    size: 155,
    r: -6,
    z: 2 as const,
  },
  // Column 2 - offset vertically (phase shifted), partially cropped
  {
    id: "level",
    label: "Level",
    src: "/stacks/stack_level.png",
    x: 88,
    y: 28,
    size: 165,
    r: 8,
    z: 1 as const,
    crop: true,
  },
  {
    id: "track",
    label: "Track",
    src: "/stacks/stack_track.png",
    x: 85,
    y: 72,
    size: 150,
    r: 12,
    z: 2 as const,
    crop: true,
  },
];

// Mobile tiles - centered layout for below-hero display
const mobileTiles = [
  { id: "relay", src: "/stacks/stack_relay.png", label: "Relay" },
  { id: "level", src: "/stacks/stack_level.png", label: "Level" },
  { id: "niner", src: "/stacks/stack_niner.png", label: "Niner" },
  { id: "track", src: "/stacks/stack_track.png", label: "Track" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Desktop: Tile Field on right - Rareloop style */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <HeroTileField tiles={heroTiles} />
        {/* Fade overlay - tiles fade toward text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 70%)",
            zIndex: 40,
          }}
        />
      </div>

      {/* Tablet: tiles as faded background behind text */}
      <div className="absolute inset-0 overflow-hidden hidden md:block lg:hidden">
        <div className="absolute inset-0 opacity-25">
          <HeroTileField tiles={heroTiles} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 35%, transparent 85%)",
            zIndex: 40,
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-50 min-h-screen flex items-center pt-24 pb-16 md:pb-16">
        <div className="container px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Mobile: Tiles displayed BELOW hero text */}
      <div className="relative z-10 md:hidden pb-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {mobileTiles.map((tile, idx) => (
              <div
                key={tile.id}
                className="relative aspect-square"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -6 : 6}deg)`,
                }}
              >
                <Image
                  src={tile.src}
                  alt={tile.label}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
