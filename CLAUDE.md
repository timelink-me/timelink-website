# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Think and Research in English and Response always in Chinese.

Use the Sequential Thinking MCP server and show step-by-step reasoning in all responses.

Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without me having to explicitly ask.

## Development Commands

**Development:**

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run export` - Build and export static files
- `npm start` - Start production server
- `npm run lint` - Run ESLint

**Important Note:** Always run `npm run lint` after making code changes to ensure code quality and consistency.

## Project Architecture

This is a Next.js 15 project using the App Router pattern, configured for static export with SSG. The application is a marketing website for TimeLink, a timeline creation tool.

### Key Architecture Patterns

**Static Export Configuration:**

- Configured in `next.config.ts` with `output: 'export'` and `trailingSlash: true`
- Images are unoptimized for static hosting compatibility (`unoptimized: true`)
- Build outputs to `/out` directory for static hosting

**Multi-language Support:**

- `LanguageContext` provides translation functionality via React Context
- Translations stored in `src/lib/translations.ts` supporting English (`en`) and Chinese (`zh`)
- Uses `useLanguage()` hook to access current language and translations
- Translation keys are strongly typed using TypeScript

**Theme System:**

- `ThemeContext` implements light/dark mode toggle with localStorage persistence
- Supports 'light', 'dark', and 'system' theme options
- Automatically detects system theme preference on first visit
- Uses Tailwind CSS dark mode classes with `resolvedTheme` for actual applied theme
- Listens for system theme changes when in 'system' mode

**Component Structure:**

- Page components in `src/app/` (App Router)
- Reusable components in `src/components/`
- Context providers in `src/contexts/`
- Utilities and translations in `src/lib/`

### Technology Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **Styling:** Tailwind CSS v4 with PostCSS plugin
- **Icons:** Lucide React
- **Fonts:** Geist Sans and Geist Mono (Google Fonts)
- **TypeScript:** Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Linting:** ESLint with Next.js and TypeScript configurations

### Context Providers

The app is wrapped with nested providers in `layout.tsx`:

1. `ThemeProvider` - Manages light/dark theme state
2. `LanguageProvider` - Manages translation state and current language

Both contexts must be used within their respective providers and will throw errors if used outside.
