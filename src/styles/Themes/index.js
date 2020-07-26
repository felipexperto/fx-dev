/* Colors */
const colors = {
  white: '#fff',
  black: '#000',
  red: '#ff040d',
  transparent: 'transparent',
  yellow: '#ffee17',
  almostwhite: '#fafafa',
  lightestgrey: '#f1f1f1',
  lightgrey: '#aaaaaa',
  grey: '#666666',
  darkgrey: '#333333'
};
const fonts = {
  weight: {
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 700,
  },
};

const theme = {
  main: {
    colors: {
      ...colors,
    },
    fonts: {
      ...fonts,
    }
  },
};

export default theme;