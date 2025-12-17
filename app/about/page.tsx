import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About - OpStack',
  description: 'Built for SMEs who deserve better. 30 years of building systems. One mission: Give SMEs the digital capability bigger firms take for granted.',
}

const expertise = [
  'Product strategy and rapid build',
  'Cloud architecture and modern engineering',
  'AI-assisted development and automation',
  'Operations and workflow optimisation',
  'Data modelling and intelligent dashboards',
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
  {
    title: 'Make transformation accessible',
    description: "Our superpower isn't AI. It's making digital transformation accessible to businesses like yours.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden pt-28">
        <div className="absolute inset-0 bg-background" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              Built for SMEs who <span className="text-primary">deserve better</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              30 years of building systems. One mission: Give SMEs the digital capability bigger firms take for granted.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.02]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Why this <span className="text-primary">exists</span>
              </h2>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 mb-8 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(262 83% 68%) 30%, transparent 100%)'
                }}
              />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p className="text-foreground font-medium text-xl">
                The way SMEs build digital capability is broken.
              </p>

              <p>
                Consultancies sell frameworks that gather dust. Agencies deliver websites that don&apos;t help anyone do their job. Development teams over-engineer systems nobody asked for. Meanwhile, SMEs run multi-million pound operations on spreadsheets, inboxes and heroic memory.
              </p>

              <p>
                Not because they lack ambition. Because they lack access. No CTO. No delivery team. No one to diagnose the real problem and build a fix.
              </p>

              <p className="text-foreground font-medium">
                That gap is why OpStack exists.
              </p>

              <p className="text-lg">
                <span className="text-primary font-medium">If you can describe the problem, we can build the system.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.04]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <Image
                  src="/jason-jones.jpg"
                  alt="Jason Jones - Founder"
                  width={200}
                  height={200}
                  className="rounded-2xl border border-border/40"
                />
              </div>

              {/* Story */}
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I&apos;ve spent 30 years building software, helping other teams build software, fixing operations and delivering real value. I&apos;ve watched countless large organisations throw millions at &ldquo;Digital Transformation&rdquo; - polished slide decks that only work in the boardroom, frameworks that only ever worked in one context at a certain time, four-figure day rates paid to people with certificates not experience, agencies delivering bells and whistles on beautiful products that don&apos;t address the fundamental issues.
                </p>

                <p>
                  Meanwhile, SMEs turn over the amount big orgs waste on transformation - and do it on spreadsheets, inboxes and heroics.
                </p>

                <p>
                  I&apos;m constantly amazed when I talk to SME friends and colleagues about how operations run on shared spreadsheets, WhatsApp messages, bloating sharepoint sites where you can&apos;t find what you need, great memory. Not because they lack ambition for digital tooling. Because they lack access.
                </p>

                <p>
                  No CTO. No delivery team. No one who can diagnose the real problem and actually deliver a fix. No partner who tells them the truth. No access to the kind of capability that bigger firms take for granted. Google results showing enterprise solutions at enterprise prices - not affordable, not practical.
                </p>

                <p className="text-foreground font-medium">
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
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.02]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Who we <span className="text-primary">are</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              <p>
                Senior product, technology and operations leaders who&apos;ve spent decades building real systems across complex industries.
              </p>

              <p className="text-foreground font-medium text-xl">
                We act as your internal CTO and delivery team.
              </p>

              <p>
                Fast. Tailored. Practical. Focused on real outcomes.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-3">
              {expertise.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-border/40 bg-card text-foreground hover:border-primary/60 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />

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
                  className="group p-7 rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(262,83%,58%,0.4)]"
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

      {/* What We Believe */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-white/[0.02]" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What we <span className="text-primary">believe</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p className="text-foreground font-medium text-xl">
                SMEs don&apos;t lack ambition. They lack access.
              </p>

              <p>
                No CTO. No delivery team. No one to translate their business into the systems they actually need.
              </p>

              <p className="text-foreground font-medium">
                That&apos;s the gap we fill.
              </p>

              <p className="text-lg pt-4">
                <span className="text-primary font-medium">AI + Humans</span>{" "}
                <span className="text-foreground">= Practical transformation.</span>
              </p>
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
            background: 'radial-gradient(ellipse at 50% 0%, hsl(262 83% 58%) 0%, hsl(262 70% 35%) 50%, hsl(262 60% 20%) 100%)'
          }}
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                If your business is held together by good people compensating for bad systems, we fix that.
              </h2>

              <p className="text-xl text-white/80 mb-2">
                It&apos;s time SMEs had their own operating system.
              </p>
              <p className="text-xl text-white font-medium">
                That&apos;s what we build.
              </p>
            </div>

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
