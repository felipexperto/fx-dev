const colors = {
  white: '#fff',
  black: '#000',
  almostblack: '#111',
  red: '#ff040d',
  transparent: 'transparent',
  yellow: '#f4da12',
  darkyellow: '#f4bc12',
  almostwhite: '#fafafa',
  lightestgrey: '#f1f1f1',
  lightgrey: '#cccccc',
  grey: '#666666',
  darkgrey: '#2B2F33',
  darkestgrey: '#212529',
  career: '#53442C',
  design: '#4D562C',
  dev: '#26545A',
};

const fonts = {
  family: '"Fira Sans", Ubuntu, sans-serif',
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
  },
};

const sizes = {
  xs: 575,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const medias = {
  xs: `(max-width: ${sizes.xs}px)`,
  sm: `(min-width: ${sizes.sm}px)`,
  md: `(min-width: ${sizes.md}px)`,
  lg: `(min-width: ${sizes.lg}px)`,
  xl: `(min-width: ${sizes.xl}px)`,
};

const zIndex = {
  tooltip: 1,
  header: 10,
  modal: 20,
  overlay: 30,
};

const theme = {
  main: {
    colors,
    fonts,
    sizes,
    medias,
    zIndex,
  },
};

export default theme;
