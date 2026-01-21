import { ArrowRight, CheckCircle2, Clock, Shield, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing - OpStack',
  description: 'Fast, transparent, SME-friendly pricing. You only pay for value.',
}

export default function PricingPage() {
  const mvpTiers = [
    {
      name: 'Simple MVP',
      price: '£2,500',
      description: 'Single workflow or micro-product',
    },
    {
      name: 'Standard MVP',
      price: '£5,000',
      description: 'Multi-workflow, dashboards, user accounts',
      featured: true,
    },
    {
      name: 'Advanced MVP',
      price: '£9,000',
      description: 'Complex logic, multi-system integration, AI agents',
    },
  ]

  const creditPacks = [
    {
      credits: '50 Credits',
      price: '£450',
      description: 'Light improvements',
    },
    {
      credits: '150 Credits',
      price: '£1,200',
      description: 'Best for SMEs building momentum',
      featured: true,
    },
    {
      credits: '400 Credits',
      price: '£2,800',
      description: 'Continuous product evolution',
    },
  ]

  const hostingTiers = [
    { name: 'Basic', price: '£49/month', description: 'Single seat, low traffic' },
    { name: 'Pro', price: '£99/month', description: 'Multi-seat, dashboards, AI features' },
    { name: 'Scale', price: '£199/month', description: 'APIs, integrations, higher volume' },
  ]

  const supportTiers = [
    { name: 'Email Support', price: '£75/month', icon: Mail },
    { name: 'Priority Support', price: '£250/month', icon: Phone },
    { name: 'Managed Service', price: '£600/month', icon: Shield },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 pt-32 lg:pt-40 section-dark">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fast, transparent,<br />
              <span className="text-primary">SME-friendly</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              You only pay for value. Not for endless planning, meetings, or time-wasting.
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

      {/* Free Discovery */}
      <section className="relative py-24 lg:py-32 section-light">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Free <span className="text-primary">Discovery</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We spend a day with you - online or in person - to understand your business and find the biggest opportunities.
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
                <div className="text-4xl font-bold text-primary mb-4">FREE</div>
                <h3 className="text-xl font-semibold mb-4">At the end of discovery, you get:</h3>
                <div className="space-y-3">
                  {[
                    'A working prototype or proof-of-concept',
                    'An outline of the value unlocked',
                    'Clear, measurable ROI',
                    'Options to continue - no pressure',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-primary/30 bg-primary/5">
                <h3 className="text-xl font-semibold mb-4">This is our moat</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No one else gives you working software upfront. We prove value before you spend a penny.
                </p>
              </div>
            </div>

            <Link href="/contact">
              <Button size="lg" variant="hero" className="group">
                Book your free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MVP Build */}
      <section className="relative py-24 lg:py-32 section-dark">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                MVP Build <span className="text-primary">Fixed Price</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                After discovery, we agree the scope together and deliver a working Minimum Viable Product within a week.
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
              {mvpTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(250,75%,58%,0.4)] ${
                    tier.featured
                      ? 'border-primary/50'
                      : 'border-border dark:border-border/40'
                  }`}
                >
                  {tier.featured && (
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                      Most Popular
                    </div>
                  )}
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>
              ))}
            </div>

            <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
              <h3 className="text-xl font-semibold mb-5">All MVPs include:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Custom mini-ERP modules',
                  'Dashboards and insights',
                  'Internal automations',
                  'Custom workflows',
                  'AI-powered features',
                  'Hosting setup',
                  'Deployment and handover',
                  'One round of refinement',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium mt-6">
                All fixed. <span className="text-primary">No hidden extras.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="relative py-24 lg:py-32 section-light">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Credits <span className="text-primary">Pay As You Grow</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                After the MVP goes live, evolve it as your business grows. Predictable, flexible, and no retainers.
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
              {creditPacks.map((pack, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(250,75%,58%,0.4)] ${
                    pack.featured
                      ? 'border-primary/50'
                      : 'border-border dark:border-border/40'
                  }`}
                >
                  {pack.featured && (
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                      Best Value
                    </div>
                  )}
                  <div className="text-2xl font-bold mb-1">{pack.credits}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{pack.price}</div>
                  <p className="text-muted-foreground text-sm">{pack.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-xl font-semibold mb-5">What Credits Buy</h3>
                <div className="space-y-2">
                  {[
                    'New features or pages',
                    'Automations',
                    'Dashboard enhancements',
                    'Extra integrations',
                    'AI agent upgrades',
                    'Performance improvements',
                    'UI/UX tweaks',
                    'Staff training',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <h3 className="text-xl font-semibold mb-5">Why Credits Work</h3>
                <div className="space-y-2 mb-6">
                  {[
                    'No retainers',
                    'No long contracts',
                    'No unused hours',
                    'No surprise invoices',
                    'You stay in control',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm">
                    <strong>1 Credit = 10 minutes</strong> of senior delivery time
                    <br />
                    <span className="text-muted-foreground">(Output amplified by AI tooling)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="relative py-24 lg:py-32 section-dark">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Hosting & <span className="text-primary">Support</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Optional extras if you want us to run and support your platform.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Hosting */}
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Hosting & Maintenance</h3>
                </div>
                <div className="space-y-3">
                  {hostingTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div>
                        <div className="font-semibold">{tier.name}</div>
                        <div className="text-sm text-muted-foreground">{tier.description}</div>
                      </div>
                      <div className="font-bold text-primary">{tier.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="p-7 rounded-2xl border border-border dark:border-border/40 bg-card">
                <div className="flex items-center gap-3 mb-5">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Support</h3>
                </div>
                <div className="space-y-3">
                  {supportTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-3">
                        <tier.icon className="w-5 h-5 text-primary" />
                        <div className="font-semibold">{tier.name}</div>
                      </div>
                      <div className="font-bold text-primary">{tier.price}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Managed Service:</strong> Your problems become our problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="relative py-24 lg:py-32">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(262 83% 58% / 0.15) 0%, transparent 70%)'
          }}
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              The <span className="text-primary">summary</span>
            </h2>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg"><strong>Free discovery</strong> with working prototype</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg"><strong>Fixed-price MVP</strong> delivered in under a week</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg"><strong>Credit packs</strong> to evolve at your pace</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg"><strong>Optional hosting & support</strong> if needed</span>
              </div>
            </div>

            <p className="text-lg mb-8">
              <span className="text-muted-foreground">You get value fast.</span>{" "}
              <span className="text-primary font-medium">You pay only for what moves your business forward.</span>
            </p>

            <Link href="/contact">
              <Button size="lg" variant="hero" className="group">
                Start with a free discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
