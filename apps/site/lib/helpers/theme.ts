import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      accent: {
        purple: '#b994ff',
        lightBlue: '#a0d9fa',
        limeGreen: '#a8edd8',
      },
    },
  },
  config: {
    cssVarPrefix: 'bk',
  },
});
