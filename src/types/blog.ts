import type { CollectionEntry } from "astro:content";

export type PostProps = CollectionEntry<'blog'>;

export type PostRenderedProps = {
  body: string[] | undefined;
  description: string;
  id: string;
  title: string;
}
