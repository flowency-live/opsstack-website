import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpStack vs HubSpot | HubSpot Alternative for SMEs',
  description: 'Looking for a HubSpot alternative? OpStack builds custom operating systems for SMEs who need client management without the marketing machine.',
  keywords: ['HubSpot alternative', 'HubSpot for small business', 'CRM alternative', 'SME CRM', 'HubSpot too expensive'],
}

const comparisons = [
  {
    feature: 'Primary purpose',
    hubspot: 'Marketing automation with CRM attached',
    opstack: 'Your business operations, unified',
  },
  {
    feature: 'Pricing model',
    hubspot: 'Starts free, scales to thousands',
    opstack: 'Predictable partnership fee',
  },
  {
    feature: 'Features included',
    hubspot: 'Marketing tools you may never use',
    opstack: 'Only what your operation needs',
  },
  {
    feature: 'Contact limits',
    hubspot: 'Pay more as your list grows',
    opstack: 'No artificial limits',
  },
  {
    feature: 'Customisation',
    hubspot: 'Limited to their workflow model',
    opstack: 'Built around your workflow',
  },
  {
    feature: 'Learning curve',
    hubspot: 'Certification programmes available',
    opstack: 'Intuitive - mirrors how you already work',
  },
]

export default function VsHubspotPage() {
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
              HubSpot Alternative for SMEs
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              You don&apos;t need{' '}
              <span className="text-muted-foreground line-through">HubSpot</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              HubSpot is a marketing machine that happens to have a CRM bolted on.
              If you&apos;re not running content campaigns to thousands of leads,
              you&apos;re paying for an engine you&apos;ll never start.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The HubSpot <span className="text-primary">trap</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                HubSpot&apos;s &quot;free CRM&quot; is brilliant marketing. It gets you in the door.
                Then reality sets in.
              </p>
              <p>
                For service businesses and operations-focused SMEs, HubSpot typically means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Paying for marketing tools</strong> when you need operational tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Contact-based pricing</strong> that punishes your growing client base</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>&quot;Hub&quot; fragmentation</strong> - need sales + service + operations? That&apos;s three subscriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Workflows that don&apos;t fit</strong> - your operation isn&apos;t a marketing funnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Feature walls</strong> - basic reporting requires paid tiers</span>
                </li>
              </ul>
              <p>
                HubSpot is great for inbound marketing teams. That&apos;s probably not what you need.
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
                HubSpot vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Marketing platform vs operating system
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
                      <span><span className="md:hidden font-medium text-destructive/70">HubSpot: </span>{row.hubspot}</span>
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
              What you <span className="text-primary">actually</span> need
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Client relationships, not funnels',
                  description: 'Track the relationships that matter. See history, activity, and context - not lead scores.',
                },
                {
                  title: 'Operations visibility',
                  description: 'Dashboards that show what\'s happening in your business. Jobs, margins, capacity - real numbers.',
                },
                {
                  title: 'One system, not five hubs',
                  description: 'Everything in one place. Clients, work, team, data. No integration puzzles.',
                },
                {
                  title: 'Pricing that doesn\'t scale against you',
                  description: 'Fixed partnership fee. Your growth is celebrated, not penalised.',
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
