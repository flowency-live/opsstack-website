import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import BoldHeadline from "./BoldHeadline";

const steps = [
  "Bring your biggest operational headache",
  "We'll show you what it looks like as a simple, fast, tailored system",
  "You leave with clarity and a working prototype before spending anything",
];

const CTASection = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/backgrounds/particle-wave-2.webp)',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

      {/* Subtle purple tint overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(250 75% 58% / 0.5) 0%, transparent 60%)'
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-4xl">
            {/* Bold Headline */}
            <BoldHeadline
              leadIn="READY TO"
              statement="SEE CLEARLY?"
              description="See what it feels like when the noise disappears and your operation becomes visible."
              light
              className="mb-12"
            />

            {/* Steps List */}
            <ul className="space-y-4 mb-12">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="reveal-child flex items-center gap-4 text-lg text-white/90"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="secondary" size="lg" className="group bg-white text-primary hover:bg-white/90 text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                Book a Working Session
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group border-white/30 text-white/80 hover:bg-white/10 hover:border-white/50 hover:text-white text-base px-8 py-6 h-auto transition-all">
                See What We Build
              </Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default CTASection;
