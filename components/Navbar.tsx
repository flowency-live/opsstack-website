'use client'

import { Button } from "@/components/ui/button";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { ContactSlideOut } from "./ContactSlideOut";

// Animated hamburger icon that morphs to X
const MenuIcon = ({ isOpen, className }: { isOpen: boolean; className?: string }) => (
  <div className={`relative w-6 h-6 flex flex-col justify-center items-center ${className}`}>
    <span
      className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
        isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
      }`}
    />
    <span
      className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
      }`}
    />
    <span
      className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
        isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
      }`}
    />
  </div>
);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "What We Build", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "OpStack Opinions", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isOpen ? 'z-[10000] bg-background' : 'z-50'} ${scrolled && !isOpen ? 'border-b border-primary/10 bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/5' : !isOpen ? 'bg-background/50 backdrop-blur-sm' : ''}`}
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
                <MenuIcon isOpen={isOpen} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Slide-Out */}
      <ContactSlideOut
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Mobile Menu - rendered via portal to document.body */}
      {mounted && isOpen && createPortal(
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 z-[9999] bg-background"
          role="dialog"
          aria-modal="true"
        >
          {/* Navigation Links */}
          <div className="flex flex-col px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between py-4 border-b border-border/30"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {link.label}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to digitise your business properly?
            </p>
            <Button
              variant="hero"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsOpen(false);
                setContactOpen(true);
              }}
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
