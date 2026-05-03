---
name: SipScene Aesthetic
colors:
  surface: '#fff8f6'
  surface-dim: '#e6d7d2'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#faebe6'
  surface-container-high: '#f4e5e0'
  surface-container-highest: '#eedfda'
  on-surface: '#211a17'
  on-surface-variant: '#504441'
  inverse-surface: '#372f2b'
  inverse-on-surface: '#fdeee8'
  outline: '#827470'
  outline-variant: '#d4c3be'
  surface-tint: '#77574d'
  primary: '#442a22'
  on-primary: '#ffffff'
  primary-container: '#5d4037'
  on-primary-container: '#d4ada1'
  inverse-primary: '#e7bdb1'
  secondary: '#725a39'
  on-secondary: '#ffffff'
  secondary-container: '#fbdbb0'
  on-secondary-container: '#765f3d'
  tertiary: '#343127'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b473c'
  on-tertiary-container: '#bcb5a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#e7bdb1'
  on-primary-fixed: '#2c160e'
  on-primary-fixed-variant: '#5d4037'
  secondary-fixed: '#feddb3'
  secondary-fixed-dim: '#e1c299'
  on-secondary-fixed: '#281801'
  on-secondary-fixed-variant: '#584324'
  tertiary-fixed: '#e9e2d3'
  tertiary-fixed-dim: '#cdc6b8'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4b463c'
  background: '#fff8f6'
  on-background: '#211a17'
  surface-variant: '#eedfda'
typography:
  h1:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built for the "SipScene Café" brand, targeting a Gen-Z demographic that values "Instagrammable" aesthetics as much as quality coffee. The brand personality is warm, inviting, and premium, yet maintains a youthful energy that feels accessible rather than elitist.

The visual style is a blend of **Minimalism** and **Tactile Design**. It relies on high-quality photography, generous whitespace, and a sophisticated warm palette to create a "cozy-digital" environment. The interface should feel like a physical extension of a high-end café—soft to the touch, well-organized, and rich in texture. The goal is to evoke a sense of calm and "main character energy" for the user.

## Colors

The color palette for this design system is inspired by the various stages of a latte—from the dark, rich espresso to the golden caramel and soft frothed milk. 

- **Primary (#5D4037):** A deep, roasted mocha brown used for primary actions and strong brand presence.
- **Secondary (#D2B48C):** A warm caramel tan, used for accents, highlights, and secondary interactions.
- **Tertiary (#FDF5E6):** An airy cream/beige background color that provides a soft alternative to pure white, enhancing the "cozy" vibe.
- **Neutral (#2C2421):** A near-black "Dark Espresso" used for high-contrast text and deep structural elements.

The palette prioritizes low-eye-strain backgrounds (cream instead of white) to encourage long browsing sessions.

## Typography

This design system utilizes two distinct typefaces to balance character with readability.

**Epilogue** is used for headlines. Its geometric yet expressive nature provides the "editorial" look essential for a premium brand. It should be used in bold weights with tight letter-spacing to create a confident, modern impact.

**Plus Jakarta Sans** is used for body text and labels. Its soft, rounded terminals complement the overall UI shape language. It remains highly legible at small sizes, ensuring that menu items and descriptions are easy to scan. 

Use sentence-case for most headings to maintain a friendly, conversational tone.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to ensure a curated, "lookbook" feel, while transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid system is used for desktop layouts, allowing for asymmetrical "Instagram-style" masonry grids for food photography.
- **Rhythm:** An 8px base unit governs all spacing.
- **Whitespace:** Emphasize generous vertical padding (`stack-lg`) between sections to let the high-quality coffee imagery breathe. 
- **Alignment:** While text is generally left-aligned for legibility, featured quotes or product highlights may be center-aligned to break the rhythm and grab attention.

## Elevation & Depth

To maintain the premium feel, this design system avoids harsh, black shadows. Instead, it uses **Ambient Shadows** and **Tonal Layers**.

- **Shadows:** Use soft, diffused shadows with a subtle tint of the primary coffee brown (`rgba(93, 64, 55, 0.08)`). This makes elements feel like they are floating slightly above a warm surface rather than a cold digital screen.
- **Tiers:** 
  - **Surface:** The Tertiary Cream (#FDF5E6).
  - **Container:** A slightly lighter or darker beige to define areas without using borders.
  - **Overlay:** High-elevation elements like modals use a "Glassmorphism" effect with a heavy backdrop-blur (12px-20px) to maintain the sense of space.

## Shapes

The shape language is defined by a "Large Radius" philosophy to evoke friendliness and comfort.

- **Standard Elements:** Buttons and input fields use a `0.5rem` (8px) radius.
- **Feature Elements:** Content cards, product containers, and large imagery use `1rem` (16px) or `1.5rem` (24px) for a soft, modern appearance.
- **Interactive States:** On hover, cards may subtly expand or increase their corner radius to provide tactile feedback.

Avoid sharp 90-degree angles entirely; every corner should feel polished and "hand-finished."

## Components

### Buttons
- **Primary:** Solid Primary Mocha with Cream text. Heavy padding (16px top/bottom, 32px sides).
- **Secondary:** Ghost style with a 2px Caramel border.
- **Interaction:** Soft scale-down (0.98) on click to simulate a physical button press.

### Cards
- Used for menu items and blog posts.
- Features "Image-First" layouts. Images should have a `1.5rem` radius.
- Use the tinted ambient shadow to lift the card on hover.

### Chips & Tags
- Used for dietary labels (e.g., "Vegan", "Oat Milk").
- Pill-shaped with a Secondary Caramel background at 15% opacity and matching dark caramel text.

### Input Fields
- Background-colored (Tertiary) with a subtle bottom border or a very soft inner shadow.
- Focus state uses a 2px Caramel ring.

### Instagram Feed Integration
- A dedicated component for live social feeds.
- Uses an asymmetrical masonry layout with varying card heights to create visual "liveliness."

### Navigation
- A floating "Glass" header that blurs the content behind it, keeping the focus on the coffee imagery while ensuring the menu is always accessible.