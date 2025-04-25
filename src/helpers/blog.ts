import Fuse from 'fuse.js';

import type { PostProps, PostRenderedProps } from '../types/blog';

export function formatPostDate(utcDate: string) {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const fullDate = new Date(utcDate);
  const day = fullDate.getUTCDate();
  const month = months[fullDate.getUTCMonth()];
  const year = fullDate.getUTCFullYear();

  return `${day} ${month}, ${year}`;
}

export function sortPostsByDate(posts: PostProps[]) {
  return posts.sort(
    (a, b) => new Date(b.data?.date) - new Date(a.data?.date)
  );
}

export function createSearchIndex(posts: PostProps[]): PostRenderedProps[] {
  const searchIndex = Object.values(posts).map((post) => {
    const { data, id, body } = post;
    const { description, title } = data || {};
    const searchItem = {
      id,
      description,
      title,
      body: body?.split(' ').slice(0, 300),
    };
    return searchItem;
  }, []);

  return searchIndex;
}

type DisplayActionProps = 'hide' | 'show';
type updatePostListProps = {
  event: Event;
  allPosts: HTMLElement[];
  postListElement: HTMLElement;
  searchAlert: HTMLElement;
  fuse: any;
}
type fuseFilteresResultsProps = {
  item: PostRenderedProps;
}

export function initFuse(searchIndex: string) {
  try {
    return new Fuse(JSON.parse(searchIndex), {
      keys: ['title', 'description', 'body'],
      threshold: 0.2,
    });
  } catch (error) {
    console.error('Error initializing Fuse:', error);
  }
}

export function toggleDisplay(action: DisplayActionProps = 'hide'): (item: HTMLElement) => void {
  const CLASSLIST_METHOD = {
    hide: (item: HTMLElement) => item.classList.add('hidden'),
    show: (item: HTMLElement) => item.classList.remove('hidden'),
  };
  return CLASSLIST_METHOD[action];
}

export function toggleAllPosts(action: DisplayActionProps = 'hide', elements: HTMLElement[]) {
  elements.forEach((post) => toggleDisplay(action)(post));
}

export function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault();
    return;
  };
}

export function updatePostList({ event, allPosts, searchAlert, postListElement, fuse }: updatePostListProps) {
  const inputValue = (event.target as HTMLInputElement).value.trim();

  if (inputValue.length < 3) {
    toggleAllPosts('show', allPosts);
    return;
  }

  if (!fuse) {
    console.error('Fuse.js não foi inicializado');
    toggleAllPosts('show', allPosts);
    return;
  }

  if (!searchAlert || !postListElement) return;

  const results: fuseFilteresResultsProps[] = fuse.search(inputValue);

  if (results.length) {
    toggleDisplay('hide')(searchAlert);
    toggleAllPosts('hide', allPosts);
    results.map((post) => {
      postListElement.querySelector(`#${post.item.id}`)?.classList.remove('hidden');
    });
  } else {
    toggleAllPosts('hide', allPosts);
    toggleDisplay('show')(searchAlert);
  }
}
