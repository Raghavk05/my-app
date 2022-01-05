import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#f77070',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0098ae',
      300: '#63B3ED',
      500: '#3182CE',
    },
    red: {
      100: '#ff3d3d',
      200: '#f77070',
      600: '#C53030',
    },
  },
  fonts: {
    body: 'oswald',
    heading: 'oswald',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default customTheme;