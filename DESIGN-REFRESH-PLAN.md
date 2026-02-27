# OpsStack Website Design Refresh Plan

> **Status**: Discovery & Inspiration Gathering
> **Last Updated**: 26 February 2026

---

## 1. Inspiration Sources

### Source 1: Perfect Rebel (perfectrebel.com/get-involved)
- **Reference**: `.Documentation/ExampleWebsites/GET INVOLVED - Perfect Rebel.html`
- **What I like about it**:
  - **Bold aggressive typography in carousel/hero sections**
    - Two-line hierarchy: small italic lead-in ("WE ARE", "NO", "WE TELL IT")
    - Followed by MASSIVE bold display text ("UNAF:RAID", "DICKHEADS", "ST:RAIGHT")
    - The colon-R motif: stylized ":" replaces letters to create brand element
  - **High-impact full-width sliders**
    - Dark backgrounds with vibrant particle/wave abstract imagery
    - Purple/magenta/cyan/orange gradients in backgrounds
    - White text on dark with strong contrast
  - **Carousel structure**
    - Each slide: background image + small lead text + huge headline + supporting paragraph
    - Slick slider with fade transitions
    - Arrow navigation on sides, dot indicators at bottom

### Source 2: TrueLayer (truelayer.com)
- **Reference**: Screenshots provided
- **What I like about it**:
  - **Heavy condensed typography** - Very bold, almost brutalist headline font
  - **Dark mode default** with lavender/purple accents (#b8a8f8 range)
  - **Clean product UI mockups** floating on right side of hero
  - **Simple pill-shaped CTA buttons** with arrows
  - **Dropdown mega-menu** with icons and categories
  - **Top announcement banner** with CTA link

### Source 3: Amber Labs (amberlabs.co.uk)
- **Reference**: Screenshots provided
- **What I like about it**:
  - **Abstract wave/particle backgrounds** - Orange/copper tones with flowing lines
  - **Services grid layout** with subtle glass-morphism cards
  - **Coral/orange accent color** on dark background
  - **Icon-based service cards** with "Read more" links
  - **The particle/wave aesthetic** - exactly what we need for abstract visuals

### Source 4: Perfect Rebel - Additional Screenshots
- **FUTU:RE Hero Section**:
  - More colon typography examples ("FUTU:RE?")
  - **Cyan fiber-optic/neural network abstract background** - gorgeous!
  - The abstract has an "eye" focal point - draws attention
  - Pink (#E44398) headline on dark with cyan accents

- **1-2-3 Numbered Steps**:
  - Pill-shaped cards with oversized gradient numbers
  - Purple gradient background (magenta → purple)
  - Numbers appear to be graphic elements (SVG/images)
  - Great for process flows or key questions

---

## 2. Design Direction (Emerging)

### Aesthetic Theme
**Bold Tech/Rebellious Professional** - High contrast, aggressive typography, dark sophisticated backgrounds with vibrant accents

### Typography Ideas (from Perfect Rebel)
- **Display Font**: Heavy/Black weight sans-serif (consider: Inter Black, Montserrat Black, or similar)
- **Lead-in Text**: Light italic for contrast hierarchy
- **Body Font**: Clean readable sans-serif
- **Special Treatment**: The "colon-R" effect (`:R`) as a distinctive brand element

### Color Palette Direction
- **Backgrounds**: Deep dark (#1a1a2e or similar)
- **Primary Accent**: Vibrant pink/magenta (#E44398 from Perfect Rebel)
- **Secondary**: Purple tones
- **Gradient Backgrounds**: Abstract particle/wave imagery with cyan, purple, orange, magenta
- **Text**: White on dark, dark on light sections

### Key Visual Elements
- **Motion/Animation**: Fade transitions on sliders, AOS (Animate on Scroll) for reveals
- **Background treatments**: Abstract particle/wave imagery, gradient overlays
- **Spacing philosophy**: Generous white space, full-width sections
- **Distinctive details**: The colon typography treatment, circular arrow buttons

---

## 3. Current OpsStack Site Structure

**Stack**: Next.js with React, Tailwind CSS
**Current Pages**:
- Homepage (app/page.tsx)
- About, Services, Contact, Pricing, Insights
- VS comparison pages (vs-salesforce, vs-hubspot, etc.)

**Current Homepage Sections**:
1. HeroSection - Gradient background, tile field animation
2. ProblemSection
3. BigSaasChallenge
4. ProcessSection
5. WhyThisWorksSection
6. StacksSection
7. WhoThisIsForSection
8. TrustSection
9. InsightsSection
10. CTASection - Purple gradient background

---

## 4. Component Inventory

### Components to Update (with Perfect Rebel influence)

- [ ] **CTASection** - Most aligned with carousel inspiration
  - Add bold two-line typography treatment
  - Consider carousel of value propositions
  - Dark background with abstract imagery

- [ ] **HeroSection** - Bold headline treatment
  - Larger, bolder typography
  - Consider split headline with lead-in + massive display text

- [ ] **New: Values/Beliefs Carousel** - Direct inspiration from Perfect Rebel
  - Full-width dark slides with abstract backgrounds
  - Bold statement headlines
  - Auto-playing with dot navigation

### Typography Enhancement Ideas
Current: `font-display text-4xl sm:text-5xl lg:text-6xl`
Proposed: Bolder, more aggressive sizing with two-line hierarchy

### New Components Needed
- [ ] **BoldStatementCarousel** - Values/beliefs slider (Perfect Rebel style)
- [ ] **StylizedHeading** - Component for the bold two-line headline pattern
- [ ] **NumberedStepCards** - The 1-2-3 pill-shaped step indicators (see below)

---

## 4b. Numbered Step Cards (Perfect Rebel "1-2-3" Style)

### What They Are
Pill-shaped cards with oversized gradient numbers at top, text content below. Used for process steps, key questions, or feature highlights.

### Analysis: Graphic Elements vs CSS
**Verdict: These are likely graphic/SVG elements** because:
- Custom curved number styling (not standard fonts)
- Complex gradient masking with rounded-top pill shape
- Consistent design across different numbers

### Implementation Options for OpStack

**Option A: SVG Graphics (Recommended)**
- Create 1-9 number SVGs in Figma/Illustrator
- Export as optimized SVGs with gradient fills
- Use OpStack purple palette (#7c5dfa gradient)
- Embed inline for easy color customization

**Option B: Heavy Font + CSS Gradient**
- Use Clash Display Black or Cabinet Grotesk Black
- Apply CSS gradient mask to text
- Build the pill container separately
- Less precise but more flexible

**Option C: Hybrid**
- Font-based numbers with SVG gradient overlay
- Pill container as CSS component

### Card Structure
```
┌─────────────────┐
│    ╭─────╮      │  ← Circular top with gradient
│    │  1  │      │  ← Oversized number (gradient: light→purple)
│    ╰─────╯      │
│ ─────────────── │  ← Transition to darker purple
│                 │
│  Question or    │  ← White text content
│  **BOLD KEY**   │  ← Bold highlights
│  phrase here    │
│                 │
└─────────────────┘
```

### CSS Concept
```css
.step-card {
  background: linear-gradient(180deg,
    rgba(184, 168, 248, 0.3) 0%,    /* Light purple top */
    rgba(124, 93, 250, 0.8) 40%,    /* Mid purple */
    rgba(80, 60, 180, 0.95) 100%   /* Deep purple bottom */
  );
  border-radius: 9999px 9999px 24px 24px; /* Pill top, rounded bottom */
}

.step-number {
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(180deg, #ffffff 0%, #7c5dfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Action Items
- [ ] Design number SVGs (1-6 minimum) in OpStack purple
- [ ] Create StepCard React component
- [ ] Test on ProcessSection or similar

---

## 5. Perfect Rebel Typography Pattern - Deep Dive

### The Two-Line Headline Structure
```
Line 1: Small/Light italic lead-in ("WE ARE", "NO", "WE TELL IT")
Line 2: MASSIVE BOLD statement ("UNAFRAID", "DICKHEADS", "STRAIGHT")
```

### CSS Classes from Perfect Rebel
- `.replace-text` - The bold statement text with special R treatment
- `.replace-text.white` - White text version
- `.wrap i` - The stylized letter container
- `.hero h1, .hero h2` - Hierarchy within hero sections
- `.feat-slide` - Full-width slider background

### Implementation in React/Next.js
```tsx
// Example BoldHeadline component
const BoldHeadline = ({ leadIn, statement, accentLetter }) => (
  <div className="bold-headline">
    <span className="lead-in">{leadIn}</span>
    <span className="statement">
      {statement.replace(accentLetter, `<span class="accent">${accentLetter}</span>`)}
    </span>
  </div>
)
```

### OpsStack Application Ideas
- "WE ARE" / "**OBSESSED**" (with quality)
- "NO" / "**BLOATWARE**"
- "YOUR BUSINESS" / "**SIMPLIFIED**"
- "CLARITY" / "**DELIVERED**"

---

## 6. The OpStack "Stack" Typography Treatment

### The 3-Bar Brand Element
From linkedin-banner.html, OpStack has a distinctive visual:
```
█████████████  (white/light)
██████████     (lavender)
███████        (purple)
```

### Using the Stack as a Typography Accent
Instead of Perfect Rebel's colon-R, we can use the **3-bar stack** as a distinctive letter replacement or accent:

**Option A: Replace a letter**
```
ST⫶CK      (stack replaces the A)
DIGIT⫶L    (stack replaces the A)
CL⫶RITY    (stack replaces the A)
```

**Option B: Use as punctuation/separator**
```
YOUR BUSINESS ⫶ DIGITISED PROPERLY
CLARITY ⫶ DELIVERED
```

**Option C: Animated stack that builds**
- Three bars animate in sequentially before the main word appears
- Creates a loading/building metaphor

### CSS Implementation Concept
```css
.stack-accent {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  vertical-align: middle;
  width: 0.6em;
}

.stack-accent .bar {
  height: 0.15em;
  border-radius: 2px;
}

.stack-accent .bar:nth-child(1) {
  width: 100%;
  background: linear-gradient(90deg, #fff, #c8beff);
}
.stack-accent .bar:nth-child(2) {
  width: 80%;
  background: linear-gradient(90deg, #b4a0ff, #9682ff);
}
.stack-accent .bar:nth-child(3) {
  width: 60%;
  background: linear-gradient(90deg, #7c5dfa, #6446dc);
}
```

### Brand Colors (from LinkedIn banner)
- **Primary Purple**: #7c5dfa
- **Light Purple/Lavender**: #b8a8f8, #a593f2
- **Background Dark**: #0d1321, #131a2e
- **Grid Overlay**: rgba(124, 93, 250, 0.06)
- **Text**: #ffffff, #d4dae8

---

## 7. Abstract Background Visuals (ACTION REQUIRED)

### What We Need
Particle/wave abstract imagery similar to:
- Perfect Rebel: Colorful particle waves (cyan, purple, orange, magenta)
- Amber Labs: Flowing copper/orange wave lines on dark

### Options to Source
1. **AI Generation** (Midjourney, DALL-E, Leonardo.ai)
   - Prompt ideas: "abstract flowing particle waves, dark background, purple cyan gradient, technology aesthetic, 8k"

2. **Stock/Resources**
   - [Unsplash](https://unsplash.com/s/photos/abstract-waves)
   - [Pexels](https://pexels.com)
   - [Freepik Premium](https://freepik.com)
   - [Envato Elements](https://elements.envato.com)

3. **Generated/Animated**
   - Three.js particle systems
   - CSS-only gradient animations
   - SVG wave generators (getwaves.io, svgwave.in)

### Recommended Approach
- Create 4-6 abstract visuals with OpStack purple (#7c5dfa) color theme
- Mix of particle waves, flowing lines, gradient meshes
- High-res for full-width sections (min 2560px wide)
- Variations for different sections (hero, CTA, values carousel)

### Color Palette for Backgrounds
- Primary: Purple (#7c5dfa) flowing into cyan (#00d4ff)
- Secondary: Orange/amber (#ff9500) into magenta (#e44398)
- Keep consistent with OpStack brand (purple-dominant)

---

## 8. Technical Considerations

- **Current Stack**: Next.js, React, Tailwind CSS
- **Animation Library**: Consider Framer Motion or CSS transitions
- **Carousel**: Embla Carousel or Swiper (lighter than Slick)
- **Performance targets**: Keep LCP under 2.5s
- **Accessibility requirements**: WCAG 2.1 AA minimum
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge)

---

## 7. Execution Plan (Draft)

*Once design direction is finalized, break down into implementation phases here.*

### Phase 1: Foundation
- [ ] Define OpsStack-specific bold statements/values
- [ ] Source or create abstract background imagery (particle/wave style)
- [ ] Create typography tokens (display font weights, sizes)
- [ ] Create BoldHeadline component
- [ ] Create background overlay/gradient patterns

### Phase 2: Core Components
- [ ] Build BoldStatementCarousel component
- [ ] Update CTASection with new bold typography
- [ ] Update HeroSection with stronger hierarchy
- [ ] Add values/beliefs section to homepage

### Phase 3: Polish & Refinement
- [ ] Animation and transitions
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## Notes & Discussion

*Running notes as we refine the plan:*

### 26 Feb 2026 - Initial Review
- Perfect Rebel uses a distinctive "replace-text" class with stylized R treatment
- The carousel headlines follow pattern: `WORD<br><span class="replace-text white">TEXT:HERE</span>`
- Each value slide has:
  - Full-width dark background with abstract imagery
  - Left-aligned text block (~50% width)
  - Two-line headline structure
  - Short punchy description paragraph
- The "colon" effect uses CSS to replace a letter with a special icon/treatment

### Typography CSS Pattern (from Perfect Rebel)
```css
.replace-text span i::before {
  /* Creates the distinctive colon/R replacement */
  width: .85em;
  height: .85em;
}
```

### Questions to Explore
- [ ] What specific sections of OpsStack should get the bold carousel treatment?
- [ ] Should we adopt the colon-R brand element or create our own distinctive typography treatment?
- [ ] What abstract background imagery fits OpsStack's brand?
- [ ] Current OpsStack color palette vs. Perfect Rebel's pink/purple direction?

