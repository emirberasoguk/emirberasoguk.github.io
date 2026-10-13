# Component Specifications: Nothing Tech Design System

Every component follows the Nothing industrial transparency aesthetic:

## 1. TopStatusNav
- **variants:** sticky-blur, mobile-drawer
- **sizes:** height 64px, max-width 1240px
- **tokens:** bg rgba(8,8,10,0.85), border rgba(255,255,255,0.12), backdrop-filter blur 20px
- **states:** normal, scrolled, active-style
- **a11y:** real `<header>`, `<nav>`, semantic ARIA labels

## 2. GlyphWidget
- **variants:** Phone (2a) arc and ring composition
- **sizes:** 160x200 SVG canvas
- **tokens:** stroke #ffffff, glow rgba(255,255,255,0.8), red-dot #d71920
- **states:** idle (20% opacity), active (100% glow), strobe sequence
- **interaction:** Click or hover triggers multi-step strobe pattern and vibration

## 3. PillButton
- **variants:** primary (solid white on black), ghost (translucent glass), red-accent
- **sizes:** sm 34px, md 44px, lg 50px
- **tokens:** radius pill (9999px), border 1px solid, font Space Mono 14px
- **states:** default, hover, active, focus-visible (2px ring)
- **a11y:** `<button>` or `<a>` with clear role and accessible text

## 4. ProjectCassetteCard
- **variants:** standard card, active highlight
- **sizes:** auto grid minmax(360px, 1fr)
- **tokens:** bg rgba(22,22,26,0.72), radius 20px, border 1px solid rgba(255,255,255,0.12)
- **states:** default, hover (border-color rgba(255,255,255,0.35), translate -3px)
- **a11y:** `<article>` container, headings, keyboard focusable action link

## 5. FilterChip
- **variants:** category selector capsule
- **sizes:** height 36px, padding 8px 18px
- **tokens:** radius pill, font Space Mono 13px
- **states:** active (solid white, dark text), inactive (translucent glass)
- **a11y:** role="tablist", aria-selected

## 6. HardwareSpecRack
- **variants:** 3-column chassis
- **sizes:** modular column
- **tokens:** bg rgba(22,22,26,0.72), unit bg rgba(255,255,255,0.02)
- **states:** default, unit-hover (rgba(255,255,255,0.06))

## 7. ToastAlert
- **variants:** non-intrusive bottom-right capsule
- **tokens:** bg rgba(20,20,24,0.95), border 1px solid #d71920, radius pill
- **states:** hidden, entrance (translateY 0), exit
- **a11y:** role="alert", aria-live="polite"
