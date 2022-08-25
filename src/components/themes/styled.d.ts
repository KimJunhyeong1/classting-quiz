import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      gray: string;
      yellow: string;
      red: string;
    };
  }
}
