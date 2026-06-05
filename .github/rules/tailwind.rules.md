---
description: Tailwind CSS v4 conventions for fx-dev — theme tokens, dark mode, and utility usage patterns.
globs: ["**/*.astro", "src/styles/**/*.css"]
alwaysApply: true
---

# Tailwind CSS v4 — fx-dev

## Setup

This project uses **Tailwind CSS v4** via the `@tailwindcss/vite` Vite plugin.

- Do **not** use `@astrojs/tailwind` — it is the v3 Astro integration and is not installed.
- There is **no `tailwind.config.js` or `tailwind.config.cjs`** — all configuration is done in CSS.
- The entry point is `src/styles/global.css`, which is imported in each layout.

## Theme Configuration

The theme is defined in `src/styles/global.css` using the `@theme {}` directive. Always extend the theme here, never in a JS config file.

Current design tokens:

```css
@theme {
  --color-abyss-500: oklch(0.32 0.02 264.22); /* Primary dark background */
  --font-bold: 700;
  --font-medium: 500;
  --font-code: "Fira Code", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace, "sans-serif";
  --font-sans: "Fira Sans", Ubuntu, "sans-serif";
}
```

Reference tokens in components using Tailwind utilities (e.g., `bg-abyss-500`, `font-(--font-bold)`).

## Dark Mode

Dark mode is controlled by the `.dark` class on `<html>`, toggled by `src/utils/theme.ts`.

The custom variant is declared in `global.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

- Use `dark:` prefix for dark mode variants in components: `class="bg-white dark:bg-abyss-500"`.
- In plain CSS (e.g., `blogpost.css`), use `.dark` selector directly: `.dark h2 { ... }`.
- Do **not** use `media: prefers-color-scheme` — the toggle is class-based only.

## Utility Usage

- Use Tailwind utility classes in all `.astro` component markup.
- Never use the `@apply` directive.
- Use responsive utilities as needed: `sm:`, `md:`, `lg:`, `xl:`.
- Use `font-(--font-bold)` and `font-(--font-medium)` to reference custom font-weight tokens.

## Scoped vs Global Styles

- Tailwind utilities go in component markup via `class=""`.
- Blog post prose styles (headings, paragraphs, code blocks) live in `src/styles/blogpost.css` and are imported only in `BlogPost.astro` layout.
- Avoid scoped `<style>` blocks in `.astro` files unless absolutely necessary (e.g., `ThemeToggle.astro` icon visibility).
