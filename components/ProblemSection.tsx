import SectionReveal from "./SectionReveal";

const features = [
  {
    title: "One Place for Everything",
    description: "Jobs, customers, data, workflow - no more tab-switching or copy-pasting between systems.",
  },
  {
    title: "Real Margins, Not Guesses",
    description: "Dashboards that show what's actually happening. Live numbers you can trust.",
  },
  {
    title: "Automation That Actually Helps",
    description: "Remove the repetitive admin. Keep the human judgment where it matters.",
  },
  {
    title: "Shaped to Your Business",
    description: "Built around your people and your process. We won't try to install somebody else's recipe.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-20 lg:py-28 section-light-enhanced">
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
            {/* Header - Clean two-line style */}
            <div className="mb-16">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
                The solution
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Your Business<br />
                <span className="text-primary">Operating Stack</span>
              </h2>

              <p className="text-lg text-muted-foreground mt-6 max-w-xl">
                Purpose-built systems that run your business. Workflows, data, automation, and visibility. Designed around how you actually operate.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Feature Cards - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="reveal-child group card-elevated p-7"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:bg-primary transition-colors" />

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Line */}
            <p className="text-lg">
              <span className="text-muted-foreground">This is digital transformation</span>{" "}
              <mark className="mark-amber font-medium">democratised</mark>{" "}
              <span className="text-muted-foreground">- enterprise-grade capability, accessible, affordable, and built for businesses that actually need it.</span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
