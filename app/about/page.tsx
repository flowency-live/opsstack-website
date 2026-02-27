import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import VisionSection from '@/components/VisionSection'
import BoldHeadline from '@/components/BoldHeadline'

export const metadata = {
  title: 'About - OpStack',
  description: 'Built for SMEs who deserve better. 30 years of building systems. One mission: Give SMEs the digital capability bigger firms take for granted.',
}

const industries = [
  'Financial Services & FinTech',
  'Insurance',
  'Healthcare',
  'Aviation',
  'Automotive',
  'Construction',
  'Manufacturing',
  'Energy & Utilities',
  'Media & Broadcasting',
  'Public Sector',
  'Charity Sector',
]

const howWeWork = [
  {
    title: 'Clarity before complexity',
    description: 'We cut through noise. We find what is really blocking you. Fast.',
  },
  {
    title: 'Build the smallest thing that creates real value',
    description: 'No bloat. No scope creep. Just the tool that moves the needle.',
  },
  {
    title: 'Show working prototypes on day one',
    description: 'We do not talk for weeks. We build. You see your system with your own data before spending anything meaningful.',
  },
  {
    title: 'Use AI safely and predictably',
    description: 'We use AI to move fast and keep costs down. But every system is shaped by experienced humans who understand your business - not just the technology.',
  },
  {
    title: 'Leave clients with capability that lasts',
    description: 'Every engagement leaves you with permanent improvement. Real tools. Real assets. Not documentation. Not theory.',
  },
]

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Why This Exists - Founder Story */}
      <section className="relative py-24 lg:py-32 pt-32 md:pt-40 section-dark-enhanced section-grain">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            {/* Header - Bold typography */}
            <div className="mb-12">
              <p className="font-display text-xl sm:text-2xl font-light italic tracking-wide text-muted-foreground mb-2">
                WHY THIS EXISTS
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                FOUNDER STORY
              </h1>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Two column layout - text left, photo right on desktop */}
            <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
              {/* Main Story */}
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed order-2 lg:order-1">
                <p>
                  I&apos;ve spent 30 years building software, helping other teams build software, fixing operations and delivering real value. I&apos;ve watched countless large organisations throw millions at &ldquo;Digital Transformation&rdquo; - polished slide decks that only work in the boardroom, frameworks that only ever worked in one context at a certain time, four-figure day rates paid to people with certificates not experience, agencies delivering bells and whistles on beautiful products that don&apos;t address the fundamental issues.
                </p>

                <p>
                  Meanwhile, SMEs turn over the same amount big orgs waste on transformation - and do it on spreadsheets, inboxes and heroics.
                </p>

                <p>
                  I&apos;m constantly amazed when I talk to SME friends and colleagues about how operations run on shared spreadsheets, WhatsApp messages, bloated sharepoint sites where you can&apos;t find what you need, great memory. Not because they lack ambition for digital tooling. Because they lack access.
                </p>

                <p>
                  No CTO. No delivery team. No one who can diagnose the real problem and actually deliver a fix. No partner who tells them the truth. No access to the kind of capability that bigger firms take for granted. Google results showing enterprise solutions at enterprise prices - not affordable, not practical.
                </p>

                <p className="text-foreground font-medium text-xl">
                  That gap is why this company exists.
                </p>

                <p className="text-foreground font-medium">
                  No bullshit. No disappointment. No fees for something you&apos;ll never use.
                </p>

                <p className="text-lg">
                  <span className="text-primary font-medium">If you can describe your business, we can build something that improves your operational efficiency and your bottom line.</span>
                </p>

                <p className="text-foreground font-medium pt-4">
                  OpStack Founder - Jason Jones
                </p>
              </div>

              {/* Photo - larger, on right */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                <Image
                  src="/jason-jones.jpg"
                  alt="Jason Jones - OpStack Founder"
                  width={340}
                  height={425}
                  className="rounded-2xl border border-border dark:border-border/40 w-full max-w-[300px] mx-auto lg:max-w-none lg:w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-24 lg:py-32 section-light-enhanced">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Who we <span className="text-primary">are</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              <p>
                An experienced and battle-scarred collective, working with some of today&apos;s brightest young minds. Combined 100 years building real systems and operational improvements across:
              </p>

              {/* Industry tags */}
              <div className="flex flex-wrap gap-3">
                {industries.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-border dark:border-border/40 bg-card text-foreground hover:border-primary/60 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p>
                And dozens of SMEs you&apos;ve never heard of - where we&apos;ve done our best work.
              </p>

              <p className="text-foreground font-medium text-xl">
                We act as your internal CTO and delivery team.
              </p>

              <p>
                Fast. Tailored. Practical. Focused on real outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-24 lg:py-32 section-dark-enhanced section-grain">

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                How we <span className="text-primary">work</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {howWeWork.map((item, i) => (
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
          </div>
        </div>
      </section>

      <VisionSection />

      {/* Who This Is For */}
      <section className="relative py-24 lg:py-32 overflow-hidden section-light-enhanced">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            {/* Header with thesis line as opener */}
            <div className="mb-16">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
                Is this you?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Who this is <span className="text-primary">for</span>
              </h2>

              {/* The thesis - prominent, not buried */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl">
                If your business is held together by <mark className="mark-amber font-medium">good people compensating for bad systems</mark>, we fix that.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-8 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Situations - 3 column, clean typography */}
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  The daily reality
                </h3>
                <ul className="space-y-3">
                  <li className="text-lg text-foreground leading-relaxed">
                    Drowning in admin you shouldn&apos;t be doing
                  </li>
                  <li className="text-lg text-foreground leading-relaxed">
                    Running on Excel, memory, and good intentions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  The stuck feeling
                </h3>
                <ul className="space-y-3">
                  <li className="text-lg text-foreground leading-relaxed">
                    Too big for spreadsheets, too small for enterprise
                  </li>
                  <li className="text-lg text-foreground leading-relaxed">
                    Growing fast with no internal tech capability
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  What you actually want
                </h3>
                <ul className="space-y-3">
                  <li className="text-lg text-foreground leading-relaxed">
                    Visibility into what&apos;s really happening
                  </li>
                  <li className="text-lg text-foreground leading-relaxed">
                    Time back for the work that matters
                  </li>
                </ul>
              </div>
            </div>

            {/* Outgrown Vibe-Coded Tools Callout */}
            <div className="card-elevated p-8">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Outgrown your <mark className="mark-amber font-medium">vibe-coded tools</mark>?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                There&apos;s a difference between building something that demos well and something that survives real users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We specialise in taking products off hype-driven platforms and into AWS environments built for ownership, auditability, and cost control.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Same functionality. Your data. Your infrastructure. Predictable costs. Full visibility.
              </p>
              <p className="text-lg text-primary font-semibold">
                Built to last, not to trend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/backgrounds/fiber-ribbons.png)',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <BoldHeadline
              leadIn="WE FIX"
              statement="BAD SYSTEMS"
              description="If your business is held together by good people compensating for bad systems, we fix that. It's time SMEs had their own operating system. That's what we build."
              light
              className="mb-12"
            />

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
