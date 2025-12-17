import { ArrowRight } from "lucide-react";

const steps = [
  {
    bars: 1,
    title: "Discovery Day",
    subtitle: "Clarity first",
    description: "We learn how your business really runs, identify the blockers and show you what can change. You leave with clarity, a value picture and a working starting point.",
    highlight: "Walk away with insights"
  },
  {
    bars: 2,
    title: "Build Week",
    subtitle: "Working product in your hands",
    description: "We build the first usable version of your business operating system. Not mockups. Not decks. Real software you can use immediately.",
    highlight: "Real, working software"
  },
  {
    bars: 3,
    title: "Evolve",
    subtitle: "Add capability at your pace",
    description: "You add capability at your own pace using Credits. No retainers. No long contracts. No surprises. Just practical improvements when you want them.",
    highlight: "Scale on your terms"
  },
];

// Logo-style stacked bars component - bottom aligned
const StepBars = ({ count }: { count: number }) => {
  const barStyles = [
    'bg-white/90 dark:border-0 border border-border',  // Top bar - lightest (border in light mode)
    'bg-[hsl(250,60%,75%)]',                           // Middle bar - medium purple
    'bg-primary',                                       // Bottom bar - brand purple
  ];

  return (
    <div className="flex flex-col justify-end gap-1.5 w-14 h-[54px] mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-full ${barStyles[i]}`}
        />
      ))}
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      {/* Lightest background - middle of the wave */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-white/[0.04]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned */}
          <div className="mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              From first conversation to working system. Here&apos;s how.
            </p>
          </div>

          {/* Process Steps - 3 column grid, no cards */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Logo Bars */}
                <StepBars count={step.bars} />

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary text-sm font-medium mb-4">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Highlight with arrow */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <ArrowRight className="w-4 h-4" />
                  {step.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <div>
            <p className="text-lg mb-2">
              <span className="text-primary font-medium">AI plus humans</span>{" "}
              <span className="text-foreground">equals practical transformation.</span>
            </p>
            <p className="text-muted-foreground">
              Digital capability used to be slow and expensive - it&apos;s not anymore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
