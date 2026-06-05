# fx-dev — Project Context

This document provides deep context about the fx-dev project for AI assistants. Read this before working on any feature or refactor.

---

## Purpose and Goals

fx-dev is a **personal tech blog** by Felipe Marciano ([@felipexperto](https://github.com/felipexperto)). The site is live at [fx.dev.br](https://www.fx.dev.br).

Core principles (in priority order):

1. **Content first** — the blog exists to document solutions and share knowledge with other developers.
2. **Performance** — pages must be lightweight, fast-loading, and score well on Web Vitals.
3. **Simplicity** — the interface and the code must be simple and accessible.
4. **Frugality** — the site runs on Netlify's free tier, which has build time and bandwidth quotas. This means: few images, minimal JavaScript, no animations, and as few third-party scripts as possible.
5. **Fast builds** — follows the [10-minute build](https://www.jamesshore.com/v2/books/aoad1/ten_minute_build) practice.

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Astro v5 | No React, Vue, or Svelte |
| Styling | Tailwind CSS v4 | Via `@tailwindcss/vite`; no `tailwind.config.*` |
| Language | TypeScript | Strict mode |
| Package manager | pnpm | Node version defined in `.nvmrc` |
| Deployment | Netlify | Via `@astrojs/netlify` adapter (SSR) |
| Analytics | Google Tag Manager | ID: `GTM-M78LWT2`, offloaded via Partytown |
| Search | Fuse.js | Client-side fuzzy search |
| Icons | astro-icon | SVGs in `src/assets/icons/` |
| Fonts | @fontsource | Fira Sans (body) + Fira Code (code) |

---

## Site Structure

### Pages

| File | URL | Description |
|---|---|---|
| `src/pages/index.astro` | `/` | Homepage: post list + live search |
| `src/pages/[id].astro` | `/:postId` | Individual blog post |
| `src/pages/rss.xml.js` | `/rss.xml` | RSS feed for all posts |

### Layouts

| File | Used by | Imports |
|---|---|---|
| `src/layouts/Default.astro` | Homepage | `global.css` |
| `src/layouts/BlogPost.astro` | Blog post page | `global.css` + `blogpost.css` |

Both layouts share the same structure: `DefaultHeadTags` in `<head>`, `GtmIframe` + `Header > NavigationBar` in `<body>`, and a `<slot />` for page content.

### Components

| Component | Description |
|---|---|
| `Container.astro` | Max-width wrapper (`max-w-2xl`, centered, `px-4`). Accepts `classNames?: string[]` prop. |
| `DefaultHeadTags.astro` | All `<head>` content: charset, viewport, SEO meta, Open Graph tags, favicon, fonts (via `@fontsource`), and GTM script. |
| `GtmScript.astro` | Google Tag Manager `<script>` tag. Runs in a web worker via Partytown. |
| `GtmIframe.astro` | GTM `<noscript>` iframe fallback. Placed at the start of `<body>`. |
| `Header.astro` | Full-width `<header>` wrapping `Container` with a `<slot />` for nav content. |
| `NavigationBar.astro` | `<nav>` with logo (SVG via astro-icon), author photo (links to LinkedIn), and `ThemeToggle`. |
| `ThemeToggle.astro` | Button to toggle dark/light mode. Shows sun icon in dark mode, moon icon in light mode. |

### `DefaultHeadTags.astro` Props

| Prop | Default | Description |
|---|---|---|
| `pageDescription` | `''` | Meta description and OG description |
| `pageImage` | `'/blog-cover.png'` | OG image URL |
| `pageTitle` | `''` | `<title>` and OG title |
| `pageType` | `'website'` | OG type (`website` or `article`) |
| `pageUrl` | `''` | Canonical URL and OG URL |

The title pattern used in layouts is `"${pageTitle} | FX Dev"`.

---

## Content

### Blog Collection

- **Definition**: `src/content.config.ts`
- **Files**: `content/blog/<post-folder>/index.md` — outside `src/`
- **Post ID**: the folder name (e.g., `docker-cheatsheet`)
- **Post URL**: `https://www.fx.dev.br/<post-id>`

### Frontmatter Schema

```ts
z.object({
  authorid:    z.number().default(1),
  category:    z.enum(["Dev", "Design", "Carreira"]),
  date:        z.string(),          // UTC date string
  description: z.string(),
  title:       z.string(),
  tldr:        z.string().optional(), // HTML string rendered via set:html
  update:      z.string().optional(),
})
```

- `tldr` is rendered as raw HTML using `set:html` inside a `<div id="tldr">` — it can contain markup.
- `update` is available but not yet rendered in the post layout.
- There is no `image` field in the schema; `pageImage` in `BlogPost.astro` falls back to `DefaultHeadTags` default.

### Content Categories

- `Dev` — development, code, tools
- `Design` — typography, visual design
- `Carreira` — career, freelance, soft skills

---

## Business Logic (`src/helpers/`)

Business logic is grouped by domain. `blog.ts` centralises all blog-related operations: date formatting in Brazilian Portuguese, sorting posts by date, building the client-side search index, and all DOM manipulation logic for the search feature (filtering, toggling visibility, handling keyboard events).

---

## Generic Utilities (`src/utils/`)

Contains generic, reusable functions with no business logic. Currently covers debounce (used in the search input) and theme management (reading, applying, and toggling dark/light mode via `localStorage` and the `.dark` class on `<html>`).

---

## Styling Architecture

### `src/styles/global.css`

Applied to every page via both layouts.

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-abyss-500: oklch(0.32 0.02 264.22); /* Deep navy — primary dark bg */
  --font-bold: 700;
  --font-medium: 500;
  --font-code: "Fira Code", ...;
  --font-sans: "Fira Sans", ...;
}
```

Light mode base color: `--color-abyss-500` on `bg-slate-100`.
Dark mode base color: `--color-gray-50` on `bg-abyss-500`.

### `src/styles/blogpost.css`

Applied only in `BlogPost.astro` layout for Markdown prose rendering. Styles headings, paragraphs, lists, inline code, code blocks, tables, blockquotes, images, and `#tldr`.

Heading accent colors: `--color-yellow-600` (light) / `--color-yellow-300` (dark).
Inline code: `--color-yellow-800` on `--color-slate-200` background (light) / `--color-abyss-500` on `--color-yellow-300` (dark).

### Dark Mode

- Toggled by the `.dark` class on `<html>`.
- State persisted in `localStorage` under the key `"theme"`.
- First visit: respects `prefers-color-scheme`.
- Uses `@custom-variant dark` — not `@media (prefers-color-scheme: dark)`.

---

## Search Feature (Homepage)

The homepage has a **client-side fuzzy search** powered by Fuse.js.

**Flow:**
1. At build time, `createSearchIndex(posts)` generates a lightweight JSON index (id, title, description, first 300 words of body).
2. The index is embedded in the HTML as `<script type="application/json" id="blog-posts-json">`.
3. On the client, the script reads the JSON and initialises Fuse.js (`initFuse`).
4. The search `<input>` listens to `input` events with a 300ms debounce.
5. Queries shorter than 3 characters show all posts.
6. Fuse results filter the post `<li>` elements by toggling the `hidden` class.
7. If no results are found, `#search-alert` (`aria-live="polite"`) is shown.

---

## Assets

- SVG icons live in `src/assets/icons/` and are consumed by `astro-icon`. The icon name passed to `<Icon name="...">` matches the SVG filename without extension.
- Static images (e.g., author photo) live in `src/assets/` and are imported directly in components.

---

## Analytics (GTM + Partytown)

- GTM ID: `GTM-M78LWT2`
- `GtmScript.astro` contains the GTM inline script. Partytown offloads it to a web worker, keeping the main thread free.
- `GtmIframe.astro` is the noscript fallback. It must be placed immediately after the opening `<body>` tag — both layouts already do this correctly.

---

## Planned Features (from `TODO.md`)

| Feature | Status | Notes |
|---|---|---|
| Filter by category | Not started | Chips below the search input on homepage |
| Custom 404 page | Not started | `src/pages/404.astro` |
| Skip to content link | Not started | Accessibility improvement |
| Pagination / infinite scroll | Not started | When post count exceeds ~50 |
| Astro view transitions | Research | Evaluate fit |

---

## Author

- **Name**: Felipe Marciano
- **GitHub**: [felipexperto](https://github.com/felipexperto)
- **LinkedIn**: [felipexperto](https://www.linkedin.com/in/felipexperto/)
- **Email**: felipexperto@gmail.com
