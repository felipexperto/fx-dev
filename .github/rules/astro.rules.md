---
description: Rules and conventions for the fx-dev project, a personal blog built with Astro v5, Tailwind CSS v4, and TypeScript.
globs: ["**/*.astro", "**/*.ts", "**/*.tsx", "astro.config.mjs", "src/content.config.ts"]
alwaysApply: true
---

# Astro — fx-dev

You are an expert in TypeScript and the Astro framework for scalable, high-performance web development.

## Principles

- Write concise, technical responses with accurate Astro examples.
- Prioritize static generation and minimize client-side JavaScript.
- Use descriptive variable names and follow Astro's naming conventions.
- Organize files using Astro's file-based routing system.

## Project Structure

```
content/
  blog/           # Markdown posts (outside src/)
src/
  assets/
    icons/        # SVGs consumed by astro-icon
  components/     # Reusable .astro components
  helpers/        # Helper functions with business logic
  layouts/        # Page layouts (Default.astro, BlogPost.astro)
  pages/          # File-based routing
  styles/         # global.css, blogpost.css
  types/          # TypeScript types
  utils/          # Generic utilities without business logic
  content.config.ts  # Content collections definition
public/
astro.config.mjs
```

### Path Aliases

`tsconfig.json` defines the following aliases — always use them:

- `@assets/*` → `src/assets/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

## Components

- Create `.astro` files for all components. This project does not use React, Vue, or Svelte.
- Pass data between components via `Astro.props`.
- The `<Markdown />` component was removed in Astro v3+ — do not use it.
- Use `astro-icon` for SVG icons, consuming files from `src/assets/icons/`.

## Routing and Pages

- Routing is file-based inside `src/pages/`.
- Dynamic routes use the `[id].astro` syntax (not `[...slug].astro`).
- Use `getStaticPaths()` for static generation of dynamic routes.
- Implement 404 handling with `src/pages/404.astro`.

## Content Collections (Astro v5 — Content Layer API)

- Collections are defined in `src/content.config.ts` using the `defineCollection` API with a `glob` loader.
- Content files live in `content/blog/` (outside `src/`).
- Use `getCollection('blog')` to fetch posts — do not use `Astro.glob()` (deprecated in Astro v5).
- Use `render(post)` to render a post's content.
- The `blog` collection schema is:
  ```ts
  z.object({
    authorid: z.number().default(1),
    category: z.enum(["Dev", "Design", "Carreira"]),
    date: z.string(),
    description: z.string(),
    title: z.string(),
    tldr: z.string().optional(),
    update: z.string().optional(),
  })
  ```

## Styling with Tailwind CSS v4

- This project uses **Tailwind CSS v4** via the `@tailwindcss/vite` plugin — it does **not** use `@astrojs/tailwind`.
- There is **no `tailwind.config.cjs` or `tailwind.config.js`** — configuration is done via CSS.
- The theme is defined directly in `src/styles/global.css` using the `@theme {}` directive.
- Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))` — toggled by the `.dark` class on `<html>`.
- Use Tailwind utility classes in all `.astro` components.
- Never use the `@apply` directive.
- Use Tailwind's responsive utilities: `sm:`, `md:`, `lg:`, etc.

## Performance

- Minimize client-side JavaScript — leverage Astro's static generation.
- Use `client:*` directives judiciously for partial hydration:
  - `client:load` for immediately needed interactivity
  - `client:idle` for non-critical interactivity
  - `client:visible` for components that should hydrate when entering the viewport
- Use lazy loading for images and heavy assets.
- Use Astro's `<Image />` component for optimized image delivery.

## SEO and Meta Tags

- Use Astro's `<head>` tag to add meta information.
- The `DefaultHeadTags.astro` component centralizes all meta tags (OG, description, title, etc.) — reuse it in layouts.
- Implement canonical URLs for proper SEO.

## Active Integrations

- `@astrojs/netlify` — adapter for Netlify deployment (SSR enabled).
- `@astrojs/partytown` — offloads third-party scripts (e.g., GTM) to web workers.
- `@astrojs/rss` — RSS feed generation.
- `astro-icon` — SVG icons via `src/assets/icons/`.
- `sharp` — image optimization at build time.

## Build and Deploy

- Package manager: **pnpm**.
- Build: `pnpm build` (`astro check && astro build`).
- Deploy: **Netlify** via `@astrojs/netlify` adapter.
- Environment variables must follow the `PUBLIC_*` prefix to be exposed on the client.

## Accessibility

- Ensure proper semantic HTML structure in all Astro components.
- Implement ARIA attributes where necessary.
- Ensure keyboard navigation support for interactive elements.

## Conventions

1. Use TypeScript in all `.ts` files and in `.astro` frontmatter.
2. Use `tsconfig.json` in `strict` mode.
3. Format code with Prettier (`prettier-plugin-astro` included).
4. Keep business logic in `src/helpers/` and generic utilities in `src/utils/`.
5. TypeScript types go in `src/types/`.

  Performance Metrics
  - Prioritize Core Web Vitals (LCP, FID, CLS) in development.
  - Use Lighthouse and WebPageTest for performance auditing.
  - Implement performance budgets and monitoring.

  Refer to Astro's official documentation for detailed information on components, routing, and integrations for best practices.