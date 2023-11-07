import { createGlobalStyle } from 'styled-components';

// import tempCss from './temp.module.css';
import resetCss from './reset.module.css';
import varsCss from './styles.module.css';

export const GlobalStyles = createGlobalStyle`
  ${resetCss}
  ${varsCss}

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
    overscroll-behavior: none;
    background-color: ${({ theme }) => theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    font-style: normal;
    font-weight: normal;
    font-family: var(--font-family, sans-serif);

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};

    line-height: 1;
  }

  div#root {
    background-color: ${({ theme }) => theme.colors.background.primary};
    width: 100%;
    height: 100%;
  }
`;
