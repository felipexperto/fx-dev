---
description: TypeScript conventions for fx-dev — types location, naming, Astro-specific patterns, and what to avoid.
globs: ["**/*.ts", "**/*.astro"]
alwaysApply: true
---

# TypeScript — fx-dev

## Configuration

- The project uses `"extends": "astro/tsconfigs/strict"` — strict mode is always on.
- Do not relax compiler options (no `"strict": false`, no `"noImplicitAny": false`).
- Path aliases are defined in `tsconfig.json` — always use `@components/*`, `@layouts/*`, `@assets/*`, `@styles/*` instead of relative paths when crossing directory boundaries.

## File Organization

| Location | Purpose |
|---|---|
| `src/types/` | Shared TypeScript types and interfaces |
| `src/helpers/` | Functions with business logic (typed inputs and outputs) |
| `src/utils/` | Generic, reusable utilities without business logic |

## Types and Interfaces

- Prefer `type` over `interface` for object shapes in this project.
- Shared types go in `src/types/` — never co-locate types that are used across multiple files.
- Use `import type` when importing types to avoid runtime overhead.

```ts
// Correct
import type { PostProps } from '../types/blog';

// Avoid
import { PostProps } from '../types/blog';
```

## Astro Content Collection Types

Use `CollectionEntry` from `astro:content` to type blog posts:

```ts
import type { CollectionEntry } from 'astro:content';

export type PostProps = CollectionEntry<'blog'>;
```

- `post.data` contains the frontmatter fields validated by the Zod schema in `content.config.ts`.
- `post.id` is the post's folder name (slug).
- `post.body` contains the raw Markdown string.

## Astro Component Frontmatter

- Type `Astro.props` explicitly in every component that receives props.
- Use destructuring with defaults where applicable.

```ts
// In .astro frontmatter
const {
  pageTitle = 'Home',
  pageDescription = '',
} = Astro.props;
```

## What to Avoid

- Do not use `any` — use `unknown` and narrow the type, or define a proper type.
- Do not cast with `as SomeType` unless consuming a DOM API that requires it (e.g., `getElementById` results).
- Do not use `Astro.glob()` — it is deprecated in Astro v5. Use `getCollection()` instead.
- Do not define types inline in function signatures if the type is reused elsewhere.
