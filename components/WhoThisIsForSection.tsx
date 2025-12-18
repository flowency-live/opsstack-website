const audiences = [
  "SMEs turning over £1m to £20m",
  "Owners drowning in admin they shouldn't be doing",
  "Teams running the business from Excel and memory",
  "Fast-growing companies with no internal tech capability",
  "Stuck between spreadsheets and software you can't afford",
  "Leaders who want visibility, control and simplicity",
];

const WhoThisIsForSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with overlay - spans both sections */}
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
          background: 'radial-gradient(ellipse at 50% 80%, hsl(250 60% 30% / 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Who This Is For */}
        <div className="max-w-5xl mb-24 lg:mb-32">
          {/* Header - Left aligned */}
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Who this is <span className="text-primary">for</span>
            </h2>
          </div>

          {/* Audience List - Simple bullet style */}
          <ul className="space-y-4 mb-12">
            {audiences.map((audience, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-lg text-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {audience}
              </li>
            ))}
          </ul>

          {/* Closing Line */}
          <p className="text-lg">
            <span className="text-muted-foreground">If your business is held together by good people compensating for bad systems,</span>{" "}
            <span className="text-primary font-medium">we fix that.</span>
          </p>
        </div>

        {/* The Future We're Building */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            The Future We&apos;re <span className="text-primary">Building</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We&apos;re not just building software. We&apos;re building a future where every SME has the operational clarity and digital capability that used to be reserved for enterprises with six-figure IT budgets. A future where your systems work for you - surfacing insights, eliminating busywork, and giving you back time to focus on growth.
          </p>

          <p className="text-lg md:text-xl">
            <span className="text-muted-foreground">This is digital transformation</span>{" "}
            <span className="text-primary font-semibold">democratised</span>{" "}
            <span className="text-muted-foreground">- enterprise-grade capability, accessible, affordable, and built for businesses that actually need it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
