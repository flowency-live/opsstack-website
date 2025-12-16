import { ArrowRight, Building2, Zap, LineChart, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Services - OpStack',
  description: 'Build, Automate, Amplify. Fast, practical digital capability for SMEs.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden pt-20">
        <div className="absolute top-10 right-10 w-[500px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Services
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-foreground/80">
              Fast, practical digital capability for SMEs
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We build the tools, systems and automations your business is missing.
            </p>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Everything tailored. Everything delivered fast. Everything improves your operation from day one.
            </p>

            <div className="pt-6 space-y-4">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                Outcomes, not hours. Capability, not consultancy.
              </p>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                Clarity + Speed + Capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold">Build</h2>
                  <p className="text-xl text-foreground/60">Your tools, apps and systems</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                We design and deliver the software your business actually needs. Not what a vendor wants to sell you. Not a template you have to work around.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Websites. Portals. Apps. Dashboards. Workflow tools. Operational systems. All built around how you work - not how software companies think you should work.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Think of it as the system you always meant to build but never had the time, budget or capability for.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">What we build:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Custom CRM shaped to your sales process',
                  'Project, job and case management tools',
                  'Customer and supplier portals',
                  'Booking and scheduling systems',
                  'Dashboards and reporting tools',
                  'Mobile and web apps',
                  'Workflow automation tools',
                  'Mini ERP modules for your specific operation',
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
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold gradient-text">
                If your business runs on a spreadsheet today, this is where that changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automate Section */}
      <section className="relative py-20 md:py-32 bg-primary/5 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold">Automate</h2>
                  <p className="text-xl text-foreground/60">Remove manual work forever</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                If your team is copy-pasting between systems, repeating the same steps daily, or chasing information that should just be there - we treat that as a design fault.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                We fix it by connecting your tools, streamlining your process, and adding smart automation where it actually matters.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">What we automate:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Invoicing and billing',
                  'Reporting and dashboards',
                  'Scheduling and reminders',
                  'Workflow triggers and handoffs',
                  'Data processing and validation',
                  'Customer communications',
                  'Compliance and audit trails',
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
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold gradient-text">
                Automation isn&apos;t about replacing people. It&apos;s about freeing them to do useful work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amplify Section */}
      <section className="relative py-20 md:py-32 border-t border-primary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold">Amplify</h2>
                  <p className="text-xl text-foreground/60">Visibility, intelligence and insight</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Once your operation flows through one place, you finally see it clearly.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Margins. Workload. Risk. Opportunity. Bottlenecks. All in plain English - not buried in spreadsheets or someone&apos;s head.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                We add dashboards, AI-driven summaries and real-time insight that help you make better decisions faster, with less noise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">What we amplify:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Profit and margin visibility',
                  'Bottleneck and blocker detection',
                  'Workload and capacity distribution',
                  'Operational risk',
                  'Demand and pipeline forecasting',
                  'Customer behaviour and patterns',
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
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold gradient-text">
                Your business becomes calmer, more predictable and easier to run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Delivery Different */}
      <section className="relative py-20 md:py-32 bg-primary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
              What makes our delivery different
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Working prototype on day one',
                  description: "We don't talk for six weeks then show you a proposal. We build. You see your system - with your own data - before spending anything meaningful.",
                },
                {
                  title: 'MVP in a week',
                  description: 'We build functional, reliable tools at a pace that surprises people. Speed with discipline. No gold-plating.',
                },
                {
                  title: 'Credits, not retainers',
                  description: 'You buy capability when you need it. No monthly drain. No unused hours. No guilt.',
                },
                {
                  title: 'Built around your way of working',
                  description: 'We don\'t impose frameworks, methodologies or generic "best practice." We amplify what already works. We fix what doesn\'t.',
                },
                {
                  title: 'Confidential and secure',
                  description: 'NDAs signed before we start. Your data stays private. Your IP stays yours. Trust comes first.',
                },
                {
                  title: 'Momentum as a Service',
                  description: 'Every time you engage us, something real gets built or fixed. No theatre. No "alignment sessions." No drag. Just forward motion.',
                  highlight: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glass-card p-8 card-hover space-y-4 ${item.highlight ? 'border-primary/50' : ''}`}
                >
                  <h3 className={`text-xl font-bold ${item.highlight ? 'gradient-text' : ''}`}>{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 space-y-4 border-primary/30">
              <p className="text-xl md:text-2xl font-bold gradient-text text-center">
                AI + Humans = Practical transformation.
              </p>
              <p className="text-lg text-foreground/70 text-center">
                We use AI to move fast and keep costs down. But every system is shaped by experienced humans who understand your business - not just the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Ready to build?
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              <p>
                A working session is the fastest way to see what&apos;s possible.
              </p>

              <p>
                Bring your biggest operational headache.
                <br />
                We&apos;ll show you what a simple, fast, tailored system could look like - built around how you actually work.
              </p>

              <div className="pt-4">
                <p className="text-xl md:text-2xl font-bold gradient-text">
                  You leave with clarity and a prototype.
                </p>
              </div>
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
