"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Product tiles - Stack badges and placeholders
const productTiles = [
  { id: 1, type: "image", src: "/stacks/stack_relay.png", href: "https://relay.opstack.uk", name: "Relay" },
  { id: 2, type: "image", src: "/stacks/stack_level.png", href: "https://level.opstack.uk", name: "Level" },
  { id: 3, type: "image", src: "/stacks/stack_niner.png", href: "https://niner.opstack.uk", name: "Niner" },
  { id: 4, type: "placeholder", color: "from-indigo-500/20 to-indigo-600/10" },
  { id: 5, type: "placeholder", color: "from-violet-500/20 to-violet-600/10" },
  { id: 6, type: "placeholder", color: "from-primary/15 to-primary/5" },
  { id: 7, type: "placeholder", color: "from-purple-400/20 to-purple-500/10" },
  { id: 8, type: "placeholder", color: "from-blue-400/20 to-blue-500/10" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Tilted Product Grid - Behind text, fading from right to left */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Grid container - rotated 15deg, 2 columns, responsive positioning */}
        <div
          className="absolute grid grid-cols-2 gap-5"
          style={{
            transform: 'rotate(15deg)',
            right: 'clamp(5%, calc(50% - 500px), 25%)',
            top: '60px',
            width: '520px',
            zIndex: 3,
          }}
        >
          {productTiles.map((tile) => {
            const tileContent = (
              <div
                className={`relative aspect-square overflow-hidden cursor-pointer ${
                  tile.type === 'placeholder' ? `rounded-2xl bg-gradient-to-br ${tile.color} border border-white/10` : ''
                }`}
                style={{
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {tile.type === 'image' && tile.src ? (
                  <Image
                    src={tile.src}
                    alt={`${tile.name} Stack`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  /* Placeholder inner content */
                  <div className="w-full h-full p-4 flex flex-col dark:hidden">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 rounded-lg bg-white/5 p-3">
                      <div className="w-3/4 h-2.5 rounded bg-white/10 mb-2" />
                      <div className="w-1/2 h-2.5 rounded bg-white/10 mb-4" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-10 rounded bg-white/5" />
                        <div className="h-10 rounded bg-white/5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );

            return tile.type === 'image' && tile.href ? (
              <Link key={tile.id} href={tile.href} target="_blank" rel="noopener noreferrer">
                {tileContent}
              </Link>
            ) : (
              <div key={tile.id}>{tileContent}</div>
            );
          })}
        </div>

        {/* Fade overlay - tiles fade as they approach the left/text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 70%)',
            zIndex: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            <span className="font-semibold">Your Business.</span>{" "}
            <span className="text-primary font-bold">Digitised Properly.</span>
            <span className="font-semibold">{" "}Finally.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            You&apos;ve built a great business. Now it deserves its own operating system.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8">
            We act as your internal CTO and delivery team - designing and building the systems your business has always needed.
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
            <span>No commitment required • Discovery call</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
