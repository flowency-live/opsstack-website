'use client'

import { Mail, MapPin, HelpCircle, Check } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { CalEmbed } from '@/components/CalEmbed'

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden section-dark-enhanced section-grain pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Let&apos;s move something
              <span className="text-primary"> forward - together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Whether you&apos;ve just got a few questions or you want to explore working together, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Let&apos;s amplify <span className="text-primary">your tech</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-muted-foreground">
                  A no-pressure conversation to uncover what&apos;s really blocking your business.
                </p>
                <p className="text-lg text-muted-foreground">
                  We&apos;ll help you see what&apos;s possible, what it&apos;s worth, and outline a clear path forward - based on proven solutions we&apos;ve seen work for others in similar situations.
                </p>
                <p className="text-lg font-semibold text-primary">
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

            {/* Contact Form - Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Card */}
              <div className="glass-card p-7 rounded-2xl border-2 border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Send us a message</h3>
                </div>
                <ContactForm />
              </div>

              {/* Contextual Info */}
              <div className="flex flex-col justify-center gap-6">
                <div className="glass-card p-7 rounded-2xl border-2 border-primary/30">
                  <h3 className="text-xl font-semibold mb-3">Prefer email?</h3>
                  <p className="text-muted-foreground mb-4">
                    Email us directly and we&apos;ll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:hello@opstack.uk"
                    className="inline-flex items-center gap-3 text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    hello@opstack.uk
                  </a>
                </div>

                <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                  <p className="text-sm font-semibold mb-3">What happens next?</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      Schedule a quick discovery call
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      Show you a working prototype
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      You decide what&apos;s next
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-20 overflow-hidden section-dark-enhanced section-grain">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 card-hover space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Based in the UK</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                No problem. Just tell us what hurts. We will help you understand what is possible and where the biggest gains are.
              </p>
            </div>
          </div>

          {/* Risk Reversal - Our Promise */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="glass-card p-8 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Our Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">No sales pitch - just a conversation about your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">See a working prototype before committing to anything</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Your data is always yours - export anytime, no lock-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden section-light-enhanced">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Common <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Is this like Salesforce / HubSpot but custom?',
                  answer: 'No. Those are horizontal tools designed to serve everyone — which means they\'re optimised for no-one. We build the opposite: a single operating system designed entirely around how your business actually works. No features you don\'t need. No workflows that don\'t match yours. You\'re not getting a customised version of someone else\'s product. You\'re getting your product.',
                },
                {
                  question: 'How long does it actually take?',
                  answer: 'Days, not months. We typically show you a working prototype on day one — with your actual data. A functional first version is usually live within a week. From there, we iterate based on real use.',
                },
                {
                  question: 'What if my needs change?',
                  answer: 'Your Stack evolves with your business. Need a new workflow? We add it. Process changed? We update it. You\'re not locked into a fixed feature set or waiting for a vendor\'s roadmap. This is your operating system — it moves when you move.',
                },
                {
                  question: 'Do I own my data?',
                  answer: 'Absolutely. Your data is always yours - export anytime, no questions asked. We host your Stack on our infrastructure (so you don\'t have to manage servers), but you\'re never locked in. We\'re building a partnership, not a dependency.',
                },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-6 card-hover">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="relative py-20 overflow-hidden section-dark-enhanced section-grain">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                What happens <span className="text-primary">next?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
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
                    <p className="text-muted-foreground">{item.description}</p>
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
            background: 'radial-gradient(ellipse at 50% 0%, hsl(250 75% 58%) 0%, hsl(250 70% 35%) 50%, hsl(250 60% 20%) 100%)'
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
