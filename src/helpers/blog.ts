import type { PostProps } from '../types/blog';

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

export function createSearchIndex(posts: PostProps[]) {
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
