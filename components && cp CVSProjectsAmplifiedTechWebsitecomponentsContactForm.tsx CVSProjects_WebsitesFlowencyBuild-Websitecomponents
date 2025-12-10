'use client'

import { useEffect, useId } from 'react'

interface CalEmbedProps {
  calLink?: string
  namespace?: string
  className?: string
  config?: {
    theme?: 'light' | 'dark'
    layout?: 'month_view' | 'column_view'
    hideEventTypeDetails?: boolean
  }
}

export function CalEmbed({
  calLink = 'flowamplified/30min',
  namespace = '30min',
  className = '',
  config = { theme: 'dark', layout: 'month_view', hideEventTypeDetails: false },
}: CalEmbedProps) {
  const uniqueId = useId().replace(/:/g, '-')
  const embedId = `cal-inline-${namespace}-${uniqueId}`

  useEffect(() => {
    // Cal.com inline embed initialization
    const initCal = () => {
      if (typeof window === 'undefined' || !window.Cal) {
        return
      }

      // Initialize Cal namespace
      window.Cal('init', namespace, { origin: 'https://app.cal.com' })

      // Configure inline embed
      window.Cal.ns[namespace]('inline', {
        elementOrSelector: `#${embedId}`,
        config: {
          layout: config.layout,
          theme: config.theme,
        },
        calLink: calLink,
      })

      // Configure UI with brand colors
      window.Cal.ns[namespace]('ui', {
        theme: config.theme,
        cssVarsPerTheme: {
          light: { 'cal-brand': '#a855f7' },
          dark: { 'cal-brand': '#a855f7' },
        },
        hideEventTypeDetails: config.hideEventTypeDetails,
        layout: config.layout,
        branding: {
          hideBranding: true,
        },
      })
    }

    // Load Cal.com script if not already loaded
    const existingScript = document.querySelector('script[src*="cal.com/embed"]')

    if (!existingScript) {
      const script = document.createElement('script')
      script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");
      `
      document.head.appendChild(script)

      // Wait for Cal to load, then initialize
      const checkCal = setInterval(() => {
        if (window.Cal) {
          clearInterval(checkCal)
          initCal()
        }
      }, 100)

      return () => clearInterval(checkCal)
    } else {
      // Cal already loaded, initialize immediately
      initCal()
    }
  }, [calLink, namespace, config, embedId])

  return (
    <div
      id={embedId}
      className={className}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
    />
  )
}

// Extend Window interface for Cal
declare global {
  interface Window {
    Cal?: any
  }
}
