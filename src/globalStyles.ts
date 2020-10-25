import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const poppinsWoff2 = require('./assets/fonts/Poppins/poppins-v9-latin-regular.woff2');
const poppinsWoff = require('./assets/fonts/Poppins/poppins-v9-latin-regular.woff');

type Theme = {
  backgroundColour: string;
  mainColour: string;
  secColour: string;
  inactiveColour: string;
  activeColour: string;
};

export const theme: Theme = {
  backgroundColour: '#000000',
  mainColour: '#3DC16D',
  secColour: '#E3D4BC',
  inactiveColour: '#374B4C',
  activeColour: '#F6AE2D'
};

export const GlobalStyles = createGlobalStyle`

  // necolas/normalize.css
  ${normalize}

  // global font
  @font-face {
    font-family: 'poppins';
    src: url(${poppinsWoff2}) format('woff2'),
         url(${poppinsWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'poppins';
    background: ${(props: any) => props.theme.backgroundColour};
  }
`;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
