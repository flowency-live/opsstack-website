'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DigitalCard() {
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  useEffect(() => {
    // Generate QR code URL using QR Server API
    const cardUrl = encodeURIComponent('https://www.opsstack.co.uk/card')
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${cardUrl}`)
  }, [])

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jason Jones
ORG:OpsStack
TITLE:Founder - CTO Services
EMAIL:hello@opsstack.co.uk
URL:https://www.opsstack.co.uk
TEL;TYPE=WORK,VOICE:+44 7758 240770
NOTE:Fast, Practical Digital Capability for SMEs. We act as your internal CTO and delivery team.
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Jason-Jones-OpsStack.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card Container */}
        <div className="glass-card overflow-hidden border-primary/30">
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-primary to-purple p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-purple/20"></div>
            <div className="mb-4 relative">
              <Image
                src="/opsstack-logo.png"
                alt="OpsStack"
                width={160}
                height={60}
                className="h-16 w-auto mx-auto drop-shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Jason Jones</h1>
            <p className="text-purple-100 text-sm font-medium">Founder - CTO Services</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Company */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                OpsStack
              </h2>
              <p className="text-sm text-muted-foreground italic">
                Fast, Practical Digital Capability for SMEs
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:hello@opsstack.co.uk"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">hello@opsstack.co.uk</p>
                </div>
              </a>

              <a
                href="https://www.opsstack.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Website</p>
                  <p className="text-sm font-medium">opsstack.co.uk</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jjonesuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium">Jason Jones</p>
                </div>
              </a>

              <a
                href="tel:+447758240770"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+44 7758 240770</p>
                </div>
              </a>
            </div>

            {/* QR Code */}
            {qrCodeUrl && (
              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center mb-3">Share this card</p>
                <div className="bg-white p-4 rounded-xl mx-auto w-fit">
                  <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">Scan to save contact</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={downloadVCard}
                className="w-full bg-gradient-to-r from-primary to-purple hover:from-primary/90 hover:to-purple/90 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Save to Contacts
              </button>

              <a
                href="https://cal.com/flowamplified/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-card hover:bg-card/80 text-foreground font-semibold py-4 rounded-xl transition-all text-center border border-border hover:border-primary/30"
              >
                Book a Working Session
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          OpsStack - CTO Services for SMEs
        </p>
      </div>
    </div>
  )
}
