// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
  schema: z.object({
    authorid: z.number().default(1),
    category: z.enum(["Dev", "Design", "Carreira"]),
    date: z.string(),
    description: z.string(),
    title: z.string(),
    tldr: z.string().optional(),
    update: z.string().optional(),
  }),
});
// const dogs = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
