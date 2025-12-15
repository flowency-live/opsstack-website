'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <Link
      href="https://builder.opsstack.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="glass-card px-6 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center gap-3">
          <span className="font-semibold text-foreground whitespace-nowrap">
            Design it <span className="text-primary font-bold">NOW</span>
          </span>
          <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
