import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    slug: "six-barriers-sme-systems",
    headerTitle: "The Six Barriers That Stop SMEs",
    title: "The Six Barriers That Stop SMEs Improving Their Systems",
    excerpt: "Most SMEs know their systems are holding them back. What we see repeatedly isn't a lack of ambition. It's a set of very real barriers that make progress feel risky, expensive, or unclear.",
    category: "Insight",
  },
  {
    slug: "placeholder-2",
    headerTitle: "Coming Soon",
    title: "More Insights Coming",
    excerpt: "We're working on more practical thinking on operations, technology, and building businesses that work.",
    category: "Article",
  },
  {
    slug: "placeholder-3",
    headerTitle: "Coming Soon",
    title: "More Insights Coming",
    excerpt: "We're working on more practical thinking on operations, technology, and building businesses that work.",
    category: "Article",
  },
]

// Decorative quote marks for the header
const QuoteDecoration = () => (
  <svg
    className="absolute top-4 left-4 w-16 h-16 text-white/20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
)

const InsightCard = ({ insight }: { insight: typeof insights[0] }) => {
  return (
    <article className="group flex flex-col overflow-hidden border border-border dark:border-border/40 bg-card">
      {/* Purple header with decorative elements */}
      <div
        className="relative h-48 p-6 flex flex-col justify-end"
        style={{
          background: 'linear-gradient(135deg, hsl(250 60% 55%) 0%, hsl(250 50% 40%) 100%)'
        }}
      >
        {/* Decorative quote marks */}
        <QuoteDecoration />

        {/* Category badge */}
        <span className="absolute top-4 right-4 text-xs font-medium text-white/70 uppercase tracking-wider">
          {insight.category}
        </span>

        {/* Header title */}
        <h3 className="relative z-10 text-lg font-semibold text-white leading-snug">
          {insight.headerTitle}
        </h3>
      </div>

      {/* White body */}
      <div className="flex flex-col flex-1 p-6 bg-white dark:bg-zinc-900">
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 leading-tight">
          {insight.title}
        </h4>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
          {insight.excerpt}
        </p>

        <Link
          href={`/insights/${insight.slug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors w-fit"
        >
          Learn more
        </Link>
      </div>
    </article>
  )
}

const InsightsSection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Articles & <span className="text-primary">Insights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Practical thinking on operations, technology, and building businesses that work.
              </p>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 shrink-0"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
