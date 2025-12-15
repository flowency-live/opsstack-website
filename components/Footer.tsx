import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = {
    company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50 py-16">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                {/* Stacked bars icon */}
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[5px] rounded-full bg-gradient-to-r from-[#c4b5fd] to-[#a78bfa]" />
                  <div className="w-5 h-[5px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#818cf8]" />
                  <div className="w-5 h-[5px] rounded-full bg-gradient-to-r from-[#818cf8] to-[#6366f1]" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Ops<span className="font-extrabold">Stack</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                We build the digital operating system your business should have had years ago. Tailored to how you actually work. Delivered in days, not months.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group">
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group">
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="mailto:hello@opsstack.co.uk" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 OpsStack. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with technology. <span className="gradient-text">Powered by humans.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
