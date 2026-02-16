import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpStack vs SharePoint | SharePoint Alternative for SMEs',
  description: 'Looking for a SharePoint alternative? OpStack builds custom operating systems for businesses that need workflows, not folder structures.',
  keywords: ['SharePoint alternative', 'SharePoint for small business', 'Microsoft 365 alternative', 'SME operations', 'document management alternative'],
}

const comparisons = [
  {
    feature: 'Primary function',
    sharepoint: 'Document storage with collaboration',
    opstack: 'Your business operations, unified',
  },
  {
    feature: 'User experience',
    sharepoint: 'Complex, requires training',
    opstack: 'Intuitive from day one',
  },
  {
    feature: 'Workflows',
    sharepoint: 'Power Automate (separate tool)',
    opstack: 'Built into your system',
  },
  {
    feature: 'Search',
    sharepoint: 'Finding documents is an art form',
    opstack: 'Everything in context',
  },
  {
    feature: 'Licensing',
    sharepoint: 'Part of Microsoft 365 bundle',
    opstack: 'Fixed partnership fee',
  },
  {
    feature: 'Purpose',
    sharepoint: 'Generic enterprise platform',
    opstack: 'Your specific operation',
  },
]

export default function VsSharepointPage() {
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
              SharePoint Alternative for SMEs
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              You don&apos;t need{' '}
              <span className="text-muted-foreground line-through">SharePoint</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              SharePoint is where documents go to hide.
              It&apos;s a file system dressed up as collaboration.
              Your business needs workflows, not folder structures - and definitely not another Microsoft login.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The SharePoint <span className="text-primary">reality</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                SharePoint promises collaboration and document management.
                What it delivers is complexity and frustration.
              </p>
              <p>
                For most SMEs, SharePoint typically means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Documents nobody can find</strong> - nested folders, inconsistent naming, search that doesn&apos;t work</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Versioning chaos</strong> - which &quot;Final_v3_ACTUAL.docx&quot; is the real one?</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Permissions nightmare</strong> - who has access to what? Nobody knows</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Workflows in another tool</strong> - Power Automate is separate (and complex)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Microsoft 365 bundle</strong> - paying for Teams, OneDrive, SharePoint, and still need more tools</span>
                </li>
              </ul>
              <p>
                SharePoint is storage dressed as a solution. It doesn&apos;t run your business - it just holds files.
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
                SharePoint vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                File storage vs operating system
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
                      <span><span className="md:hidden font-medium text-destructive/70">SharePoint: </span>{row.sharepoint}</span>
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
                  title: 'Information in context',
                  description: 'Documents attached to jobs, clients, projects - not lost in folder hierarchies.',
                },
                {
                  title: 'Workflows built in',
                  description: 'Automation is part of your system, not a separate tool you need to learn.',
                },
                {
                  title: 'One login, one system',
                  description: 'Not another tool in the Microsoft stack. Your business, unified.',
                },
                {
                  title: 'Designed for your team',
                  description: 'Intuitive interface your team can use immediately. No training courses required.',
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
