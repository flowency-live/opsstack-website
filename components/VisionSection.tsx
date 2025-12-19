const VisionSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/future-bg.jpg)',
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      {/* Subtle purple tint */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsl(250 60% 30% / 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            The Future We&apos;re <span className="text-primary">Building</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            We&apos;re not just building software. We&apos;re building a future where every SME has the operational clarity and digital capability that used to be reserved for enterprises with <a href="https://www.youtube.com/watch?v=XEFZ30Cvdnc" target="_blank" rel="noopener noreferrer" className="text-foreground no-underline hover:text-foreground">six-seven</a> figure IT budgets. A future where your systems work for you - surfacing insights, eliminating busywork, and giving you back time to focus on growth.
          </p>

          <p className="text-lg md:text-xl">
            <span className="text-foreground">This is digital transformation</span>{" "}
            <mark className="bg-primary/30 dark:bg-primary/40 text-foreground font-bold text-2xl md:text-3xl px-2 rounded-sm">democratised</mark>{" "}
            <span className="text-foreground">- enterprise-grade capability, accessible, affordable, and built for businesses that actually need it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
