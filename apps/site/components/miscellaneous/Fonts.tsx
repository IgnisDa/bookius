import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
@font-face {
  font-family: 'Biotif';
  font-style: bold;
  font-weight: 700;
  src: url('fonts/biotif-bold-webfont.woff') format('woff2'),
    url('fonts/biotif-bold-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Biotif';
  font-style: medium;
  font-weight: 500;
  src: url('fonts/biotif-medium-webfont.woff2') format('woff2'),
    url('fonts/biotif-medium-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Biotif';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/biotif-regular-webfont.woff2') format('woff2'),
    url('fonts/biotif-regular-webfont.woff') format('woff');
    }
      `}
  />
);

export default Fonts;
