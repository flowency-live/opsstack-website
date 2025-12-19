// Situations grouped by friction point
const situations = [
  {
    heading: "The daily reality",
    items: [
      "Drowning in admin you shouldn't be doing",
      "Running on Excel, memory, and good intentions",
    ]
  },
  {
    heading: "The stuck feeling",
    items: [
      "Too big for spreadsheets, too small for enterprise",
      "Growing fast with no internal tech capability",
    ]
  },
  {
    heading: "What you actually want",
    items: [
      "Visibility into what's really happening",
      "Time back for the work that matters",
    ]
  },
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
          {/* Header with thesis line as opener */}
          <div className="mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              You&apos;ll recognise <span className="text-primary">this</span>
            </h2>

            {/* The thesis - prominent, not buried */}
            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl">
              If your business is held together by <mark className="bg-primary/30 dark:bg-primary/40 text-foreground px-1 rounded-sm">good people compensating for bad systems</mark>, we fix that.
            </p>

            {/* Accent bar */}
            <div
              className="w-full h-1 mt-8 rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
              }}
            />
          </div>

          {/* Situations - 3 column, clean typography, no card borders */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {situations.map((situation, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-4">
                  {situation.heading}
                </h3>
                <ul className="space-y-3">
                  {situation.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-lg text-foreground/90 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Outgrown No-Code Callout - the one featured card */}
          <div className="relative p-8 border-2 border-border dark:border-primary/30 bg-card dark:bg-zinc-800/80">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Outgrown your <mark className="bg-primary/30 dark:bg-primary/40 text-foreground px-1 rounded-sm">no-code tools</mark>?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              You used Replit, Lovable, or Cursor to build something real. Smart move - speed matters. But now you&apos;re stuck: your data lives somewhere you can&apos;t see, token costs are climbing, and every change costs more than the last.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We port your tools to a proper AWS stack <mark className="bg-primary/30 dark:bg-primary/40 text-foreground px-1 rounded-sm">you actually own</mark>. Same functionality. Your data. Your infrastructure. Predictable costs. Full visibility.
            </p>
          </div>
        </div>

        {/* The Future We're Building */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            The Future We&apos;re <span className="text-primary">Building</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            We&apos;re not just building software. We&apos;re building a future where every SME has the operational clarity and digital capability that used to be reserved for enterprises with <a href="https://www.youtube.com/watch?v=XEFZ30Cvdnc" target="_blank" rel="noopener noreferrer" className="text-foreground no-underline hover:text-foreground">six-seven</a> figure IT budgets. A future where your systems work for you - surfacing insights, eliminating busywork, and giving you back time to focus on growth.
          </p>

          <p className="text-lg md:text-xl">
            <span className="text-foreground">This is digital transformation</span>{" "}
            <mark className="bg-primary/30 dark:bg-primary/40 text-primary font-bold text-2xl md:text-3xl px-2 rounded-sm">democratised</mark>{" "}
            <span className="text-foreground">- enterprise-grade capability, accessible, affordable, and built for businesses that actually need it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
