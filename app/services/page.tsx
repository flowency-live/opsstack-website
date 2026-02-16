import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const stacks = [
  {
    id: 'relay',
    name: 'Relay',
    tagline: 'Your Transfer Business. Affordable Intelligence.',
    description: 'Professional transfer management software built for VIP transfer and chauffeur operators. Booking management, fixed route pricing, surge pricing engine, corporate accounts portal, and real-time dashboards. Get live in a day, not months.',
    badge: '/stacks/stack_relay.png',
    color: 'hsl(262 83% 58%)',
    inProduction: '3 live clients providing private transfers and chauffeur services across the UK',
    alsoFits: ['Airport transfers', 'Executive car services', 'Medical transport', 'Event logistics', 'Corporate shuttles'],
    href: 'https://relay.opstack.uk',
  },
  {
    id: 'track',
    name: 'Track',
    tagline: 'Asset, Fleet & Operational Control.',
    description: 'Real-time visibility, compliance tracking, and operational control for high-value mobile assets. Currently tracking race assets across the globe for a professional motorsport team. Handover and handback workflows, maintenance scheduling, uptime dashboards, and utilisation tracking.',
    badge: '/stacks/stack_track.png',
    color: '#6080A9',
    inProduction: 'Live with a professional motorsport team tracking assets across 24 countries',
    alsoFits: ['Equipment rental', 'Plant hire', 'Vehicle fleets', 'Medical equipment', 'Construction machinery'],
    href: 'https://track.opstack.uk',
  },
  {
    id: 'level',
    name: 'Level',
    tagline: 'Intelligent School Management. Built for SEND.',
    description: 'AI-powered school management designed specifically for special education. UK National Curriculum integration for KS3 and KS4, intelligent assessments with instant feedback, progress tracking, smart timetabling, multi-portal access for students, teachers, and headteachers, plus ASDAN qualification support.',
    badge: '/stacks/stack_level.png',
    color: 'hsl(172 55% 41%)',
    inProduction: 'In development with a specialist SEND school',
    alsoFits: ['Alternative provision', 'Pupil referral units', 'Specialist colleges', 'Training providers', 'Independent special schools'],
    href: 'https://level.opstack.uk',
  },
  {
    id: 'niner',
    name: 'Niner',
    tagline: 'From First Contact to Completed Work. Tracked.',
    description: 'A lightweight operating system for service businesses. Manage contacts, track work, log activity, and see what matters on live dashboards. No bloat, just the essentials service businesses actually need.',
    badge: '/stacks/stack_niner.png',
    color: 'hsl(230 60% 50%)',
    inProduction: 'In development with a travel logistics operator',
    alsoFits: ['Service businesses', 'Agencies', 'Consultancies', 'Travel logistics', 'Event management'],
    href: 'https://niner.opstack.uk',
  },
]

export const metadata = {
  title: 'What We Build - OpStack',
  description: 'Build, Automate, Amplify. The tools, systems and intelligence your business is missing - delivered in days, not months.',
}

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden pt-28 section-dark-enhanced section-grain">
        <div className="absolute inset-0 bg-background" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              What We Build
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              One login. Your entire business.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Not software you have to bend yourself to fit. Not a patchwork of tools held together with hope. Your business, digitised properly - every screen speaks your language, every feature exists because your operation needs it.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4">
              You open your Stack and it feels calm. No clutter. No confusion. Just your business, clear and workable.
            </p>

            <p className="text-lg md:text-xl text-primary font-medium mb-8">
              Everything you need. Nothing you don&apos;t.
            </p>

            <p className="text-lg text-muted-foreground">
              Build. Automate. Amplify. The three layers of every Operating Stack we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">

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
              <h3 className="text-xl font-semibold mb-6">What your Stack enables:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Track leads and manage client relationships your way',
                  'Schedule work and allocate resources',
                  'See real margins, not guesses',
                  'Manage jobs from start to completion',
                  'Automate invoicing and billing triggers',
                  'Give customers and suppliers their own portals',
                  'Surface bottlenecks and operational risk',
                  'Log activity and maintain audit trails',
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
      <section className="relative py-24 lg:py-32 section-dark-enhanced section-grain">

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
      <section className="relative py-24 lg:py-32 section-light-enhanced">

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

      {/* Comparison Grid Section */}
      <section className="relative py-24 lg:py-32 section-dark-enhanced section-grain">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Off-the-shelf vs <span className="text-primary">OpStack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                The current software market has it backwards. They build for everyone, which means they build for no-one.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  theirs: '"Powerful and flexible!" (translation: complex and generic)',
                  ours: 'Built precisely for your operation',
                },
                {
                  theirs: 'Pay for 100 features, use 7',
                  ours: 'Pay for what you need, use all of it',
                },
                {
                  theirs: 'Learn their system',
                  ours: 'It already speaks your language',
                },
                {
                  theirs: 'Integrate 5 tools to approximate your workflow',
                  ours: 'One tool that IS your workflow',
                },
                {
                  theirs: 'You adapt to the software',
                  ours: 'The software is shaped around you',
                },
                {
                  theirs: 'Generic dashboards that don\'t answer your questions',
                  ours: 'Dashboards built around what YOU need to see',
                },
                {
                  theirs: '"Best practice" workflows designed for someone else',
                  ours: 'Your workflows, encoded and automated',
                },
                {
                  theirs: '6-month implementation with consultants',
                  ours: 'Live in days, not months',
                },
                {
                  theirs: '"We integrate with 500+ tools!"',
                  ours: 'You don\'t need 500 tools. You need one that works.',
                },
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-destructive">✕</span>
                      </span>
                      <span className="text-muted-foreground">{row.theirs}</span>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{row.ours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Delivery Different */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">

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
                  description: "Every time you engage us, something real gets built or fixed. No theatre. No alignment sessions. No drag. Just forward motion. We don't hand over a system and disappear - we stay with you as it grows.",
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

      {/* Our Stacks Section */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                See it in action
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Stacks</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The OpStack philosophy, applied to real businesses. Each Stack is a complete operating world for a specific type of business - already in production, already proving what&apos;s possible.
              </p>
            </div>

            <div className="space-y-32">
              {stacks.map((stack, index) => (
                <div
                  key={stack.id}
                  id={stack.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center scroll-mt-24`}
                >
                  {/* Badge Side */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className="absolute inset-0 blur-3xl opacity-20 scale-150"
                      style={{ background: stack.color }}
                    />
                    <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                      <Image
                        src={stack.badge}
                        alt={`${stack.name} Stack`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 max-w-2xl">
                    {/* Accent bar */}
                    <div
                      className="w-24 h-1 mb-6 rounded-full"
                      style={{ background: stack.color }}
                    />

                    <h3 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                      {stack.name}
                    </h3>
                    <p className="text-lg font-medium mb-4" style={{ color: stack.color }}>
                      {stack.tagline}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {stack.description}
                    </p>

                    {/* In Production */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-foreground">In Production</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4">
                        {stack.inProduction}
                      </p>
                    </div>

                    {/* Also Fits */}
                    <div className="mb-8">
                      <p className="text-sm font-medium text-foreground mb-3">Also fits:</p>
                      <div className="flex flex-wrap gap-2">
                        {stack.alsoFits.map((fit) => (
                          <span
                            key={fit}
                            className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground"
                          >
                            {fit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={stack.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: stack.color }}
                    >
                      Explore {stack.name}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
