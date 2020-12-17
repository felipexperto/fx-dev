export const isHome = () => typeof window !== 'undefined'
  ? !!(window.location.pathname === '/')
  : false;

export const getNumberOfCardsFromScreenWidth = (screenWidth, sizes) => {
  if (screenWidth < sizes.sm) return 1;
  if (screenWidth < sizes.xl) return 2;
  return 3;
};
