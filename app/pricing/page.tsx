import { ArrowRight, CheckCircle2, Sparkles, Rocket, Zap, Shield, Mail, Phone, Clock } from 'lucide-react'
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
      icon: Sparkles,
    },
    {
      name: 'Standard MVP',
      price: '£5,000',
      description: 'Multi-workflow, dashboards, user accounts',
      icon: Rocket,
      featured: true,
    },
    {
      name: 'Advanced MVP',
      price: '£9,000',
      description: 'Complex logic, multi-system integration, AI agents',
      icon: Zap,
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Pricing</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Fast, transparent,
              <br />
              <span className="gradient-text">SME-friendly</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              You only pay for value. Not for endless planning, meetings, or time-wasting.
            </p>
            <div className="glass-card p-6 inline-block">
              <p className="text-lg font-semibold">
                We keep pricing clear, fixed, and fair - so you know exactly what you&apos;re getting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Discovery */}
      <section className="relative py-20 bg-primary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-80 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative space-y-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                      STEP 1
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">Free Discovery + Working Prototype</h2>
                    <p className="text-lg text-foreground/70">
                      We spend a day with you - online or in person - to understand your business, your bottlenecks, and your biggest opportunities.
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-5xl md:text-6xl font-bold gradient-text">FREE</div>
                    <p className="text-sm text-foreground/60 mt-2">No credit card required</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">At the end of discovery, you get:</h3>
                    <div className="space-y-2">
                      {[
                        'A working prototype or proof-of-concept',
                        'An outline of the value unlocked',
                        'Clear, measurable ROI',
                        'Options to continue (no pressure, no sales pitch)',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
                    <p className="text-sm font-medium text-accent-foreground">
                      <strong>This is our moat.</strong>
                      <br />
                      No one else gives you working software upfront.
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
          </div>
        </div>
      </section>

      {/* MVP Build */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                STEP 2
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold">MVP Build (Fixed Price)</h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Once discovery is done, we agree the scope together and deliver a fully working Minimum Viable Product within a week.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mvpTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`glass-card p-8 space-y-6 relative ${
                    tier.featured ? 'border-primary/50 shadow-xl shadow-primary/20' : ''
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-foreground/60 text-sm mt-1">{tier.description}</p>
                    </div>
                    <div className="text-4xl font-bold gradient-text">{tier.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold">All MVPs include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Custom mini-ERP modules',
                  'Dashboards + insights',
                  'Internal automations',
                  'Custom workflows',
                  'AI-powered features',
                  'Hosting setup',
                  'Deployment + handover',
                  'One round of refinement',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold text-center pt-4">
                All fixed. <span className="gradient-text">No hidden extras.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="relative py-20 bg-primary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                STEP 3
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold">Credits (Optional - Pay As You Grow)</h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                After the MVP goes live, you can evolve it as your business grows using Credits - predictable, flexible, and perfect for SMEs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {creditPacks.map((pack, i) => (
                <div
                  key={i}
                  className={`glass-card p-8 space-y-6 text-center relative ${
                    pack.featured ? 'border-primary/50 shadow-xl shadow-primary/20' : ''
                  }`}
                >
                  {pack.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple text-white text-sm font-semibold">
                      Best Value
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">{pack.credits}</div>
                    <div className="text-4xl font-bold gradient-text">{pack.price}</div>
                    <p className="text-foreground/60">{pack.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">What Credits Buy</h3>
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
                      'Monthly optimisation',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Why Credits Work</h3>
                  <div className="space-y-2">
                    {[
                      'No retainers',
                      'No long contracts',
                      'No unused hours',
                      'No surprise invoices',
                      'You stay in control',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-4">
                    <p className="text-sm">
                      <strong>1 Credit ≈ 10 minutes</strong> of senior hands-on delivery
                      <br />
                      <span className="text-foreground/60">(Actual output is heavily amplified by AI tooling)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl md:text-5xl font-bold">Optional Hosting & Support</h2>
              <p className="text-xl text-foreground/60">If you want us to run the platform for you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hosting */}
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Hosting & Maintenance</h3>
                </div>
                <div className="space-y-3">
                  {hostingTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                      <div>
                        <div className="font-semibold">{tier.name}</div>
                        <div className="text-sm text-foreground/60">{tier.description}</div>
                      </div>
                      <div className="font-bold gradient-text">{tier.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Support</h3>
                </div>
                <div className="space-y-3">
                  {supportTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3">
                        <tier.icon className="w-5 h-5 text-primary" />
                        <div className="font-semibold">{tier.name}</div>
                      </div>
                      <div className="font-bold gradient-text">{tier.price}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <p className="text-sm text-foreground/70">
                    <strong>Managed Service:</strong> Your problems become our problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              OpStack is <span className="gradient-text">simple</span>
            </h2>
            <div className="space-y-4 text-xl text-foreground/80">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-semibold">Free discovery</span>
                <span className="text-foreground/50">+</span>
                <span>working prototype</span>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-semibold">Fixed-price MVP</span>
                <span>delivered in under a week</span>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-semibold">Credit packs</span>
                <span>to evolve at your pace</span>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-semibold">Optional hosting & support</span>
                <span>if needed</span>
              </div>
            </div>
            <div className="glass-card p-8 border-primary/40">
              <p className="text-2xl font-bold">
                You get value fast.
                <br />
                <span className="gradient-text">You pay only for what moves your business forward.</span>
              </p>
            </div>
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
