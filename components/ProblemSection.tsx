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
    title: "Shaped to Your Team",
    description: "Built around your people and your process. Not a template you bend yourself to fit.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Slightly lighter background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-white/[0.02]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Header - Clean two-line style */}
          <div className="mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your Business<br />
              <span className="text-primary">Operating System</span>
            </h2>

            <p className="text-lg text-muted-foreground mt-6 max-w-xl">
              One simple system, built around how your business actually runs.
            </p>

            {/* Accent bar */}
            <div
              className="w-full h-1 mt-6 rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(262 83% 68%) 30%, transparent 100%)'
              }}
            />
          </div>

          {/* Feature Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(262,83%,58%,0.4)]"
              >
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
            <span className="text-muted-foreground">Our superpower isn&apos;t AI.</span>{" "}
            <span className="text-primary font-medium">It&apos;s making digital transformation accessible.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
