import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'OpStack Opinions - Insights',
  description: 'Practical thinking on operations, technology, and building businesses that work.',
}

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

// Large decorative quote marks
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
          Read article
        </Link>
      </div>
    </article>
  )
}

export default function InsightsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/backgrounds/fiber-sweep.webp)',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl">
            <p className="font-display text-xl sm:text-2xl font-light italic tracking-wide text-white/70 mb-2">
              OPSTACK
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6 text-white">
              <span className="text-primary">OPINIONS</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Practical thinking on operations, technology, and building businesses that work.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative pb-24 lg:pb-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>

            {insights.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                More insights coming soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 border-t border-border">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want to discuss how these ideas apply to your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Book a Working Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
