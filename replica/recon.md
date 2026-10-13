# Recon Map: Nothing Tech (Web / Desktop & Mobile)

Scope: Nothing Tech (us.nothing.tech) Digital Experience & Hardware Aesthetic System
For: Emir Bera Soğuk Portfolio & Open-Source Nothing Design Template
Date: 2026-10-14

## Sources

| # | source | URL | notes |
| --- | --- | --- | --- |
| 1 | Official Store | https://us.nothing.tech/ | Core marketing, Glyph showcase, transparent design language |
| 2 | Product Specs | https://us.nothing.tech/pages/phone-2a | Hardware specification tables, industrial casing details |
| 3 | Audio / Ear | https://us.nothing.tech/pages/ear-a | Audio widgetry, translucent pill charging cases |
| 4 | Brand & Community | https://nothing.tech/pages/community | Nothing OS widget philosophy, NDOT typeface |

## Core Loop

Iconic transparent industrial hardware aesthetic combined with dot-matrix typography and an interactive Glyph lighting interface that delivers tactile, high-contrast, distraction-free product showcases.

## Screens

| ID | screen | route / how to reach | purpose | key components | states seen |
| --- | --- | --- | --- | --- | --- |
| S01 | Hero & Glyph Hub | `/` (Home / Hero) | First tactile impression, interactive LED glyph lighting | TopStatusNav, GlyphWidget, PrimaryHeroPoster, RecDot | idle, glowing, strobe, hover |
| S02 | Product & Projects Grid | `#projects` | Showcase work & hardware releases in translucent cassettes | ProjectCassetteCard, FilterChipCluster, InspectBtn | all, category filtered, hover |
| S03 | Hardware Spec Rack | `#skills` | Technical capabilities presented as server/device racks | HardwareRack, SpecUnit, IndicatorLED | default, active, hover |
| S04 | Philosophy & Vision | `#about` | Transparent design manifesto and engineering philosophy | ManifestoCard, MechanicalTape, MetricBadge | default, expanded |
| S05 | Contact & Comm Line | `#contact` | Direct communication channel and social links | TactilePill, CopyToast, GlyphIndicator | normal, copied, clicked |

## Flows

```
F01 Interactive Glyph Sequence
    S01 Hero -> Hover/Click 'TETİKLE' -> Sequential LED lighting animation -> Steady glowing state
    happy path clicks: 1
    edge: rapid re-triggering, reduced motion preference

F02 Category Filtering
    S02 Projects -> Click category chip -> CSS spring transition filters cards smoothly
    happy path clicks: 1
    edge: empty category, responsive touch wrapping

F03 Direct CV / Asset Acquisition
    S01/S02 Cassette -> Click 'İndir (PDF)' -> Browser triggers verified direct PDF download
    happy path clicks: 1
    edge: offline availability
```

## Components

| component | variants | states | used on |
| --- | --- | --- | --- |
| TopStatusNav | sticky, blurred | normal, scrolled, mobile-menu | S01-S05 |
| GlyphWidget | phone-2a arc, center circle | idle, active, strobe | S01 |
| PillButton | primary (white), ghost (glass), red-accent | default, hover, active, focus | S01, S02, S05 |
| ProjectCassette | acrylic smoked, border-highlight | default, hover, scale | S02 |
| FilterChip | pill-capsule | active (solid white), inactive (glass) | S02 |
| HardwareRack | 3-column modular | default, hover-unit | S03 |
| ToastAlert | floating-capsule with red accent | hidden, entrance, exit | S01, S05 |

## Inferred Data Model

```
ProjectItem    id, title, category, description, tech_tags[], github_url, live_url, status
               evidence: S02 card fields, Nothing product catalog
               confidence: high

HardwareSpec   category, items[{name, icon, level_meta}]
               evidence: S03 spec racks, Phone (2a) tech specs
               confidence: high

StyleVariant   id, name, path, icon, is_active
               evidence: S01 top switcher capsule
               confidence: high
```

## Feature Matrix

See `features.csv`. Must: 8, should: 4, could: 2, skip: 1.

## Out of Scope (Cannot or Should Not be Cloned)

- Proprietary Nothing supply chain hardware firmware
- Commercial e-commerce payment gateway (kept as portfolio / download flow)
- Paid commercial sound assets (custom CSS/SVG animations used instead)

## Size

Screens: 5 modules, Flows: 3, Components: 7. Hard parts: Glyph LED path SVG animations, sub-pixel dot-matrix typography, WCAG AA contrast on dark acrylic. Size: S (clean-room executed).
