import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#00c795',
    gray: '#e9ecef',
    yellow: '#ffb43a',
    red: '#fe7e64',
  },
  // fonts: ['sans-serif', 'Roboto'],
  // fontSizes: {
  //   small: '1em',
  //   medium: '2em',
  //   large: '3em',
  // },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
