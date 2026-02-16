import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpStack vs Salesforce | Salesforce Alternative for SMEs',
  description: 'Looking for a Salesforce alternative? OpStack builds custom operating systems for SMEs - without the enterprise complexity, consultant fees, or six-figure budgets.',
  keywords: ['Salesforce alternative', 'Salesforce for small business', 'CRM alternative', 'SME CRM', 'custom CRM'],
}

const comparisons = [
  {
    feature: 'Built for your business',
    salesforce: 'Generic platform you configure',
    opstack: 'Custom-built around your workflows',
  },
  {
    feature: 'Time to value',
    salesforce: '6-12 months implementation',
    opstack: 'Working prototype in days',
  },
  {
    feature: 'Ongoing costs',
    salesforce: 'Per-seat licensing + consultants',
    opstack: 'Fixed partnership fee, no seat limits',
  },
  {
    feature: 'Customisation',
    salesforce: 'Requires certified developers',
    opstack: 'We handle everything',
  },
  {
    feature: 'Support',
    salesforce: 'Ticket system, enterprise support tiers',
    opstack: 'Direct access to people who built your system',
  },
  {
    feature: 'Features you use',
    salesforce: '~10% of what you pay for',
    opstack: '100% - nothing else exists',
  },
]

export default function VsSalesforcePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden section-dark-enhanced section-grain pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Salesforce Alternative for SMEs
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              You don&apos;t need{' '}
              <span className="text-muted-foreground line-through">Salesforce</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Salesforce is built for enterprises with dedicated admins, six-figure budgets, and complex multi-division structures.
              You need a system that works for <span className="text-primary font-medium">your</span> business.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The Salesforce <span className="text-primary">problem</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Salesforce is the world&apos;s most powerful CRM. It can do almost anything.
                That&apos;s the problem.
              </p>
              <p>
                For SMEs, Salesforce typically means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>6-12 month implementations</strong> before you see any value</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Consultant dependency</strong> - you can&apos;t change anything without paying someone</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Per-seat licensing</strong> that punishes you for growing</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Feature bloat</strong> - you&apos;ll use 10% of what you pay for</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Endless configuration</strong> instead of a system that just works</span>
                </li>
              </ul>
              <p>
                Salesforce is great for enterprises. You&apos;re not an enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="relative py-20 overflow-hidden section-dark-enhanced section-grain">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Salesforce vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A different approach entirely
              </p>
            </div>

            <div className="space-y-4">
              {comparisons.map((row, i) => (
                <div key={i} className="glass-card p-4 sm:p-6">
                  <div className="grid md:grid-cols-3 gap-3 md:gap-4 md:items-center">
                    <div className="font-semibold text-foreground text-lg md:text-base mb-2 md:mb-0">
                      {row.feature}
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                      <X className="w-4 h-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                      <span><span className="md:hidden font-medium text-destructive/70">Salesforce: </span>{row.salesforce}</span>
                    </div>
                    <div className="flex items-start gap-2 text-foreground text-sm md:text-base">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><span className="md:hidden font-medium text-primary">OpStack: </span>{row.opstack}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Get */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What you <span className="text-primary">actually</span> get
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Your workflows, encoded',
                  description: 'Not a generic CRM you configure - a system built around how your business actually operates.',
                },
                {
                  title: 'Live in days, not months',
                  description: 'Working prototype on day one. Full system live within weeks. No six-month implementation projects.',
                },
                {
                  title: 'No seat limits',
                  description: 'Your whole team uses it. Growth doesn\'t mean bigger software bills.',
                },
                {
                  title: 'Direct support',
                  description: 'Talk to the people who built your system. Not a ticket queue.',
                },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 card-hover">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(250 75% 58%) 0%, hsl(250 70% 35%) 50%, hsl(250 60% 20%) 100%)'
          }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Ready for software that fits?
            </h2>
            <p className="text-xl text-white/80">
              Book a discovery call. We&apos;ll show you what a system built for your business actually looks like.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-white/60 text-sm">
              No commitment. No sales pitch. Just clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
