'use client'

import { Mail, MapPin, HelpCircle } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { CalEmbed } from '@/components/CalEmbed'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Let&apos;s move something
              <span className="gradient-text"> forward - together</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70">
              Whether you&apos;ve just got a few questions or you want to explore working together, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-4xl md:text-6xl font-bold">
                Let&apos;s amplify <span className="gradient-text">your tech</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-foreground/60">
                  A no-pressure conversation to uncover what&apos;s really blocking your business.
                </p>
                <p className="text-lg text-foreground/70">
                  We&apos;ll help you see what&apos;s possible, what it&apos;s worth, and outline a clear path forward - based on proven solutions we&apos;ve seen work for others in similar situations.
                </p>
                <p className="text-lg font-semibold gradient-text">
                  We&apos;ll be candid about whether our approach is the right fit. Either way, you&apos;ll leave with actionable insights.
                </p>
              </div>
            </div>

            {/* Calendar Booking */}
            <div className="min-h-[700px]">
              <CalEmbed
                calLink="flowamplified/30min"
                namespace="30min"
                config={{ theme: 'dark', layout: 'month_view', hideEventTypeDetails: false }}
              />
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Send us a message</h3>
              </div>
              <p className="text-foreground/70">
                We will respond within 24 hours. Usually much faster.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 card-hover space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Based in the UK</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We work with SMEs across the UK - both remote and on-site where needed.
              </p>
            </div>

            <div className="glass-card p-8 card-hover space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Not sure what you need?</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                No problem. Just tell us what hurts. We will help you understand what is possible and where the biggest gains are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                What happens <span className="gradient-text">next?</span>
              </h2>
              <p className="text-xl text-foreground/60">
                Here is what you can expect when you reach out
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'We respond within 24 hours',
                  description: 'Usually much faster. We will set up a time that works for you.',
                },
                {
                  step: '2',
                  title: 'Discovery session - not a sales call',
                  description: 'We learn about your business, uncover blockers, and map the biggest opportunities. No pitch, just clarity.',
                },
                {
                  step: '3',
                  title: 'Working prototype - in the session',
                  description: "We build something real to prove what's possible - before you spend anything.",
                },
                {
                  step: '4',
                  title: "You decide what's next",
                  description: 'If you love it, we agree scope and timeline. If not, you walk away with a free tool and clear insights.',
                },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 card-hover flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Digital transformation without the theatre
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              No expensive consultancies. No six-month discovery phases. No slide decks.
            </p>
            <div className="space-y-4 text-2xl md:text-3xl font-bold">
              <div className="text-white">Get clarity.</div>
              <div className="text-white">Get capability.</div>
              <div className="text-white">Get results.</div>
            </div>
            <p className="text-white/60 text-sm pt-4">
              No commitment required. No sales pitch. Just value.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
