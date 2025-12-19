import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const insights = [
  {
    slug: "six-barriers-sme-systems",
    headerTitle: "Tech barriers for SMEs",
    title: "The Six Barriers That Block Digital Disruption for SMEs",
    excerpt: "Most SMEs know their systems are holding them back. What we see repeatedly isn't a lack of ambition. It's a set of very real barriers that make progress feel risky, expensive, or unclear.",
    category: "Insight",
    image: "/insights/banner-1.png",
  },
  {
    slug: "placeholder-2",
    headerTitle: "Coming Soon",
    title: "More Insights Coming",
    excerpt: "We're working on more practical thinking on operations, technology, and building businesses that work.",
    category: "Article",
    image: "/insights/banner-2.png",
  },
  {
    slug: "placeholder-3",
    headerTitle: "Coming Soon",
    title: "More Insights Coming",
    excerpt: "We're working on more practical thinking on operations, technology, and building businesses that work.",
    category: "Article",
    image: "/insights/banner-3.webp",
  },
]

// Large decorative quote marks - styled like Razor
const QuoteDecoration = () => (
  <svg
    className="absolute top-5 left-5 w-12 h-12 text-white/30"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
)

const InsightCard = ({ insight }: { insight: typeof insights[0] }) => {
  return (
    <article className="group flex flex-col overflow-hidden border-2 border-border dark:border-primary/30 bg-card shadow-sm hover:shadow-lg dark:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300">
      {/* Header with background image */}
      <div className="relative h-56 flex flex-col justify-end">
        {/* Background image */}
        <Image
          src={insight.image}
          alt=""
          fill
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Decorative quote marks */}
        <QuoteDecoration />

        {/* Category badge */}
        <span className="absolute top-5 right-5 text-[10px] font-semibold text-white/80 uppercase tracking-widest">
          {insight.category}
        </span>

        {/* Header title */}
        <div className="relative z-10 p-5 pt-12">
          <h3 className="text-xl font-bold text-white leading-tight">
            {insight.headerTitle}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 bg-white dark:bg-zinc-800/80">
        <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 leading-snug">
          {insight.title}
        </h4>

        <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
          {insight.excerpt}
        </p>

        <Link
          href={`/insights/${insight.slug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors w-fit"
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
        <div className="max-w-5xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="flex-1">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Articles & <span className="text-primary">Insights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Practical thinking on operations, technology, and building businesses that work.
              </p>

              {/* Accent bar */}
              <div
                className="w-full h-1 mt-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(250 75% 58%) 0%, hsl(250 75% 68%) 30%, transparent 100%)'
                }}
              />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
