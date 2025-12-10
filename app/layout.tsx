import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/CookieConsent"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KAVOStack - Fast, Practical Digital Capability for SMEs",
  description: "We act as your internal CTO and delivery team. Building the digital operating system your business should have had years ago. Clarity + Speed + Capability.",
  keywords: ["SME", "digital transformation", "automation", "AI", "business operating system", "CTO", "KAVOStack"],
  icons: {
    icon: '/kavo-logo.webp',
    apple: '/kavo-logo.webp',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <FloatingCTA />
      </body>
    </html>
  )
}
