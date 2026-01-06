# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Chinese) marketing website for Lynse AI 闪记卡 (MemoCard) - a smart Bluetooth recording device with AI transcription capabilities. The site is built as a React SPA with client-side routing.

## Technology Stack

- **React 18.3.1** with TypeScript and Vite 5.4.2
- **Tailwind CSS 3.4.1** with custom design system
- **Framer Motion 12.23.12** for animations
- **Nginx** as production web server
- **Docker** multi-stage builds for deployment

## Common Commands

### Development
```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Build for production (outputs to /dist)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Docker Deployment
```bash
docker-compose up --build -d    # Build and start container (port 8080:80)
docker-compose down             # Stop and remove containers
```

The production container includes health checks and exposes the app on port 8080.

## Architecture

### Routing
The app uses **client-side routing via `window.location.pathname`** in `App.tsx`. No routing library is used. Routes include:
- `/` - Main landing page with all sections
- `/download` - Download page
- `/about` - About Us page
- `/solutions` - Solutions page
- `/support/support-center.html` - Support Center
- `/support/quick-start` - Quick Start Guide

When adding new routes, update `App.tsx` to check `window.location.pathname` and render the appropriate component.

### Language System
Bilingual support is handled through:
1. **Language state** in `App.tsx`: `const [language, setLanguage] = useState<'en' | 'zh'>('zh')`
2. **Prop drilling**: Language prop is passed to all components
3. **Type signature**: All components accept `language: 'en' | 'zh'` prop
4. **Conditional rendering**: Components check `language === 'en' ? ... : ...` for content

No i18n library or context API is used. When adding bilingual text:
- Accept `language: 'en' | 'zh'` prop in component interface
- Use ternary operators for content: `language === 'en' ? 'English' : '中文'`

### Component Structure
- **`src/components/`** - Main page sections (HeroSection, ProductSection, FeaturesSection, etc.)
- **`src/components/ui/`** - Reusable UI components (DownloadPage, Link, BrandName, etc.)
- **`src/pages/`** - Full page components (QuickStartGuidePage, SupportCenterPage)

All components are functional components with TypeScript interfaces.

### Design System
Custom Tailwind configuration in `tailwind.config.js`:

**Colors:**
- `primary: #1A6DFF` (logo blue)
- `secondary: #19E0E6` (logo cyan)
- `mint: #00C4A7` (AI features)
- `lightblue: #F4F9FF` (backgrounds)
- `dark.*` (text hierarchy)

**Gradients:** Use `from-logo-blue to-logo-cyan` for CTAs

**Typography:** System font stack with defined weights and letter spacing

### Styling Approach
- **Global CSS files** in `/src`:
  - `index.css` - Base styles and Tailwind imports
  - `animations.css` - Custom animations
  - `typography.css` - Typography enhancements
- **Component styling** via Tailwind utility classes
- No CSS modules or styled-components

### Navigating Between Pages
Use the custom `Link` component from `src/components/ui/Link.tsx`:
```tsx
import { Link } from './ui/Link';
<Link href="/path">Text</Link>
```

## Build Output

- **Development:** Vite dev server with HMR
- **Production:** `/dist` directory (static files)
- **Docker:** Multi-stage build (Node 20 Alpine → Nginx Alpine)

## Nginx Configuration

The production server (`nginx.conf`) is configured for:
- SPA routing with `try_files $uri $uri/ /index.html`
- Gzip compression for text assets
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Static file serving from `/usr/share/nginx/html`

When adding API endpoints, uncomment and configure the `/api` location block.

## Special Files

- **`/public/.well-known/`** - Apple App Site Association for deep linking
- **`/public/images/`** - Static images including logo.png
- **`nginx.conf`** - Production web server configuration
- **`docker-compose.yml`** - Container orchestration with health checks

## Code Patterns

### Component Props
Always define TypeScript interfaces:
```tsx
interface ComponentNameProps {
  language: 'en' | 'zh';
  onLanguageChange?: (language: 'en' | 'zh') => void;
}

const ComponentName: FC<ComponentNameProps> = ({ language, onLanguageChange }) => {
  // ...
};
```

### State Management
- No global state management library
- Use React hooks (useState, useEffect, useCallback)
- Language state is top-level in App.tsx and passed down

### Performance
- Vite excludes `lucide-react` from optimization (see vite.config.ts)
- useCallback for event handlers that are dependencies
- Ref-based timers for cleanup (see Header.tsx for scroll debouncing pattern)

## Testing

No testing framework is currently configured. If adding tests, consider Vitest for unit testing and Playwright for E2E testing to maintain compatibility with Vite.
