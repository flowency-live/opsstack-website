import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'The Six Barriers That Block Digital Disruption for SMEs - OpStack',
  description: 'Most SMEs know their systems are holding them back. What we see repeatedly isn\'t a lack of ambition. It\'s a set of very real barriers that make progress feel risky, expensive, or unclear.',
}

export default function SixBarriersArticle() {
  return (
    <main className="min-h-screen bg-background">
      {/* Article Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-background" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Insight
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Six Barriers That Block Digital Disruption for SMEs
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground">
              And why they&apos;re less fixed than they used to be
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative pb-24 lg:pb-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto">

            <p className="text-xl text-foreground leading-relaxed mb-8">
              Most SMEs know their systems are holding them back.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              They don&apos;t come to that conclusion lightly. They&apos;ve tried tools, agencies, consultants, and off-the-shelf platforms. Some things helped. Many didn&apos;t. Over time, effort turns into caution, and caution turns into inaction.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What we see repeatedly isn&apos;t a lack of ambition. It&apos;s a set of very real barriers that make progress feel risky, expensive, or unclear.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              These aren&apos;t theoretical. They show up once you&apos;re already trying to make things better.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              1. It Feels Too Expensive for What You&apos;ll Actually Get
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When SMEs look at &ldquo;proper&rdquo; systems, they&apos;re quickly pushed toward enterprise tools, long contracts, and six-figure implementation conversations. Even when the numbers might be affordable, the value is uncertain.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
              That uncertainty is the real issue.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Historically, it was justified. Custom software was slow and expensive. Changing direction was painful. Getting it wrong could lock a business into years of cost and disruption.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What&apos;s changed is the underlying economics. Modern cloud platforms, AI-assisted development, and better tooling mean useful, tailored systems can now be built faster and more cheaply than most people realise.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              The barrier today isn&apos;t just cost. It&apos;s that many SMEs are still making decisions based on how things used to work.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              2. There&apos;s No One Inside the Business Who Can Join the Dots
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most SMEs don&apos;t have in-house technical leadership. There&apos;s no one whose role is to translate operational problems into technical decisions, or to sanity-check what&apos;s being proposed.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That creates an uneven dynamic. Vendors speak confidently. Buyers aren&apos;t sure which questions matter. Decisions either stall, or move forward with a quiet sense of unease.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
              This isn&apos;t about intelligence or capability. It&apos;s about perspective.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Progress tends to happen when someone can sit between the business and the technology, speak plainly, and focus on outcomes rather than features. Not to produce documentation - but to help make clear, defensible choices.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              3. Past Attempts Have Made People Wary
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Almost every SME has a backstory.
            </p>

            <div className="text-lg text-muted-foreground leading-relaxed mb-6 pl-6 border-l-2 border-primary/40">
              A system that promised to transform operations and didn&apos;t.<br />
              A website rebuild that changed nothing internally.<br />
              A tool everyone was trained on and quietly worked around.
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Those experiences don&apos;t create resistance to change. They create caution.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The mistake many suppliers make is trying to override that caution with confidence. What works better is reducing risk early - showing something real, working with real data, before asking for commitment.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-12 font-medium">
              If value can&apos;t be demonstrated quickly and concretely, it usually doesn&apos;t improve with time.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              4. Tools Fail When They Don&apos;t Match How Work Actually Happens
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When systems aren&apos;t used, it&apos;s often blamed on people. Training. Mindset. Culture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In practice, most workarounds exist because the system doesn&apos;t fit the job. It adds steps, removes flexibility, or assumes work happens neatly when it doesn&apos;t.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The tools that stick tend to be simple in one important way: they make existing work easier. They&apos;re built by observing how things actually run, not by enforcing an idealised process.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-12 font-medium">
              If a system helps someone get through their day with less friction, adoption takes care of itself.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              5. Everything Feels Too Big to Tackle
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital improvement is often presented as a large, connected programme: CRM, finance, reporting, automation, AI. Every option feels foundational. Every choice feels irreversible.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
              That scale is paralysing.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What we see work far more reliably is starting with one obvious pain point. The spreadsheet everyone distrusts. The process that relies on one person&apos;s memory. The task that always causes delays.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Fixing one thing properly creates momentum. Momentum creates clarity. Grand plans tend to create documents and delay.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              6. The Real Fear Is Disruption, Not Change
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Many SMEs worry less about changing and more about breaking what already works.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That concern is reasonable. Traditional system implementations were slow, disruptive, and risky. Big-bang rollouts often failed, and recovery was expensive.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The delivery model has shifted. New tools can be introduced alongside existing ones. Improvements can be incremental. If something doesn&apos;t work, it&apos;s discovered early - not eighteen months in.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-12 font-medium">
              Smaller, reversible steps reduce risk far more effectively than large, irreversible commitments.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">
              What&apos;s Actually Different Now
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These barriers exist because, for a long time, digital tooling simply wasn&apos;t built with SMEs in mind. Enterprise vendors, long consulting engagements, and one-size-fits-all platforms dominated the landscape.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
              That&apos;s changing.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital capability is more accessible than it&apos;s ever been. Not free. Not effortless. But genuinely attainable in a way it wasn&apos;t even five years ago.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The hardest part is letting go of assumptions formed by past experience.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              If you&apos;ve tried before and it didn&apos;t work, the hesitation makes sense. But the tools, economics, and delivery approaches have moved on. For many SMEs, the constraints are no longer as fixed as they appear.
            </p>

          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 border-t border-border">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see what&apos;s possible for your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Book a Working Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
