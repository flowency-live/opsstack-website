'use client'

import { useEffect, useState } from 'react'
import { Button } from './Button'

interface CalendlyButtonProps {
  url?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline' | 'hero' | 'hero-outline'
  className?: string
  children: React.ReactNode
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      closePopupWidget: () => void
    }
  }
}

export function CalendlyButton({
  url = 'https://calendly.com/flow-amplified',
  size = 'lg',
  variant = 'primary',
  className = '',
  children,
}: CalendlyButtonProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="calendly"]')
    if (existingScript) {
      setScriptLoaded(true)
      return
    }

    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setScriptLoaded(true)
    script.onerror = () => {
      console.error('Failed to load Calendly script')
      setScriptLoaded(false)
    }
    document.body.appendChild(script)

    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup on unmount
      const calendlyClose = document.querySelector('.calendly-close-overlay')
      if (calendlyClose) {
        ;(calendlyClose as HTMLElement).click()
      }
      // Remove scroll lock if applied
      document.body.style.overflow = ''
    }
  }, [])

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()

    if (window.Calendly && scriptLoaded) {
      try {
        window.Calendly.initPopupWidget({ url })
      } catch (error) {
        console.error('Calendly popup failed:', error)
        // Fallback to direct link
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    } else {
      // Fallback if script not loaded
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={openCalendly}
    >
      {children}
    </Button>
  )
}
