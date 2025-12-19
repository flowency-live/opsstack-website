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
    <section id="about" className="relative py-24 lg:py-32">
      {/* Slightly lighter background - wave coming back down */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-white/[0.02]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Left aligned */}
          <div className="mb-12">
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
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative p-7 border-2 border-border dark:border-primary/30 bg-card dark:bg-zinc-800/80 transition-all duration-300 hover:border-primary/60 hover:shadow-lg dark:shadow-primary/5 dark:hover:shadow-primary/10"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/60 group-hover:bg-primary transition-colors" />

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
