const DemocratisedSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/backgrounds/glass-stacks.webp)',
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/85" />
      {/* Subtle purple tint from top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(250 60% 30% / 0.4) 0%, transparent 60%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            The Future We&apos;re <span className="text-primary">Building</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10">
            We&apos;re building a future where every SME has the operational clarity and digital capability that used to be reserved for enterprises with big IT budgets. A future where your systems work for you - surfacing insights, eliminating busywork, and giving you back time to focus on growth.
          </p>

          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground">
              This is digital transformation
            </p>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              <mark className="mark-amber">democratised</mark>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-2">
              Enterprise-grade capability, accessible, affordable, and built for businesses that actually need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemocratisedSection;
