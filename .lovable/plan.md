

# Complete Site Revamp — Surya Maddula

The current site feels generic and flat. This revamp rebuilds every section to match the original creative vision: restraint as signal, specificity as proof, subliminal motion, and a continuous narrative that makes someone ask *"What's the specific wedge?"* — and find the answer already on the page.

---

## What Changes

### 1. Dark-First Design with Working Theme Toggle
- Default to **dark mode** (the current `useTheme` hook forces light and removes dark). Dark feels more premium, more intentional.
- Restore a working light/dark toggle (floating, top-right, minimal).
- Refine the dark palette: deeper blacks (`hsl(230, 15%, 4%)`), slightly warmer foreground text, and a subtle cool-blue accent for hover states — no bright colors.

### 2. Hero Section — Maximum Impact
- Remove the subtitle line about "18 / Founder / Patent / Columbia / Backed by..." — that's resume noise in the hero. Move those signals downstream.
- Hero becomes just:
  - **"Surya Maddula"** — small, tracking-wide, understated
  - **"Building physical-world intelligence infrastructure."** — large, quiet, centered
  - Breathing chevron below
- Larger whitespace. The hero should feel like walking into a room with one sentence on the wall.

### 3. About Section — Tighter, More Conviction
- Trim to two paragraphs max. Remove redundancy.
- First paragraph: who + what (Whisperwave, patent at 15, backers).
- Second paragraph: the thesis — one line, punchy. "Intelligence infrastructure that operates in the physical world — not just in software."
- Drop the third paragraph that restates the thesis weakly.

### 4. Orbit Section — Real Hover Interactions
- Keep the 5 focus nodes but add **hover tooltips** with one sharp sentence each connecting to the physical-world intelligence thesis.
- Example: "AI Infrastructure" hover -> "Foundation models adapted for physical-world sensor data."
- Subtle glow on hover (box-shadow with low opacity accent color). No bouncing.

### 5. Projects Section — Narrative Arc Ordering + Better Cards
- Reorder projects to follow the plan's narrative arc: Open Air ANC first (the wedge), then Digital MRV, Ecoligna, Future of Alexa, Future of Banking. Move the ML hobby projects (Matplotlib ANC, Product Recommendation, HDR) to a secondary "Experiments" grouping or remove them to keep signal high.
- Cards get a left accent border on hover (2px, subtle).
- Modal gets a slightly better layout with the tag as a colored pill.

### 6. Writing Section — Real Links + Better Presentation
- The current fragments link to "#" (nowhere). Replace with actual Medium/Substack URLs or remove the arrow icons if no real links exist yet.
- Rename section label to match plan: "Surya's Sonnets" (already done).

### 7. Building Now Section — Sharper Hierarchy
- Add "Researching LLMs at Columbia" and "Advising at EVM Capital" lines (already in data but ensure they're prominent).
- The "Now" label gets a subtle green dot (live signal indicator) — a 6px circle, `bg-emerald-500/60`, pulsing gently.

### 8. Close Section — Add Scarcity Signal
- Below the social icons, add in low contrast, small font: *"Building deliberately. Access is selective."* — per the plan.
- This is the final note. Discovered scarcity, not declared.

### 9. Ambient Canvas — More Atmospheric
- Increase particle count slightly (50 instead of 40).
- Increase connection distance to 180px.
- Make particles slightly more visible (opacity 0.08 instead of 0.06).
- Add a very subtle radial gradient overlay behind the hero for depth.

### 10. Scroll Progress — Polish
- Dots slightly larger (2px instead of 1.5px).
- Active dot gets a subtle glow (`box-shadow`).

### 11. Typography & Spacing Refinements
- Import Space Grotesk via Google Fonts in `index.html` (it's referenced in styles but never loaded).
- Increase section padding for more breathing room.
- Philosophy interjections get larger text and more vertical space — they should feel like pauses in a conversation.

---

## Technical Details

### Files Modified
1. **`index.html`** — Add Space Grotesk font preload
2. **`src/hooks/useTheme.ts`** — Restore working dark/light toggle with dark as default
3. **`src/index.css`** — Refined dark palette, larger spacing utilities, green dot pulse keyframe
4. **`src/pages/Index.tsx`** — Add ThemeToggle component back
5. **`src/components/ThemeToggle.tsx`** — Wire up to working theme state
6. **`src/components/HeroSection.tsx`** — Strip to essentials, add radial gradient overlay
7. **`src/components/AboutSection.tsx`** — Tighten to 2 paragraphs
8. **`src/components/OrbitSection.tsx`** — Add hover tooltips with thesis-connected sentences
9. **`src/components/ProjectsSection.tsx`** — Reorder projects, improve card styling, accent border on hover
10. **`src/components/WritingSection.tsx`** — Fix placeholder links or remove arrows
11. **`src/components/BuildingNowSection.tsx`** — Add green live dot to "Now" label
12. **`src/components/CloseSection.tsx`** — Add scarcity signal line
13. **`src/components/AmbientCanvas.tsx`** — Increase atmospheric density
14. **`src/components/ScrollProgress.tsx`** — Polish dot sizes and active glow

### No New Dependencies
Everything uses existing Tailwind, CSS, and lightweight canvas. No animation libraries added.

