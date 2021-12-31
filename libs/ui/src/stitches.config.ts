import { blackA, blue, gray, green } from '@radix-ui/colors';
import {
  createStitches,
  CSS as StitchesCSS,
  ScaleValue,
} from '@stitches/react';

const UI_PREFIX = 'rad';

export type CSS = StitchesCSS<typeof config>;

const VARIABLES_PREFIX = `--${UI_PREFIX}`;

const BODY_FONT = 'Biotif';
const HEADING_FONT = 'Neucha';

export const { styled, getCssText, css, theme, config, globalCss, keyframes } =
  createStitches({
    prefix: UI_PREFIX,
    theme: {
      colors: {
        accentPurple: '#b994ff',
        accentLightBlue: '#a0d9fa',
        accentLimeGreen: '#a8edd8',
        creamWhite: '#f9f9f9',
        ...gray,
        ...blackA,
        ...blue,
        ...green,
      },
      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      space: {
        auto: 'auto',
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      fonts: {
        heading: HEADING_FONT,
        body: BODY_FONT,
        sans: 'sans-serif',
      },
    },
    media: {
      sm: `(min-width: 640px)`,
      md: `(min-width: 768px)`,
      lg: `(min-width: 1024px)`,
      xl: `(min-width: 1280px)`,
      '2xl': `(min-width: 1536px)`,
    },
    utils: {
      // padding
      paddingX: (value: ScaleValue<'space'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: ScaleValue<'space'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // margins
      marginX: (value: ScaleValue<'space'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: ScaleValue<'space'>) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // shadows
      shadow: (
        value: 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'
      ) => {
        let boxShadow =
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)';
        switch (value) {
          case 'sm':
            boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
            break;
          case 'md':
            boxShadow =
              '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
            break;
          case 'lg':
            boxShadow =
              '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
            break;
          case 'xl':
            boxShadow =
              '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
            break;
          case '2xl':
            boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';
            break;
          case 'none':
            boxShadow = '0 0 #0000';
        }
        return { boxShadow };
      },

      // A property for applying width/height together
      size: (value: ScaleValue<'space'>) => ({
        width: value,
        height: value,
      }),

      // A property for applying spacing between elements
      spaceX: (value: ScaleValue<'space'>) => ({
        '& > :not([hidden]) ~ :not([hidden])': {
          [`${VARIABLES_PREFIX}-x-reverse`]: 0,
          marginRight: `calc(${value} * var(${VARIABLES_PREFIX}-x-reverse))`,
          marginLeft: `calc(${value} * calc(1 - var(${VARIABLES_PREFIX}-x-reverse)))`,
        },
      }),
      spaceY: (value: ScaleValue<'space'>) => ({
        '& > :not([hidden]) ~ :not([hidden])': {
          [`${VARIABLES_PREFIX}-y-reverse`]: 0,
          marginBottom: `calc(${value} * var(${VARIABLES_PREFIX}-y-reverse))`,
          marginTop: `calc(${value} * calc(1 - var(${VARIABLES_PREFIX}-y-reverse)))`,
        },
      }),
    },
  });

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: BODY_FONT,
      fontStyle: 'bold',
      fontWeight: 700,
      src: `url('fonts/biotif-bold-webfont.woff') format('woff2'), url('fonts/biotif-bold-webfont.woff') format('woff')`,
    },

    {
      fontFamily: BODY_FONT,
      fontStyle: 'medium',
      fontWeight: 500,
      src: `url('fonts/biotif-medium-webfont.woff2') format('woff2'), url('fonts/biotif-medium-webfont.woff') format('woff')`,
    },
    {
      fontFamily: BODY_FONT,
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url('fonts/biotif-regular-webfont.woff2') format('woff2'), url('fonts/biotif-regular-webfont.woff') format('woff')`,
    },
  ],
  '*': {
    fontFamily: BODY_FONT,
  },
});
