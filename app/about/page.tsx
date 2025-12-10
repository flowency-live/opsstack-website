'use client'

import { ArrowRight, CheckCircle2, Target, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="hero-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Built for <span className="gradient-text">SMEs who deserve better</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              30 years of building systems. One mission: Give SMEs the digital capability bigger firms take for granted.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Why this exists
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                The way SMEs build digital capability is broken. And I got tired of watching it happen.
              </p>

              <p>
                Thirty years building systems across aviation, finance, healthcare and digital operations taught me one thing:
              </p>

              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  Most transformation failures are not technical. They are human.
                </p>
              </div>

              <p>
                Businesses debate decks for six months instead of fixing the problem. Consultancies sell frameworks that gather dust. Agencies deliver beautiful websites that do nothing to help people do their jobs. Development teams over-engineer systems nobody asked for.
              </p>

              <p>
                Meanwhile, SMEs run multi-million pound operations on <strong>spreadsheets, inboxes and heroic memory.</strong>
              </p>

              <p className="text-foreground/60">
                Not because they lack ambition. Because they lack access.
              </p>

              <p>
                No CTO. No delivery team. No one who can diagnose the real problem and deliver a fix.
              </p>

              <p className="font-semibold text-xl">
                That gap is why this company exists.
              </p>

              <p>
                SMEs deserve better. They move fast. They make decisions. They do not hide behind committees. They just need someone who can match that pace and build what they actually need.
              </p>

              <p>
                My approach is simple. Get in the room, understand the real problem, and build a working solution before anyone has time to write a specification document.
              </p>

              <p>
                Working prototypes on day one. MVPs in a week. Systems tailored to your operation. No jargon. No theatre. No wasted effort.
              </p>

              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  If you can describe the problem, we can build the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-20 md:py-32 bg-primary/5 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Who we are
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                We are senior product, technology and operations leaders who have spent decades building and scaling real systems across complex industries.
              </p>

              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  We act as your internal CTO and delivery team.
                </p>
              </div>

              <p>
                We design and build the systems your business should already have. Fast. Tailored. Practical. Focused on real outcomes.
              </p>

              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  Clarity plus speed plus capability.
                </p>
              </div>

              <p className="font-semibold">Our expertise covers:</p>

              <div className="grid md:grid-cols-2 gap-3 pt-4">
                {[
                  'Product strategy and rapid build',
                  'Cloud architecture and modern engineering',
                  'AI-assisted development and automation',
                  'Operations and workflow optimisation',
                  'Data modelling and intelligent dashboards',
                  'Change, adoption and continuous improvement',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <p className="font-semibold">
                We amplify what already works inside your business and remove what slows you down. No frameworks. No boilerplate. No gold-plating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
              How we work
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Clarity before complexity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We cut through noise. We find what is really blocking you. Fast.
                </p>
              </div>

              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Build the smallest thing that creates real value</h3>
                <p className="text-foreground/70 leading-relaxed">
                  No bloat. No scope creep. Just the tool that moves the needle.
                </p>
              </div>

              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Show working prototypes on day one</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We do not talk for weeks. We build. You see your system with your own data before spending anything meaningful.
                </p>
              </div>

              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Use AI safely and predictably</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We use AI to move fast and keep costs down. But every system is shaped by experienced humans who understand your business - not just the technology.
                </p>
              </div>

              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Leave clients with capability that lasts</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every engagement leaves you with permanent improvement. Real tools. Real assets. Not documentation. Not theory.
                </p>
              </div>

              <div className="glass-card p-8 card-hover space-y-4">
                <h3 className="text-xl font-bold">Make transformation accessible, not intimidating</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our superpower isn&apos;t AI. It&apos;s making digital transformation accessible to businesses like yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="relative py-20 md:py-32 bg-primary/5 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
              What we believe
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-foreground/70 leading-relaxed text-center">
              <p>
                SMEs do not lack ambition. They lack access.
              </p>

              <p>
                They have no CTO, no delivery team, no one who can translate their business into the systems they actually need.
              </p>

              <p className="font-semibold">
                That&apos;s the gap we fill.
              </p>

              <div className="py-4">
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  AI + Humans = Practical transformation.
                </p>
              </div>

              <p>
                We give SMEs their own operating system so they can run their business with clarity, confidence and ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              <span className="gradient-text">If your business is held together by good people compensating for bad systems, we fix that.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p className="font-semibold text-2xl">
                It is time SMEs had their own operating system.
              </p>

              <p className="font-semibold text-2xl">
                That is what we build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/contact">
                <Button size="lg" variant="hero" className="group">
                  Book a Working Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
