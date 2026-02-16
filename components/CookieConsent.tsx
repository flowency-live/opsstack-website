'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Settings } from 'lucide-react'
import { Button } from './ui/button'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)

    // Here you would typically initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log('Analytics enabled')
    }
    if (prefs.marketing) {
      // Initialize marketing tools
      console.log('Marketing cookies enabled')
    }
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const saveCustom = () => {
    savePreferences(preferences)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Backdrop overlay for settings */}
      {showSettings && (
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          <div className="relative bg-card/95 backdrop-blur-xl border border-primary/30 rounded-lg shadow-2xl shadow-primary/20 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-primary to-purple" />

            {!showSettings ? (
              /* Simple Banner */
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        We value your privacy
                      </h3>
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site traffic, and
                        understand where our visitors are coming from. By clicking "Accept all", you
                        consent to our use of cookies.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="lg"
                        variant="hero"
                        onClick={acceptAll}
                        className="flex-1 sm:flex-initial"
                      >
                        Accept all
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={rejectAll}
                        className="flex-1 sm:flex-initial"
                      >
                        Reject all
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setShowSettings(true)}
                        className="flex-1 sm:flex-initial"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Settings Panel */
              <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Cookie Preferences</h3>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
                    aria-label="Close settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-foreground/70">
                  We use different types of cookies to optimize your experience on our website. Click on
                  the categories below to learn more and customize your preferences.
                </p>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-lg">Necessary Cookies</h4>
                        <p className="text-sm text-foreground/70">
                          Essential for the website to function properly. These cannot be disabled.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold">
                          Always Active
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-lg">Analytics Cookies</h4>
                        <p className="text-sm text-foreground/70">
                          Help us understand how visitors interact with our website by collecting
                          anonymous information.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) =>
                            setPreferences({ ...preferences, analytics: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-lg">Marketing Cookies</h4>
                        <p className="text-sm text-foreground/70">
                          Used to track visitors across websites to display relevant ads and marketing
                          campaigns.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) =>
                            setPreferences({ ...preferences, marketing: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    variant="hero"
                    onClick={saveCustom}
                    className="flex-1 sm:flex-initial"
                  >
                    Save preferences
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={acceptAll}
                    className="flex-1 sm:flex-initial"
                  >
                    Accept all
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
