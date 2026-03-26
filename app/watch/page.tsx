import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Watch | OpStack',
  description: 'See how OpStack helps businesses digitise their operations properly.',
}

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Simple Header */}
      <header className="p-6">
        <Link href="/" className="inline-block">
          <Image
            src="/opstack-logo.png"
            alt="OpStack"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
      </header>

      {/* Video Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-4xl">
          {/* Video Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-border bg-card">
            <video
              autoPlay
              muted
              playsInline
              controls
              className="w-full aspect-video"
            >
              <source src="/explainer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Below Video */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to digitise your business properly?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  See What We Build
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="p-6 text-center">
        <p className="text-sm text-muted-foreground">
          OpStack — Your business, digitised properly.
        </p>
      </footer>
    </main>
  )
}
