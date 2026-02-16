'use client'

import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { ContactSlideOut } from "./ContactSlideOut";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "What We Build", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpen ? 'bg-background' : scrolled ? 'border-b border-primary/10 bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/5' : 'bg-background/50 backdrop-blur-sm'}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/opstack-logo.png"
              alt="OpStack"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
                )}
              </button>
            )}
            <Button variant="hero" size="sm" onClick={() => setContactOpen(true)}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                )}
              </button>
            )}
            <button
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-primary/10 animate-fade-in bg-background" role="menu">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="hero"
                size="sm"
                className="w-fit"
                onClick={() => {
                  setIsOpen(false);
                  setContactOpen(true);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Slide-Out */}
      <ContactSlideOut
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
