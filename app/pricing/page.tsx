import { ArrowRight, CheckCircle2, Users, Workflow, Link2, Database, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import BoldHeadline from '@/components/BoldHeadline'

export const metadata = {
  title: 'Pricing - OpStack',
  description: 'Pricing that makes sense. No per-seat licensing, no feature tiers, no surprise invoices.',
}

export default function PricingPage() {
  const complexityFactors = [
    {
      icon: Users,
      factor: 'User roles & portals',
      description: 'How many different views into your system?',
    },
    {
      icon: Workflow,
      factor: 'Workflow complexity',
      description: 'Linear processes or branching logic?',
    },
    {
      icon: Link2,
      factor: 'Integrations',
      description: 'Standalone or connected to other systems?',
    },
    {
      icon: Database,
      factor: 'Data model',
      description: 'Simple records or complex relationships?',
    },
    {
      icon: Bot,
      factor: 'Automation & AI',
      description: 'Manual workflows or intelligent automation?',
    },
  ]

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/backgrounds/speed-lines.png)',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl">
            <p className="font-display text-xl sm:text-2xl font-light italic tracking-wide text-white/70 mb-2">
              PRICING THAT
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-primary">MAKES SENSE</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-4">
              No per-seat licensing. No feature tiers. No surprise invoices.
            </p>
            <p className="text-lg text-white/70 max-w-2xl mb-6">
              Two phases: we build your Stack, then we evolve it together.
            </p>

            {/* Accent bar */}
            <div
              className="w-full h-1 rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                Phase One
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Discovery <span className="text-primary">Free</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Start with clarity. We learn how your business actually works, identify the biggest opportunities, and define exactly what your Stack needs.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-xl font-semibold mb-5">You walk away with:</h3>
                <div className="space-y-4">
                  {[
                    'A working prototype with your actual data',
                    'A clear PRD (Product Requirements Document)',
                    'Complexity grade and fixed build price',
                    'No commitment - walk away if it\'s not right',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-primary/30 bg-primary/5">
                <h3 className="text-xl font-semibold mb-4">Why we do this for free</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We prove value before you spend a penny. If we can&apos;t show you something real in a day, we shouldn&apos;t be working together.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The prototype is yours to keep either way.
                </p>
              </div>
            </div>

            <Link href="/contact">
              <Button size="lg" variant="hero" className="group">
                Book a free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="relative py-24 lg:py-32 section-dark-enhanced section-grain">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                Phase Two
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Build <span className="text-primary">Fixed Price</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Your Stack, built to spec. Price agreed after discovery - no surprises, no scope creep.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card mb-8">
              <h3 className="text-xl font-semibold mb-6">Complexity depends on your operation, not arbitrary tiers</h3>
              <p className="text-muted-foreground mb-8">
                After discovery, we grade your build based on what you actually need. Here&apos;s what affects the price:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {complexityFactors.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">{item.factor}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-xl font-semibold mb-5">Every build includes:</h3>
                <div className="space-y-3">
                  {[
                    'Your complete operating system',
                    'All user roles and portals defined in PRD',
                    'Dashboards and operational visibility',
                    'Workflow automation',
                    'Hosting setup and deployment',
                    'Handover and training',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-primary/30 bg-primary/5">
                <h3 className="text-xl font-semibold mb-4">You know the price before you commit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The PRD from discovery defines exactly what we&apos;re building. The price is fixed against that scope.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If requirements change, we discuss it openly - but we don&apos;t surprise you with invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                Ongoing
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Partnership <span className="text-primary">Evolving</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Your Stack evolves with your business. We become your fractional CTO.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-lg font-semibold mb-3">Continuous improvement</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Not one-off projects. Your system grows as your operation grows.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-lg font-semibold mb-3">Strategic guidance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Not just code changes. We help you see what&apos;s possible and what matters.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-lg font-semibold mb-3">No lock-in</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stay because it&apos;s working, not because you&apos;re trapped.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-primary/30 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">This isn&apos;t support. It&apos;s partnership.</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Commercials are agreed as the relationship evolves. We don&apos;t publish fixed retainer prices because every business is different - and we&apos;d rather have an honest conversation than force you into a tier that doesn&apos;t fit.
              </p>
              <p className="text-foreground font-medium">
                What stays constant: you get a CTO-level partner for less than you&apos;d pay a junior developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Section */}
      <section className="relative py-24 lg:py-32 section-dark-enhanced section-grain">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                &ldquo;How much does it <span className="text-primary">cost</span>?&rdquo;
              </h2>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                You won&apos;t pay Salesforce prices for Salesforce complexity you don&apos;t need.
              </p>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our Stacks cost a fraction of enterprise software - because they only do what your business actually requires. No feature bloat. No per-seat licensing that punishes you for growing.
                </p>
                <p>
                  Less than the salary of one junior developer. Less than the combined subscriptions you&apos;re already paying for tools you barely use. Less than the cost of running your operation on spreadsheets and good intentions for another year.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 mt-8">
                <p className="text-lg font-medium text-foreground mb-2">
                  Every business is different, so every Stack is priced differently.
                </p>
                <p className="text-muted-foreground">
                  Discovery is free. You&apos;ll know exactly what the investment looks like before committing to anything.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                What shapes the investment: complexity of workflows, data migration needs, integrations required, and how quickly you need it live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Always <span className="text-primary">included</span>
              </h2>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { title: 'Hosting', description: 'Your Stack runs on solid infrastructure' },
                { title: 'Security', description: 'Your data stays private and protected' },
                { title: 'Backups', description: 'Automatic, regular, recoverable' },
                { title: 'Ownership', description: 'Your system, your data, your IP' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border dark:border-border/40 bg-card text-center">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/backgrounds/bokeh-field-2.png)',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BoldHeadline
              leadIn="READY TO"
              statement="START?"
              light
              className="mb-8 text-center"
            />

            <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-white font-bold text-sm">1</div>
                <span className="text-lg text-white/90">Free discovery with working prototype</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-white font-bold text-sm">2</div>
                <span className="text-lg text-white/90">Fixed-price build to agreed spec</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-white font-bold text-sm">3</div>
                <span className="text-lg text-white/90">Ongoing partnership as you grow</span>
              </div>
            </div>

            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90">
                Book your free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <p className="text-sm text-white/60 mt-6">
              No commitment required. No sales pitch. Just clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
