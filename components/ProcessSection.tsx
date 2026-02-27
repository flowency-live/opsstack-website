import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "Discovery Day",
    subtitle: "Clarity first",
    summary: "We learn how your business really runs and show you what can change.",
    details: [
      "Map your current workflows and pain points",
      "Identify quick wins and high-impact opportunities",
      "Build a working prototype with your actual data",
      "Leave with clarity and a value picture"
    ],
  },
  {
    number: "02",
    title: "Build Week",
    subtitle: "Working product in your hands",
    summary: "We build the first usable version of your business operating system.",
    details: [
      "Real software, not mockups or decks",
      "Your workflows, your language, your data",
      "Iterative feedback throughout the build",
      "Go live within days, not months"
    ],
  },
  {
    number: "03",
    title: "Evolve",
    subtitle: "Add capability at your pace",
    summary: "Your system grows with your business. No lock-in. No surprises.",
    details: [
      "Add features when you need them",
      "No retainers or long contracts",
      "Predictable monthly costs",
      "Full ownership of your data"
    ],
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-20 lg:py-28 section-dark-enhanced section-grain">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl">
            {/* Header - Left aligned */}
            <div className="mb-20">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
                Our process
              </p>
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

            {/* Process Steps - 3 column grid with expandable cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="reveal-child card-expandable group glass-card p-6 cursor-pointer"
                  tabIndex={0}
                >
                  {/* Big Number */}
                  <span className="block text-5xl md:text-6xl font-bold text-primary/30 mb-3 leading-none">
                    {step.number}
                  </span>

                  {/* Title row with expand indicator */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-primary/50 group-hover:text-primary card-indicator flex-shrink-0 mt-1" />
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-primary mb-3 tracking-wide">
                    {step.subtitle}
                  </p>

                  {/* Summary - always visible */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.summary}
                  </p>

                  {/* Detail - revealed on hover */}
                  <div className="card-detail">
                    <ul className="space-y-2 pt-2 border-t border-border/50">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Line - separated, given prominence as closing thought */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-xl md:text-2xl font-medium mb-3">
                <mark className="mark-amber">AI plus humans</mark>{" "}
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
