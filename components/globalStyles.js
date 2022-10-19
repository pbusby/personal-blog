import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  html {
    // transition: background 0.50s linear;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    // transition: all 0.50s linear;
  }
  article {
    background: var(--color-background);
  }
  .bannerImage {
    height: 500px;
    z-index: 0;
  }
  .bannerText {
    position: relative;
    z-index: 1;
  }
  .bannerContainer {
    position: relative;
    height: 500px;
    margin-bottom: 40px;
  }
`