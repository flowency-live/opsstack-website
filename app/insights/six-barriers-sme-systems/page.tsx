import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'The Six Barriers That Block Digital Disruption for SMEs - OpStack',
  description: 'Most SMEs know their systems are holding them back. What we see repeatedly isn\'t a lack of ambition. It\'s a set of very real barriers that make progress feel risky, expensive, or unclear.',
}

export default function SixBarriersArticle() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Article Header - Enhanced with brand graphics */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background with gradient mesh */}
        <div className="absolute inset-0 bg-background" />

        {/* Top-left purple glow */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, hsl(250 75% 58% / 0.15) 0%, transparent 60%)'
          }}
        />

        {/* Bottom-right accent glow */}
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, hsl(250 75% 58% / 0.1) 0%, transparent 60%)'
          }}
        />

        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div
            className="absolute top-[15%] -right-10 w-[400px] h-[3px] rotate-[-8deg]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(250 75% 58% / 0.5) 30%, hsl(250 75% 58% / 0.5) 70%, transparent)'
            }}
          />
          <div
            className="absolute top-[45%] -right-5 w-[350px] h-[2px] rotate-[-8deg]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(250 75% 58% / 0.4) 30%, hsl(250 75% 58% / 0.4) 70%, transparent)'
            }}
          />
          <div
            className="absolute top-[75%] -right-8 w-[420px] h-[2px] rotate-[-8deg]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(250 75% 58% / 0.3) 30%, hsl(250 75% 58% / 0.3) 70%, transparent)'
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(250 75% 58% / 0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(250 75% 58% / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span
                className="inline-block text-sm font-semibold text-primary-foreground uppercase tracking-wider px-4 py-1.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))'
                }}
              >
                Insight
              </span>
            </div>

            {/* Title with gradient accent */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Six Barriers That Block Digital Disruption for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(250 75% 65%), hsl(250 75% 55%))'
                }}
              >
                SMEs
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground">
              And why they&apos;re less fixed than they used to be
            </p>

            {/* Decorative bar */}
            <div
              className="mt-10 h-1 w-24 rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(250 75% 58%), hsl(250 75% 68%), transparent)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Article Content - Enhanced with visual elements */}
      <section className="relative pb-24 lg:pb-32">
        {/* Side accent line - desktop only */}
        <div
          className="hidden lg:block absolute left-[calc(50%-480px)] top-0 bottom-0 w-[2px] opacity-20"
          style={{
            background: 'linear-gradient(180deg, hsl(250 75% 58%), hsl(250 75% 58% / 0.3) 50%, transparent)'
          }}
        />

        <div className="container px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto">

            {/* Lead paragraph - larger, more prominent */}
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-8 font-display font-medium">
              Most SMEs know their systems are holding them back.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              They don&apos;t come to that conclusion lightly. They&apos;ve tried tools, agencies, consultants, and off-the-shelf platforms. Some things helped. Many didn&apos;t. Over time, effort turns into caution, and caution turns into inaction.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What we see repeatedly isn&apos;t a lack of ambition. It&apos;s a set of very real barriers that make progress feel risky, expensive, or unclear.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              These aren&apos;t theoretical. They show up once you&apos;re already trying to make things better.
            </p>

            {/* Barrier 1 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    It Feels Too Expensive for What You&apos;ll Actually Get
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When SMEs look at &ldquo;proper&rdquo; systems, they&apos;re quickly pushed toward enterprise tools, long contracts, and six-figure implementation conversations. Even when the numbers might be affordable, the value is uncertain.
            </p>

            {/* Highlighted insight */}
            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                That uncertainty is the real issue.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Historically, it was justified. Custom software was slow and expensive. Changing direction was painful. Getting it wrong could lock a business into years of cost and disruption.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What&apos;s changed is the underlying economics. Modern cloud platforms, AI-assisted development, and better tooling mean useful, tailored systems can now be built faster and more cheaply than most people realise.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              The barrier today isn&apos;t just cost. It&apos;s that many SMEs are still making decisions based on how things used to work.
            </p>

            {/* Barrier 2 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    There&apos;s No One Inside the Business Who Can Join the Dots
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most SMEs don&apos;t have in-house technical leadership. There&apos;s no one whose role is to translate operational problems into technical decisions, or to sanity-check what&apos;s being proposed.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That creates an uneven dynamic. Vendors speak confidently. Buyers aren&apos;t sure which questions matter. Decisions either stall, or move forward with a quiet sense of unease.
            </p>

            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                This isn&apos;t about intelligence or capability. It&apos;s about perspective.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Progress tends to happen when someone can sit between the business and the technology, speak plainly, and focus on outcomes rather than features. Not to produce documentation - but to help make clear, defensible choices.
            </p>

            {/* Barrier 3 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Past Attempts Have Made People Wary
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Almost every SME has a backstory.
            </p>

            {/* Styled list/quote block */}
            <div
              className="relative my-10 py-8 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.06), hsl(250 75% 58% / 0.02))',
                border: '1px solid hsl(250 75% 58% / 0.15)'
              }}
            >
              <div className="space-y-3 text-lg text-foreground/90 italic">
                <p>A system that promised to transform operations and didn&apos;t.</p>
                <p>A website rebuild that changed nothing internally.</p>
                <p>A tool everyone was trained on and quietly worked around.</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Those experiences don&apos;t create resistance to change. They create caution.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The mistake many suppliers make is trying to override that caution with confidence. What works better is reducing risk early - showing something real, working with real data, before asking for commitment.
            </p>

            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                If value can&apos;t be demonstrated quickly and concretely, it usually doesn&apos;t improve with time.
              </p>
            </div>

            {/* Barrier 4 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  4
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Tools Fail When They Don&apos;t Match How Work Actually Happens
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When systems aren&apos;t used, it&apos;s often blamed on people. Training. Mindset. Culture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In practice, most workarounds exist because the system doesn&apos;t fit the job. It adds steps, removes flexibility, or assumes work happens neatly when it doesn&apos;t.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The tools that stick tend to be simple in one important way: they make existing work easier. They&apos;re built by observing how things actually run, not by enforcing an idealised process.
            </p>

            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                If a system helps someone get through their day with less friction, adoption takes care of itself.
              </p>
            </div>

            {/* Barrier 5 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  5
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Everything Feels Too Big to Tackle
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital improvement is often presented as a large, connected programme: CRM, finance, reporting, automation, AI. Every option feels foundational. Every choice feels irreversible.
            </p>

            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                That scale is paralysing.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What we see work far more reliably is starting with one obvious pain point. The spreadsheet everyone distrusts. The process that relies on one person&apos;s memory. The task that always causes delays.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Fixing one thing properly creates momentum. Momentum creates clarity. Grand plans tend to create documents and delay.
            </p>

            {/* Barrier 6 */}
            <div className="relative mt-20 mb-12">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                    boxShadow: '0 8px 24px hsl(250 75% 58% / 0.3)'
                  }}
                >
                  6
                </div>
                <div className="flex-1 pt-2">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    The Real Fear Is Disruption, Not Change
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Many SMEs worry less about changing and more about breaking what already works.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That concern is reasonable. Traditional system implementations were slow, disruptive, and risky. Big-bang rollouts often failed, and recovery was expensive.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The delivery model has shifted. New tools can be introduced alongside existing ones. Improvements can be incremental. If something doesn&apos;t work, it&apos;s discovered early - not eighteen months in.
            </p>

            <div
              className="relative my-10 py-6 px-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.08), hsl(250 75% 58% / 0.04))',
                borderLeft: '4px solid hsl(250 75% 58%)'
              }}
            >
              <p className="text-xl text-foreground leading-relaxed font-medium">
                Smaller, reversible steps reduce risk far more effectively than large, irreversible commitments.
              </p>
            </div>

            {/* Conclusion Section - Enhanced */}
            <div className="relative mt-24 mb-12">
              {/* Decorative element */}
              <div
                className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, hsl(250 75% 58%), hsl(250 75% 68%), transparent)'
                }}
              />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground pl-6">
                What&apos;s Actually Different Now
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These barriers exist because, for a long time, digital tooling simply wasn&apos;t built with SMEs in mind. Enterprise vendors, long consulting engagements, and one-size-fits-all platforms dominated the landscape.
            </p>

            {/* Big statement */}
            <div
              className="relative my-12 py-8 px-10 rounded-3xl text-center"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58% / 0.12), hsl(250 75% 58% / 0.06))',
                border: '1px solid hsl(250 75% 58% / 0.2)'
              }}
            >
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-display font-bold">
                That&apos;s changing.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital capability is more accessible than it&apos;s ever been. Not free. Not effortless. But genuinely attainable in a way it wasn&apos;t even five years ago.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The hardest part is letting go of assumptions formed by past experience.
            </p>

            <p className="text-xl text-foreground leading-relaxed font-medium">
              If you&apos;ve tried before and it didn&apos;t work, the hesitation makes sense. But the tools, economics, and delivery approaches have moved on. For many SMEs, the constraints are no longer as fixed as they appear.
            </p>

          </article>
        </div>
      </section>

      {/* CTA Section - Enhanced with brand elements */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(250 75% 58% / 0.15) 0%, transparent 60%)'
          }}
        />

        {/* Top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(250 75% 58% / 0.4) 50%, transparent)'
          }}
        />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Ready to see what&apos;s possible for your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary-foreground rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(250 75% 58%), hsl(250 75% 48%))',
                boxShadow: '0 8px 32px hsl(250 75% 58% / 0.4)'
              }}
            >
              Book a Working Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
