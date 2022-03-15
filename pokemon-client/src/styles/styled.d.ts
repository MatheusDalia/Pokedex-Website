import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      bold: string;
      medium: string;
      semi_bold: string;
      regular: string;
    };
    colors: {
      white: string;
      lightGray: string;
      black: string;
      green: string;
      lightBlue: string;
    };
  }
}
