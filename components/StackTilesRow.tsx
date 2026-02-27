'use client'

import Image from 'next/image'
import Link from 'next/link'

const stackTiles = [
  {
    id: 'relay',
    name: 'Relay',
    tagline: 'Transfer Management',
    src: '/stacks/stack_relay.png',
  },
  {
    id: 'niner',
    name: 'Niner',
    tagline: 'Workforce Scheduling',
    src: '/stacks/stack_niner.png',
  },
  {
    id: 'level',
    name: 'Level',
    tagline: 'Inventory Control',
    src: '/stacks/stack_level.png',
  },
  {
    id: 'track',
    name: 'Track',
    tagline: 'Asset Tracking',
    src: '/stacks/stack_track.png',
  },
]

const StackTilesRow = () => {
  return (
    <section className="relative py-6 md:py-8 bg-background border-y border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto scrollbar-hide">
          {stackTiles.map((tile) => (
            <Link
              key={tile.id}
              href="/services"
              className="group flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-full border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex-shrink-0"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative">
                <Image
                  src={tile.src}
                  alt={tile.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tile.name}
                </span>
                <span className="text-xs text-muted-foreground hidden md:block">
                  {tile.tagline}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StackTilesRow
