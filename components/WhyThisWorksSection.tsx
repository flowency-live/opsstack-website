import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const reasons = [
  {
    title: "Days, Not Months",
    summary: "We build in days, not months. No gold-plating. No six-month projects.",
    details: "Traditional software projects drag on for months or years. We move fast because we focus on what matters - getting working tools in your hands. Every feature is built to solve a real problem, not to pad a statement of work.",
  },
  {
    title: "Value First, Always",
    summary: "See outcomes before you commit. If we can't prove value fast, you walk away.",
    details: "We build a working prototype in your discovery session. You'll see your data, your workflows, your business - before you spend a penny. No pitch decks. No promises. Just proof.",
  },
  {
    title: "One System, Not Ten Subscriptions",
    summary: "Replace the patchwork of tools you're paying for but barely using.",
    details: "Most businesses juggle 5-10 SaaS tools that don't talk to each other. Your Stack consolidates everything into one place - one login, one source of truth, one monthly cost you can predict.",
  },
  {
    title: "Capability That Lasts",
    summary: "You get permanent improvement. Real tools. Real value. Not snake-oil.",
    details: "This isn't a consultant's report that sits in a drawer. It's working software that runs your business every day. Your data stays yours. Your processes get better. The value compounds.",
  },
];

const WhyThisWorksSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 section-light-enhanced">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(250 75% 58% / 0.4) 20%, hsl(250 75% 58% / 0.4) 50%, transparent 100%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl">
            {/* Header - Left aligned */}
            <div className="mb-14">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
                The difference
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Why this <span className="text-primary">works</span>
              </h2>
              <p className="text-lg text-foreground font-medium max-w-2xl">
                Real tools that deliver ROI. Not demos. Not decks. Not theatre.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Cards Grid - 2x2 with expandable detail */}
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="reveal-child card-expandable group card-elevated p-8 cursor-pointer"
                  tabIndex={0}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:bg-primary transition-colors" />

                  {/* Title row with expand indicator */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors duration-200">
                      {reason.title}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-primary/50 group-hover:text-primary card-indicator flex-shrink-0 mt-1" />
                  </div>

                  {/* Summary - always visible */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.summary}
                  </p>

                  {/* Detail - revealed on hover */}
                  <div className="card-detail">
                    <p className="text-sm text-muted-foreground leading-relaxed pt-3 border-t border-border/50">
                      {reason.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
