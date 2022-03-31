import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  article {
    background: ${({ theme }) => theme.article};
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