'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Send, Loader2 } from 'lucide-react'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          message: formData.message,
          _subject: `OpStack Contact: ${formData.name}${formData.company ? ` from ${formData.company}` : ''}`,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground/90 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground/90 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="your.email@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground/90 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Your phone number (optional)"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-foreground/90 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Your company name (optional)"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground/90 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="Tell us about your business and what you need help with..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        variant="hero"
        disabled={isSubmitting}
        className="w-full group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <p className="text-center text-sm text-green-400 bg-green-400/10 border border-green-400/30 rounded-xl py-3">
          Message sent successfully! We will get back to you soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-center text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-xl py-3">
          Something went wrong. Please try again or email us directly at hello@opstack.uk
        </p>
      )}
    </form>
  )
}
