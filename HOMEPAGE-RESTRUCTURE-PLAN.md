# Homepage Restructure Plan

> **Status**: Awaiting user input on options
> **Created**: 27 February 2026
> **Reference**: Perfect Rebel layout inspiration

---

## Current State

The homepage currently has:
1. **HeroSection** - Bold typography + floating stack tiles on right
2. **ProblemSection**
3. **BigSaasChallenge**
4. **ProcessSection**
5. **WhyThisWorksSection**
6. **StacksSection**
7. **WhoThisIsForSection**
8. **TrustSection**
9. **ValuesSection** (carousel with bold statements - TOO STRONG for this position)
10. **InsightsSection**
11. **CTASection**

## Problem

The ValuesCarousel is too impactful to be buried at position 9. Those bold statements ("WE ARE OBSESSED", "NO BLOATWARE", etc.) need to hit users earlier while attention is high.

---

## Proposed New Structure

### 1. Hero Section (Restructured)
- **Left side**: Keep bold "YOUR BUSINESS / DIGITISED PROPERLY" text with CTAs
- **Right side**: Replace floating tiles with a **striking abstract graphic**
- Remove the tile field entirely from hero

### 2. Stack Tiles Row (NEW - Slim Section)
A compact horizontal row showing the 4 stack tiles (Relay, Niner, Level, Track)
- Acts as a visual bridge between hero and carousel
- Similar to Perfect Rebel's interactive pill buttons row

### 3. Values Carousel (MOVED UP)
The existing ValuesCarousel moves to position 3, immediately after tiles row
- Now in prime real estate (second scroll viewport)
- Bold statements hit while attention is still high

### 4. Rest of Page
Continue with ProblemSection, BigSaasChallenge, etc.

---

## Design Options (Awaiting User Input)

### Option 1: Hero Graphic
What should fill the right side of the hero?

**A) Masked abstract image** - Use fiber-ribbons.png cropped into a dramatic shape (circle, diagonal slice, organic blob)

**B) CSS radial burst** - Pure CSS gradient effect in brand purple, feels like energy/momentum

**C) Fiber-ribbons as focal element** - The image presented prominently rather than as background

### Option 2: Stack Tiles Row Style

**A) Horizontal scroll** - Larger tiles like app icons, swipeable on mobile

**B) Compact inline row** - Smaller tiles + labels (like Perfect Rebel pill buttons), interactive feel

**C) Overlapping transition** - Subtle floating row that bridges hero/carousel visually

### Option 3: Carousel Height

**A) Full viewport** (~100vh) - Maximum impact, current behavior

**B) Shorter** (~70vh) - Keeps energy moving, shows hint of next section

---

## Recommended Approach

Based on the Perfect Rebel reference:
1. **Hero graphic**: Option A - Fiber-ribbons as masked circle/blob on right
2. **Tiles row**: Option B - Compact row with that interactive pill-button feel
3. **Carousel**: Option B - ~70vh to keep energy flowing

---

## Implementation Steps (Once Options Confirmed)

### Phase 1: Hero Restructure
1. Create new `HeroGraphic.tsx` component for right-side visual
2. Modify `HeroSection.tsx` to remove tile field, add graphic
3. Adjust layout for two-column hero (text left, graphic right)

### Phase 2: Stack Tiles Row
1. Create new `StackTilesRow.tsx` component
2. Style as compact horizontal row with hover interactions
3. Add to `app/page.tsx` between HeroSection and ValuesSection

### Phase 3: Move Carousel
1. Update `app/page.tsx` section order
2. Adjust ValuesCarousel height if needed
3. Remove `ValuesSection` wrapper, use `ValuesCarousel` directly

### Phase 4: Polish
1. Ensure smooth transitions between sections
2. Test responsive behavior
3. Verify animations work correctly

---

## Files to Create
- `components/HeroGraphic.tsx` - Abstract visual for hero right side
- `components/StackTilesRow.tsx` - Compact tiles horizontal row

## Files to Modify
- `components/HeroSection.tsx` - Remove tiles, add graphic, restructure layout
- `app/page.tsx` - Reorder sections, add StackTilesRow

## Files to Potentially Remove
- `components/ValuesSection.tsx` - May not need wrapper anymore
- `components/HeroTileField.tsx` - If tiles fully removed from hero

---

## Assets
Existing backgrounds available:
- `/backgrounds/fiber-ribbons.png` - Sweeping curved lines (RECOMMENDED for hero graphic)
- `/backgrounds/particle-wave-1.png` - Delicate particle wave
- `/backgrounds/particle-wave-2.png` - Purple/cyan wave

Stack tile images:
- `/stacks/stack_relay.png`
- `/stacks/stack_niner.png`
- `/stacks/stack_level.png`
- `/stacks/stack_track.png`
