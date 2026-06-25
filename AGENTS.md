# Radynox-Draivra Agent Instructions

## Project Overview

Radynox-Draivra is a website project built with Astro v6 and Tailwind CSS v4.
It generates a static site focused on performance, accessibility, and SEO.

Stack: Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

## Quick Reference

| Command         | Purpose                             |
| --------------- | ----------------------------------- |
| npm run dev     | Start dev server at localhost:4321  |
| npm run build   | Production build to ./dist/         |
| npm run preview | Preview production build locally    |
| npm run check   | Run astro check + ESLint + Prettier |
| npm run fix     | Auto-fix ESLint + Prettier issues   |

Node.js requirement: >= 22.12.0

## Architecture

Key directories:

- src/components: shared and page widgets
- src/pages: route files
- src/data/post: markdown and MDX blog content
- src/layouts: page and markdown layouts
- src/utils: helper modules
- vendor/integration: custom config virtual module integration

## Config Module

Site config lives in src/config.yaml and is loaded as virtual module radynox-draivra:config.
Exports: SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS.

## Verification Checklist

1. npm run build succeeds.
2. npm run check passes.
3. Visual check for homepage, blog, dark mode, and mobile menu.
