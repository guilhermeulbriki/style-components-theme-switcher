import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secundary: string;

      bcakground: string;
      text: string;
    },
  }
}