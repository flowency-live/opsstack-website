import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Placeholder product tiles - replace with actual screenshots later
const productTiles = [
  { id: 1, color: "from-primary/20 to-primary/10" },
  { id: 2, color: "from-purple-500/20 to-purple-600/10" },
  { id: 3, color: "from-blue-500/20 to-blue-600/10" },
  { id: 4, color: "from-primary/15 to-primary/5" },
  { id: 5, color: "from-indigo-500/20 to-indigo-600/10" },
  { id: 6, color: "from-violet-500/20 to-violet-600/10" },
  { id: 7, color: "from-primary/25 to-primary/15" },
  { id: 8, color: "from-purple-400/20 to-purple-500/10" },
  { id: 9, color: "from-blue-400/20 to-blue-500/10" },
  { id: 10, color: "from-primary/20 to-primary/10" },
  { id: 11, color: "from-indigo-400/20 to-indigo-500/10" },
  { id: 12, color: "from-violet-400/20 to-violet-500/10" },
  { id: 13, color: "from-primary/15 to-primary/5" },
  { id: 14, color: "from-purple-500/15 to-purple-600/5" },
  { id: 15, color: "from-blue-500/15 to-blue-600/5" },
  { id: 16, color: "from-primary/20 to-primary/10" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Tilted Product Grid - Positioned absolutely, extending off-screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid container - rotated 15deg, positioned off right edge */}
        <div
          className="absolute z-10 grid grid-cols-4 gap-6 pointer-events-auto"
          style={{
            transform: 'rotate(15deg)',
            right: '-60px',
            top: '-60px',
            width: '850px',
          }}
        >
          {productTiles.map((tile) => (
            <div
              key={tile.id}
              className={`aspect-square rounded-xl bg-gradient-to-br ${tile.color} border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              {/* Placeholder inner content - mockup of a dashboard/app */}
              <div className="w-full h-full p-3 flex flex-col">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 rounded-lg bg-white/5 p-2">
                  <div className="w-3/4 h-2 rounded bg-white/10 mb-2" />
                  <div className="w-1/2 h-2 rounded bg-white/10 mb-3" />
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-8 rounded bg-white/5" />
                    <div className="h-8 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left fade gradient overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 35%, transparent 60%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Your Business.{" "}
            <span className="text-primary">Digitised Properly.</span>
            {" "}Finally.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            You&apos;ve built a great business. Now it deserves its own operating system.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8">
            We act as your internal CTO and delivery team — designing and building the systems your business has always needed.
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
