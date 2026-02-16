import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpStack vs Jira & Confluence | Atlassian Alternative for SMEs',
  description: 'Looking for a Jira or Confluence alternative? OpStack builds custom operating systems for businesses that aren\'t software teams.',
  keywords: ['Jira alternative', 'Confluence alternative', 'Atlassian alternative', 'SME operations', 'non-tech business software'],
}

const comparisons = [
  {
    feature: 'Built for',
    jira: 'Software development teams',
    opstack: 'Your specific business',
  },
  {
    feature: 'Workflow model',
    jira: 'Sprints, stories, epics',
    opstack: 'Your workflows, your language',
  },
  {
    feature: 'Learning curve',
    jira: 'Steep - designed for dev teams',
    opstack: 'Intuitive - mirrors how you work',
  },
  {
    feature: 'Documentation',
    jira: 'Separate tool (Confluence)',
    opstack: 'Integrated where needed',
  },
  {
    feature: 'Pricing',
    jira: 'Per-user, per-product',
    opstack: 'Fixed partnership fee',
  },
  {
    feature: 'Complexity',
    jira: 'Enterprise-grade (whether you need it or not)',
    opstack: 'Right-sized for your operation',
  },
]

export default function VsJiraPage() {
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
              Jira & Confluence Alternative
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              You don&apos;t need{' '}
              <span className="text-muted-foreground line-through">Jira</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Atlassian tools are built for software teams shipping code.
              If your operation isn&apos;t sprints and user stories, you&apos;re forcing your business into
              a developer&apos;s workflow - and paying enterprise prices for it.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The Atlassian <span className="text-primary">mismatch</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Jira is the gold standard for software development teams. Confluence is where developers write docs.
                Together, they&apos;re incredibly powerful - for building software.
              </p>
              <p>
                For non-tech businesses, Atlassian typically means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Developer vocabulary</strong> - sprints, stories, epics, backlogs? Your team speaks jobs, clients, and deliveries</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Two tools instead of one</strong> - Jira for work, Confluence for docs, neither really fits</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Enterprise complexity</strong> - built for companies with dedicated project managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Per-user pricing</strong> that adds up fast across both products</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Steep learning curve</strong> - training required before your team can use it properly</span>
                </li>
              </ul>
              <p>
                Jira is great for shipping software. You&apos;re probably not shipping software.
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
                Jira vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Developer tool vs business operating system
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
                      <span><span className="md:hidden font-medium text-destructive/70">Jira: </span>{row.jira}</span>
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
                  title: 'Your language, not theirs',
                  description: 'Jobs, clients, deliveries, milestones - whatever terms your team actually uses.',
                },
                {
                  title: 'One tool, not two',
                  description: 'Work tracking and documentation in one place. No context switching.',
                },
                {
                  title: 'No training required',
                  description: 'Built to mirror how you already work. Your team can use it immediately.',
                },
                {
                  title: 'Right-sized complexity',
                  description: 'Powerful enough for your operation. Not bloated for enterprises you\'ll never become.',
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
