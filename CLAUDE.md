# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lynse AI (灵光记/Spark Card) is a bilingual (English/Chinese) marketing website for an AI-powered Bluetooth recording device. The site is a React SPA with client-side routing, optimized for performance and global accessibility.

**Key Tech Stack:**
- React 18 + TypeScript + Vite
- TailwindCSS (custom design system inspired by Notion)
- Framer Motion (animations)
- Lenis (smooth scrolling, desktop only)
- Express.js (email subscription API)

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run build           # Production build to dist/
npm run preview         # Preview production build locally

# Server (email subscription API)
npm run server          # Start Express server on port 3001
npm run dev:all         # Build and start server together

# Utilities
./build.sh              # Clean build with bundle analysis
npm run lint            # ESLint check
```

**Bundle Analysis:** After `npm run build`, open `dist/stats.html` for a visual breakdown of bundle sizes and dependencies.

## Architecture

### Client-Side Routing

The app uses custom client-side routing (not React Router). Routes are defined in `App.tsx`:

- `/` - Home page (HeroSection)
- `/download` - App download page (lazy-loaded)
- `/sparkcard` - Product details (maintenance placeholder)
- `/about` - About page (maintenance placeholder)
- `/SupportCenterPage` - Support center (maintenance placeholder)

**Navigation:** Use the `navigate` callback prop passed to Header and Footer. The Link component (`src/components/ui/Link.tsx`) handles client-side navigation with proper event handling.

### Language Detection

The site supports 4 languages with automatic detection:
1. Checks localStorage for saved preference (`lynse-lang`)
2. Falls back to IP geolocation via `ipapi.co/json/` (async)
3. Final fallback to browser language

**Supported Languages:** `en`, `zh`, `zh-TW`, `ja`

### Content Structure

**Constants & Translations:** All UI text lives in `src/data/constants.tsx` as `MultiLangText` objects (Record<Language, string>). Use the `t()` helper for retrieval.

**Component Organization:**
- `src/components/home/` - Landing page sections (Hero, ValuePropStrip, UseCases, etc.)
- `src/components/ui/` - Reusable UI components (DownloadButtons, OrderButton, GridParticles)
- `src/components/` - Page-level components (Header, Footer, AboutUsPage)
- `src/pages/` - Standalone pages (MaintenancePage, SupportCenterPage)

### Performance Optimization

**Code Splitting:**
- React ecosystem bundled as `react-vendor` chunk
- Leafify (maps) lazy-loaded as separate `leaflet` chunk
- Download page is lazy-loaded with React.Suspense

**Build Optimizations:**
- Terser minification with console removal
- Image optimization via vite-plugin-imagemin
- Manual chunk splitting for vendor libraries
- Bundle size warning limit: 500KB

### Smooth Scrolling

Lenis smooth scrolling is enabled **desktop only** (disabled on mobile and for `prefers-reduced-motion` users). Configured with custom easing in `App.tsx`.

## Design System

The design system follows Notion-inspired minimalism. Key principles:

**Colors:**
- Primary text: `rgba(0,0,0,0.95)` (warm near-black, not pure black)
- Backgrounds: Pure white (`#ffffff`) and warm white (`#f6f5f4`)
- Accent: Notion Blue (`#0075de`) for CTAs and links
- Borders: Ultra-thin `1px solid rgba(0,0,0,0.1)` (whisper borders)

**Typography:**
- Font family: Inter (with system fallbacks)
- Display sizes (64px): aggressive negative letter-spacing (-2.125px)
- Four-weight system: 400 (body), 500 (UI), 600 (emphasis), 700 (headings)
- Tight line-height at large sizes (1.00-1.04), relaxed at body (1.50)

**Shadows:** Multi-layer stacks with cumulative opacity ≤0.05

**Radius Scale:** 4px (buttons/inputs), 12px (cards), 16px (featured), 9999px (pills)

See `DESIGN.md` for complete design system documentation.

## Server & Email Subscription

The Express server (`server.js`) handles:
- Newsletter subscription via `/api/subscribe`
- Health check at `/api/health`
- SPA routing fallback for all other routes

**Email Service Configuration:**
Supports Gmail, QQ Mail, 163 Mail, or custom SMTP. Configure via `.env`:

```bash
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # App-specific password for Gmail
EMAIL_FROM="Lynse AI Website <your-email@gmail.com>"
NOTIFICATION_EMAIL=destination@example.com
```

**Note:** Gmail requires an [App Password](https://support.google.com/accounts/answer/185833) for 2FA accounts.

## Mobile Optimization

- Smooth scrolling disabled on mobile for performance
- Header collapses to hamburger menu below 768px
- Lenis skipped on mobile widths (<767px)
- Touch targets: minimum 44x44px for interactive elements

## Adding New Content

**For new UI text:**
1. Add `MultiLangText` entry to `src/data/constants.tsx`
2. Use `t(textObject, language)` in components
3. Pass `language` prop through component tree

**For new routes:**
1. Add route to `Route` type in `App.tsx`
2. Add entry to `validRoutes` object in `navigate` callback
3. Handle route in page content rendering logic

**For new components:**
- Place in appropriate directory (home/, ui/, or pages/)
- Follow existing patterns for TypeScript interfaces
- Use Framer Motion's `MotionConfig` wrapper for animations

## Testing Considerations

When making changes:
1. Test language switching (check localStorage persistence)
2. Verify mobile/desktop responsive behavior
3. Check bundle size impact via `dist/stats.html` after build
4. Ensure smooth scrolling works on desktop, is disabled on mobile
5. Test navigation with browser back/forward buttons

## Known Limitations

- `/sparkcard`, `/about`, and `/SupportCenterPage` routes show maintenance placeholder
- Download page route exists but home page defaults to `/` (TODO in App.tsx line 57)
- IP geolocation is async; language may flicker on first load if no saved preference
