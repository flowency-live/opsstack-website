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
    <section className="relative py-20 lg:py-28 section-gradient-accent overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 section-grain" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl">
            {/* Header - Clean two-line style */}
            <div className="mb-16">
              <p className="text-sm uppercase tracking-wide text-white/60 font-medium mb-3">
                The solution
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                Your Business<br />
                <span className="text-white/90">Operating Stack</span>
              </h2>

              <p className="text-lg text-white/70 mt-6 max-w-xl">
                Purpose-built systems that run your business. Workflows, data, automation, and visibility. Designed around how you actually operate.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Feature Cards - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="reveal-child group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-7 hover:bg-white/15 transition-all duration-300"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 group-hover:bg-white/60 transition-colors rounded-l-lg" />

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
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

export default ProblemSection;
