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
    <section className="relative py-24 lg:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
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
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
