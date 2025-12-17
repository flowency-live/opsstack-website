import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'What We Build - OpStack',
  description: 'Build, Automate, Amplify. The tools, systems and intelligence your business is missing - delivered in days, not months.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden pt-28">
        <div className="absolute inset-0 bg-background" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              What We Build
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
              Build. Automate. Amplify.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              The tools, systems and intelligence your business is missing - delivered in days, not months. Stop paying for ten subscriptions you only half-use.
            </p>

            <p className="text-lg md:text-xl text-primary font-medium">
              We focus on Outcomes, not billable hours. Capability, not consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.02]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Build
              </h2>
              <p className="text-lg text-primary font-medium mb-4">Your tools, apps and systems</p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mb-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
                We design and deliver the software your business actually needs. Not what a vendor wants to sell you. Not a template you have to work around.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Websites. Portals. Apps. Dashboards. Workflow tools. Operational systems. All built around how you work - not how software companies think you should work.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">What we build:</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
                  <div key={i} className="flex items-center gap-4 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg">
              <span className="text-muted-foreground">If your business runs on a spreadsheet today,</span>{" "}
              <span className="text-primary font-medium">this is where that changes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Automate Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.04]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Automate
              </h2>
              <p className="text-lg text-primary font-medium mb-4">Remove manual work forever</p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mb-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
                If your team is copy-pasting between systems, repeating the same steps daily, or chasing information that should just be there - we treat that as a design fault.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                We fix it by connecting your tools, streamlining your process, and adding smart automation where it actually matters.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">What we automate:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Invoicing and billing',
                  'Reporting and dashboards',
                  'Scheduling and reminders',
                  'Workflow triggers and handoffs',
                  'Data processing and validation',
                  'Customer communications',
                  'Compliance and audit trails',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg">
              <span className="text-muted-foreground">Automation isn&apos;t about replacing people.</span>{" "}
              <span className="text-primary font-medium">It&apos;s about freeing them to do useful work.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Amplify Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.02]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Amplify
              </h2>
              <p className="text-lg text-primary font-medium mb-4">Visibility, intelligence and insight</p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mb-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
                Once your operation flows through one place, you finally see it clearly.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
                Margins. Workload. Risk. Opportunity. Bottlenecks. All in plain English - not buried in spreadsheets or someone&apos;s head.
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                We add dashboards, AI-driven summaries and real-time insight that help you make better decisions faster, with less noise.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">What we amplify:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Profit and margin visibility',
                  'Bottleneck and blocker detection',
                  'Workload and capacity distribution',
                  'Operational risk',
                  'Demand and pipeline forecasting',
                  'Customer behaviour and patterns',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg">
              <span className="text-muted-foreground">Your business becomes calmer, more predictable</span>{" "}
              <span className="text-primary font-medium">and easier to run.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Our Delivery Different */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What makes our delivery <span className="text-primary">different</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
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
                  description: "We don't impose frameworks, methodologies or generic best practice. We amplify what already works. We fix what doesn't.",
                },
                {
                  title: 'Confidential and secure',
                  description: 'NDAs signed before we start. Your data stays private. Your IP stays yours. Trust comes first.',
                },
                {
                  title: 'Momentum as a Service',
                  description: "Every time you engage us, something real gets built or fixed. No theatre. No alignment sessions. No drag. Just forward motion.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-7 rounded-2xl border border-border dark:border-border/40 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(250,75%,58%,0.4)]"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg">
              <span className="text-primary font-medium">AI plus humans</span>{" "}
              <span className="text-foreground">equals practical transformation.</span>{" "}
              <span className="text-muted-foreground">We use AI to move fast and keep costs down. But every system is shaped by experienced humans who understand your business - not just the technology.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Purple gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(250 75% 58%) 0%, hsl(250 70% 35%) 50%, hsl(250 60% 20%) 100%)'
          }}
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Ready to build?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl">
                A working session is the fastest way to see what&apos;s possible.
              </p>
            </div>

            <ul className="space-y-4 mb-12">
              {[
                "Bring your biggest operational headache",
                "We'll show you what it looks like as a simple, fast, tailored system",
                "You leave with clarity and a working prototype before spending anything",
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg text-white"
                >
                  <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="group bg-white text-primary hover:bg-white/90">
                  Book a Working Session
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
