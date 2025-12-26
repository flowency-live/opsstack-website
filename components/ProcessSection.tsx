import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "Discovery Day",
    subtitle: "Clarity first",
    description: "We learn how your business really runs, identify the blockers and show you what can change. You leave with clarity, a value picture and a working starting point.",
    highlight: "Walk away with insights"
  },
  {
    number: "02",
    title: "Build Week",
    subtitle: "Working product in your hands",
    description: "We build the first usable version of your business operating system. Not mockups. Not decks. Real software you can use immediately.",
    highlight: "Real, working software"
  },
  {
    number: "03",
    title: "Evolve",
    subtitle: "Add capability at your pace",
    description: "Your system evolves with your business. Add capability when you need it - not before. No retainers. No long contracts. No surprises.",
    highlight: "Scale on your terms"
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-20 lg:py-28 section-dark">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl">
            {/* Header - Left aligned */}
            <div className="mb-20">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                How it <span className="text-primary">works</span>
              </h2>
              {/* Subtitle - calm setup, not competing with headline */}
              <p className="text-lg text-muted-foreground tracking-wide max-w-2xl">
                From first conversation to working system. Here&apos;s how.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Process Steps - 3 column grid */}
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
              {steps.map((step, index) => (
                <div key={index} className="reveal-child relative">
                  {/* Big Number */}
                  <span className="block text-6xl md:text-7xl font-bold text-primary/20 dark:text-primary/30 mb-4 leading-none">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base font-semibold text-primary mb-6 tracking-wide">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-[28ch]">
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

            {/* Closing Line - separated, given prominence as closing thought */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-xl md:text-2xl font-medium mb-3">
                <mark className="bg-primary/30 dark:bg-primary/40 text-foreground px-1.5 rounded-sm">AI plus humans</mark>{" "}
                <span className="text-foreground">equals practical transformation.</span>
              </p>
              <p className="text-muted-foreground">
                Digital capability used to be slow and expensive - it&apos;s not anymore.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
