export const isHome = () =>
  typeof window !== 'undefined' ? !!(window.location.pathname === '/') : false;
