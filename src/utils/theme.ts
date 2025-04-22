export const getTheme = () => {
  const themeOptions = ['dark', 'light'];
  const localStorageTheme = localStorage?.getItem('theme') ?? '';

  if (themeOptions.includes(localStorageTheme)) {
    return localStorageTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const setTheme = (theme: string) => {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);
};

export const switchTheme = () => {
  const element = document.documentElement;
  element.classList.toggle('dark');

  const isDark = element.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
