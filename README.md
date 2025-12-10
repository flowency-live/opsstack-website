# Flowency Build Website

Modern, high-performance website for Flowency Build combining the best of Loveable's UI/UX design system with FlowencyBuild's established brand identity.

## Features

- **Loveable Design System**: Beautiful glassmorphism effects, mesh gradients, floating animations, and smooth transitions
- **FlowencyBuild Branding**: Exact brand colors (#a855f7 purple), Inter typography, and actual logo
- **Responsive**: Optimized for all devices with mobile-first approach
- **Modern Stack**: Next.js 14 + TypeScript + Tailwind CSS
- **Integrated**: Calendly booking, cookie consent, full navigation and footer

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts via Next.js optimization)

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
FlowencyBuild-Website/
├── app/
│   ├── layout.tsx          # Root layout with Navigation, Footer, CookieConsent
│   ├── page.tsx            # Main landing page (all sections)
│   └── globals.css         # Loveable design system + FlowencyBuild colors
├── components/
│   ├── Button.tsx          # Button component with hero variants
│   ├── Container.tsx       # Layout container
│   ├── Navigation.tsx      # Fixed navbar with mobile menu
│   ├── Footer.tsx          # Full footer with links and social
│   ├── CalendlyButton.tsx  # Calendly integration component
│   └── CookieConsent.tsx   # GDPR cookie consent banner
├── public/
│   └── flink-logo.png      # Flowency Build logo
├── BRAND_GUIDELINES.md     # Complete brand documentation
├── LOVEABLE_AUDIT.md       # Technical audit of Loveable code
└── package.json
```

## Sections

The landing page includes 8 comprehensive sections:

1. **Hero** - Animated background with floating orbs, gradient text, CTAs
2. **Problem** - "The truth nobody tells SMEs" - empathetic problem framing
3. **Solution** - "Your Business Operating System" - value proposition
4. **Process** - 3-step process (Discovery, Build, Evolve) with numbered cards
5. **What We Build** - Service list with checkmarks and hover effects
6. **Why This Works** - 5 value props (Clarity, Speed, Capability, etc.)
7. **Who This Is For** - Target audience checklist
8. **CTA** - Final conversion section with dual CTAs

## Design System Highlights

### Colors (FlowencyBuild Brand)
- **Primary Purple**: `hsl(262 83% 58%)` / `#a855f7`
- **Background Navy**: `hsl(225 71% 8%)`
- **Accent Orange**: `hsl(38 92% 50%)`

### Animations (Loveable)
- `animate-float` - Floating orbs (6s cycle)
- `animate-float-gentle` - Subtle background shapes (20s cycle)
- `animate-pulse-slow` - Gentle pulsing (4s cycle)
- `animate-glow` - Glow intensity variation (3s alternate)
- `animate-fade-in` - Entrance animation (0.6s)
- `animate-fade-in-up` - Slide-up entrance (0.8s)
- `animate-scale-in` - Scale entrance (0.5s)
- `animate-slide-up` - Slide from bottom (0.6s)

### CSS Utilities
- `.glass-card` - Glassmorphism with backdrop blur
- `.gradient-text` - Purple gradient text effect
- `.mesh-gradient` - Multi-layer radial gradient background
- `.hero-glow` - Radial gradient overlay
- `.card-hover` - Elevation + glow on hover
- `.btn-glow` - Button shadow glow
- `.number-badge` - Numbered badges for process steps

## Integration Points

### Calendly
- URL: `https://calendly.com/flow-amplified`
- Used in: Hero CTA, Final CTA
- Component: `CalendlyButton.tsx`
- Popup widget with fallback to direct link

### Navigation
- Fixed top bar with backdrop blur
- Desktop: Horizontal links + CTA button
- Mobile: Hamburger menu with full-screen overlay
- Pages: Home, Services, Pricing, About, Contact

### Footer
- 5-column layout (Brand, Services, Company, Legal)
- Social links (Email, LinkedIn, GitHub)
- Copyright and tech stack credit

### Cookie Consent
- GDPR-compliant banner
- LocalStorage persistence
- Glass-card styling matching site design

## Brand Consistency

This site maintains 100% brand consistency with FlowencyBuild:
- Exact purple color (#a855f7)
- Inter font family
- Actual logo (flink-logo.png)
- Voice and tone from AmplifiedTechWebsite
- All original content and messaging

## Loveable UI/UX Features Preserved

- Sophisticated animation system
- Mesh gradient backgrounds
- Floating geometric shapes
- Glass morphism effects
- Staggered entrance animations
- Card hover elevations
- Gradient text effects
- Number badges
- Section glow separators

## Performance Optimizations

- Next.js font optimization (Inter)
- CSS animations use GPU-accelerated transforms
- Responsive images
- Backdrop filter with fallbacks
- Reduced motion support (`prefers-reduced-motion`)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast WCAG AA compliant
- Reduced motion respected

## Next Steps

- [ ] Create `/services` page
- [ ] Create `/pricing` page
- [ ] Create `/about` page
- [ ] Create `/contact` page with form
- [ ] Add real client testimonials
- [ ] Integrate analytics
- [ ] Deploy to production (Vercel/Amplify)
- [ ] Set up custom domain
- [ ] Add SEO metadata

## References

- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Complete brand documentation
- [LOVEABLE_AUDIT.md](./LOVEABLE_AUDIT.md) - Technical analysis of Loveable code
- Original site: `C:\VSProjects\AmplifiedTechWebsite`
- Loveable reference: `C:\VSProjects\_Websites\FlowencyBuild-Website\Loveable Code`

## Development Notes

- Port 3000 may be in use (AdaptFlowDeliver site), dev server will auto-select next available port
- Logo must be present at `/public/flink-logo.png`
- Calendly script loads asynchronously on CalendlyButton mount
- Cookie consent uses localStorage for persistence

---

**Built with**: Next.js 14, TypeScript, Tailwind CSS, Lucide Icons
**Design**: Loveable UI/UX + FlowencyBuild Brand
**Created**: 2025-01-29
