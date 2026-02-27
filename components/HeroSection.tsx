"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import StackAccent from "./StackAccent";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden section-grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Desktop: Hero graphic on right */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/backgrounds/hero-stacks.png)',
            backgroundPosition: 'right center',
          }}
        />
        {/* Fade overlay - graphic fades toward text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 35%, hsl(var(--background) / 0.7) 50%, transparent 70%)",
            zIndex: 40,
          }}
        />
      </div>

      {/* Tablet & Mobile: subtle background treatment */}
      <div className="absolute inset-0 overflow-hidden block lg:hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/backgrounds/hero-stacks.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-50 min-h-screen flex items-center pt-24 pb-16 md:pb-16 pointer-events-none">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl pointer-events-auto">
            {/* Main Heading - Bold typography with StackAccent */}
            <p className="font-display text-xl sm:text-2xl font-light italic tracking-wide text-muted-foreground mb-2">
              YOUR BUSINESS
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
              <span className="text-foreground">DIGITISED</span>
              <br />
              <span className="text-primary">
                PROPERLY
                <StackAccent size="lg" className="ml-3 inline-block" />
              </span>
            </h1>

            {/* Core Promise */}
            <p className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              One login. Your entire business.
            </p>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-4">
              Everything you need to run your operation. Nothing you don&apos;t.
            </p>

            <p className="text-base text-muted-foreground/80 mb-8">
              We build the digital operating layer your business deserves -
              designed around how you actually work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link href="/contact">
                <Button variant="default" size="lg" className="group">
                  Book a Working Session
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#stacks">
                <Button variant="outline" size="lg" className="group">
                  See What We Build
                </Button>
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No commitment required - Discovery call</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
