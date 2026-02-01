# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Architecture

This is a personal portfolio website for Charles Jeandey built with Nuxt 4.

### Tech Stack
- **Nuxt 4** - Vue.js meta-framework
- **Tailwind CSS v4** - Using `@tailwindcss/postcss` plugin with `@import "tailwindcss"` syntax
- **@heroicons/vue** - Icon library
- **@nuxtjs/seo** - SEO module with site configuration in `nuxt.config.ts`
- **nuxt-gtag** - Google Analytics integration

### Project Structure
- `pages/index.vue` - Single-page portfolio with work showcase items
- `components/WorkCard.vue` - Reusable card component for portfolio items
- `components/logos/` - SVG logo components (Laravel, Tailwindcss, Vuejs)
- `layouts/default.vue` - Base layout wrapper
- `assets/css/main.css` - Tailwind CSS entry point

### Key Patterns
- Portfolio work items are defined as an array in `pages/index.vue` with gradient styling props
- Components use Vue 3 Composition API with `<script setup>`
- Tailwind uses v4 linear gradient syntax: `bg-linear-to-r` instead of `bg-gradient-to-r`
