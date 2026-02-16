import SectionReveal from "./SectionReveal";

const reasons = [
  {
    title: "Days, Not Months",
    description: "We build in days, not months. No gold-plating. No six-month projects. No waiting.",
  },
  {
    title: "We've Been Where You Are",
    description: "You work with people who've lived these problems - experienced operators who've felt the same pain, paired with sharp minds who move fast.",
  },
  {
    title: "Value First, Always",
    description: "See outcomes before you commit. If we can't prove value fast, you walk away.",
  },
  {
    title: "One System, Not Ten Subscriptions",
    description: "Replace the patchwork of tools you're paying for but barely using.",
  },
  {
    title: "Clarity Before Complexity",
    description: "We cut through noise and find what's really blocking you. Fast.",
  },
  {
    title: "Capability That Lasts",
    description: "You get permanent improvement. Real tools. Real value. Not snake-oil.",
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

            {/* Cards Grid - 2x3 */}
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="reveal-child group card-elevated card-noise p-8"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:bg-primary transition-colors" />

                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
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
