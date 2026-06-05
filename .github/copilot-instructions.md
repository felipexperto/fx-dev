# fx-dev — Copilot Instructions

> For a thorough understanding of the project — pages, components, helpers, search feature, styling architecture, and planned features — read [PROJECT_CONTEXT.md](.github/PROJECT_CONTEXT.md).

fx-dev is a personal tech blog built with **Astro v5**, **Tailwind CSS v4**, and **TypeScript**. All code must be written in **English**.

## Stack

- **Framework**: Astro v5 (no React, Vue, or Svelte)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `@astrojs/tailwind`, no `tailwind.config.*`)
- **Language**: TypeScript (strict mode)
- **Package manager**: pnpm
- **Deploy**: Netlify via `@astrojs/netlify` adapter (SSR enabled)
- **Content**: Astro Content Layer API with Markdown files in `content/blog/`

## Project Structure

```
content/blog/          # Markdown posts (outside src/)
src/
  assets/icons/        # SVGs for astro-icon
  components/          # Reusable .astro components
  helpers/             # Business logic functions
  layouts/             # Page layouts
  pages/               # File-based routing
  styles/              # global.css, blogpost.css
  types/               # TypeScript types
  utils/               # Generic utilities
  content.config.ts    # Collection definitions
public/
astro.config.mjs
```

## Path Aliases

Always use these aliases (defined in `tsconfig.json`):

| Alias | Resolves to |
|---|---|
| `@assets/*` | `src/assets/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@styles/*` | `src/styles/*` |

## Key Conventions

- All components are `.astro` files — no UI framework components
- Business logic belongs in `src/helpers/`, generic utilities in `src/utils/`
- TypeScript types live in `src/types/`
- Use `getCollection()` and `render()` from `astro:content` — never `Astro.glob()`
- Format code with Prettier (`prettier-plugin-astro` included)
- Dark mode is toggled via the `.dark` class on `<html>`
- Use `astro-icon` for all SVG icons

## Planning Sessions

Whenever the user is planning a feature, refactor, or any multi-step task, **always create a plan file** at `.github/plans/<kebab-case-topic>.md` before starting work.

The plan file must include:
- **Goal**: what needs to be achieved
- **Context**: relevant files, current behavior, and constraints
- **Steps**: ordered list of tasks with enough detail to resume in a new chat
- **Decisions**: trade-offs considered and the chosen approach
- **Status**: current progress (e.g., `[ ]` not started, `[x]` done, `[-]` in progress)

This ensures context is preserved across chat sessions. When resuming work, read the plan file first.

---

# Primary Objective

Implement the requested change with:

1. Minimum code changes
2. Maximum correctness
3. Maximum reuse of existing code
4. Minimum token consumption
5. Zero architectural degradation

---

# Decision Hierarchy

When tradeoffs exist, follow this order:

1. Correctness
2. Existing Architecture
3. Existing Conventions
4. Simplicity
5. Token Efficiency
6. New Abstractions

Never sacrifice higher priorities for lower ones.

---

# Change Strategy

Before writing code:

1. Identify the exact files that require modification.
2. Trace the execution flow affected by the request.
3. Determine the smallest possible implementation.
4. Reuse existing services, utilities, hooks, repositories, and components whenever possible.
5. Do not introduce abstractions unless duplication already exists or is clearly imminent.

---

# Token Efficiency Rules

### Required

* Modify only files directly involved in the request.
* Show only changed sections whenever possible.
* Preserve untouched code.
* Avoid repeating existing code for context.
* Avoid verbose explanations.

### Forbidden

* Rewriting entire files unnecessarily.
* Reformatting unrelated code.
* Renaming symbols without necessity.
* Moving files without necessity.
* Generating large code blocks for small changes.

---

# Architecture Protection Rules

### Forbidden

* Bypassing service layers.
* Bypassing repositories.
* Duplicating business logic.
* Introducing hidden side effects.
* Mixing infrastructure concerns with domain logic.

### Required

* Respect existing architectural boundaries.
* Keep dependency direction unchanged.
* Maintain separation of concerns.

---

# TypeScript Standards

### Required

* Strict typing.
* No implicit any.
* Explicit return types for public APIs.
* Exhaustive handling of discriminated unions.
* Proper null/undefined handling.

### Forbidden

* any
* @ts-ignore
* @ts-expect-error without justification
* Unsafe type assertions

---

# Dependency Rules

Before adding a dependency:

1. Verify the feature cannot be implemented with existing dependencies.
2. Verify the runtime benefit outweighs maintenance cost.
3. Prefer platform-native APIs.

Never introduce a package that duplicates existing functionality.

---

# Testing Policy

If test infrastructure exists:

1. Run impacted tests.
2. Run type checking.
3. Run linting when available.

Suggested order:

```bash
npm run test
npm run prettier:fix
```

If failures occur:

1. Analyze root cause.
2. Fix code.
3. Re-run validations.

Never modify tests merely to make failures disappear unless the request explicitly requires updating test behavior.

---

# Definition of Done

A task is complete only when:

* Requested behavior is implemented.
* Existing behavior remains unchanged.
* Type checks pass.
* Relevant tests pass.
* No architectural rules were violated.
* No dead code remains.
* No unnecessary dependencies were introduced.

---

# Output Rules

Unless explicitly requested otherwise:

* If a prompt is ambiguous or the scope is unclear, **ask before acting**. Do not make assumptions about intent or silently pick an approach. A short clarifying question upfront is ALWAYS better than implementing the wrong thing.
* Then return only the necessary code changes.
* Do not provide tutorials.
* Do not explain obvious code.
* Do not generate implementation alternatives.
* Do not include marketing-style commentary.

Be concise, precise, and implementation-focused.