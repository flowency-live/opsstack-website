import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpStack vs Monday.com | Monday & Asana Alternative for SMEs',
  description: 'Looking for a Monday.com or Asana alternative? OpStack builds custom operating systems for businesses that need more than task tracking.',
  keywords: ['Monday.com alternative', 'Asana alternative', 'project management alternative', 'SME operations', 'business operating system'],
}

const comparisons = [
  {
    feature: 'What it tracks',
    monday: 'Tasks and projects',
    opstack: 'Your entire operation',
  },
  {
    feature: 'Business context',
    monday: 'Generic boards you configure',
    opstack: 'Built around your specific work',
  },
  {
    feature: 'Financial visibility',
    monday: 'Add-ons and integrations',
    opstack: 'Margins, costs, revenue built in',
  },
  {
    feature: 'Client relationships',
    monday: 'Basic CRM features',
    opstack: 'Full client context and history',
  },
  {
    feature: 'Pricing',
    monday: 'Per-seat, feature-tiered',
    opstack: 'Fixed partnership fee',
  },
  {
    feature: 'Customisation depth',
    monday: 'Column types and automations',
    opstack: 'Complete system design',
  },
]

export default function VsMondayPage() {
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
              Monday.com & Asana Alternative
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              You don&apos;t need{' '}
              <span className="text-muted-foreground line-through">Monday</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Project management tools are great at tracking tasks.
              But your business isn&apos;t a series of tasks - it&apos;s relationships, jobs, margins, and operational flow.
              A colourful Kanban board won&apos;t show you what&apos;s actually making money.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The project management <span className="text-primary">illusion</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Monday.com, Asana, ClickUp, Notion - they&apos;re all variations on the same theme:
                generic task boards you bend into shape.
              </p>
              <p>
                For operations-focused businesses, this typically means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Endless configuration</strong> - you&apos;re always building the tool, not using it</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>No financial context</strong> - tasks done ≠ money made</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Fragmented client data</strong> - CRM is bolted on, not built in</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Per-seat pricing</strong> that scales against you</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Beautiful dashboards</strong> that don&apos;t answer the questions that matter</span>
                </li>
              </ul>
              <p>
                Project management tools are great for projects. Your business is more than a project.
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
                Monday vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Task tracker vs operating system
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
                      <span><span className="md:hidden font-medium text-destructive/70">Monday: </span>{row.monday}</span>
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
                  title: 'Operational visibility',
                  description: 'See your whole operation - not just tasks, but clients, jobs, margins, and capacity.',
                },
                {
                  title: 'Financial context everywhere',
                  description: 'Every job, every client, every workflow connected to the numbers that matter.',
                },
                {
                  title: 'No configuration required',
                  description: 'We design it around your operation. You just use it.',
                },
                {
                  title: 'Grows with you',
                  description: 'Fixed pricing. Add team members without adding cost.',
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
