import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.secondaryFont}, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;    
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.dark}
  }

  ol, ul {
	  list-style: none;
  }

  a {
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

#root, #__next {
  isolation: isolate;
}
`;
