---
description: Accessibility conventions for fx-dev — semantic HTML, ARIA, keyboard navigation, and color contrast guidelines.
applyTo: "**/*.astro"
---

# Accessibility — fx-dev

## Semantic HTML

- Use the correct HTML element for each purpose — do not use `<div>` or `<span>` where a semantic element exists.
- Page structure must include `<header>`, `<main>`, and `<footer>` where applicable.
- Use heading levels in order (`h1` → `h2` → `h3`) — never skip levels for visual effect.
- Each page must have exactly one `<h1>`.

## Interactive Elements

- Use native HTML elements for interactivity (`<button>`, `<a>`, `<input>`) — do not attach click handlers to `<div>` or `<span>`.
- Every `<button>` must have a visible label or an `aria-label` when icon-only (see `ThemeToggle.astro`).
- Every `<a>` must have descriptive text — avoid "click here" or "read more" without context.
- Use `type="button"` on all `<button>` elements not inside a `<form>` to prevent accidental form submission.

## ARIA

- Only add ARIA when native HTML semantics are insufficient.
- Use `aria-label` for icon-only buttons: `aria-label="Toggle light and dark theme"`.
- Use `aria-live="polite"` for dynamically updated regions (e.g., search results alert in `index.astro`).
- Use `role="alert"` for error or status messages that must be announced immediately.
- Never use `aria-hidden="true"` on focusable elements.

## Keyboard Navigation

- All interactive elements must be reachable and operable via keyboard (`Tab`, `Enter`, `Space`).
- Visible focus styles must never be removed — do not use `outline: none` without a replacement.
- Modals and dialogs (if added in the future) must trap focus while open and restore it on close.

## Images

- Every `<img>` and Astro `<Image />` must have an `alt` attribute.
- Decorative images use `alt=""`.
- Informative images describe their content concisely.

## Color and Contrast

The project's color tokens must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text):

- Light mode text: `--color-abyss-500` (`oklch(0.32 0.02 264.22)`) on `bg-slate-100` — verify contrast when adding new color combinations.
- Dark mode text: `--color-gray-50` on `--color-abyss-500` background.
- Heading accent color in blog posts: `--color-yellow-600` (light) / `--color-yellow-300` (dark) — do not use these colors for body text at small sizes.
- Do not convey information through color alone — always pair with text or icons.

## Forms

- Every `<input>` must have an associated `<label>` (via `for`/`id` or wrapping).
- Use `placeholder` only as a hint, never as a replacement for a label.
- Error messages must be associated with their field via `aria-describedby`.
