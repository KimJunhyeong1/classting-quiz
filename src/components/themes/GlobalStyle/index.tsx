import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.gray};
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
