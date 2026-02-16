'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Phone, ExternalLink, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ContactSlideOutProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactSlideOut({ isOpen, onClose }: ContactSlideOutProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Ensure client-side only
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus trapping
  useEffect(() => {
    if (isOpen && isAnimating && panelRef.current) {
      const focusableElements = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      firstElement?.focus()

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen, isAnimating])

  // Handle animation state
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.left = '0'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.left = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.left = ''
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000)

      const response = await fetch('https://formspree.io/f/xlgwnjrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `OpStack Contact: ${formData.name}`,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted || !isOpen) {
    return null
  }

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`contact-overlay-blur fixed inset-0 z-40 ${isAnimating ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        ref={panelRef}
        className={`contact-panel fixed top-0 right-0 h-screen w-full sm:w-96 bg-card shadow-2xl overflow-y-auto z-50 ${isAnimating ? 'slide-in' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-panel-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Image
            src="/opstack-logo.png"
            alt="OpStack"
            width={100}
            height={24}
            className="h-6 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Close contact panel"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-5">
          <div>
            <h2 id="contact-panel-title" className="text-xl font-bold text-foreground mb-1">
              Let&apos;s Talk
            </h2>
            <p className="text-sm text-muted-foreground">
              No pitch. No pressure. Just a conversation.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-2">
            {/* Email */}
            <a
              href="mailto:hello@opstack.uk"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">hello@opstack.uk</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+447758240770"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">07758 240770</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/opstackuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
              </div>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-3 text-xs text-muted-foreground">or send a message</span>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                id="slideout-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                id="slideout-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Email"
              />
            </div>

            <div>
              <textarea
                id="slideout-message"
                name="message"
                required
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>

            <Button
              type="submit"
              size="sm"
              disabled={isSubmitting}
              className="w-full group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <p className="text-center text-xs text-green-500 bg-green-500/10 border border-green-500/30 rounded-lg py-2">
                Message sent! We&apos;ll reply within 24 hours.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-xs text-destructive bg-destructive/10 border border-destructive/30 rounded-lg py-2">
                Something went wrong. Email us at hello@opstack.uk
              </p>
            )}
          </form>
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-border mt-auto">
          <Link href="/contact" onClick={onClose}>
            <Button
              variant="hero"
              size="sm"
              className="w-full group"
            >
              Book a Discovery Call
              <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-center text-xs text-muted-foreground mt-2">
            30 min. No pitch. Just clarity.
          </p>
        </div>
      </div>
    </>,
    document.body
  )
}

// Trigger button wrapper
interface ContactSlideOutTriggerProps {
  children?: React.ReactNode
  className?: string
}

export function ContactSlideOutTrigger({ children, className }: ContactSlideOutTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
        aria-label="Open contact panel"
      >
        {children || 'Contact'}
      </button>

      <ContactSlideOut
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
