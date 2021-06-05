import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Lato, "-apple-system", Roboto, sans-serif, serif;
    background-color: white;
    height: 100%;
  }

  html {
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
export default GlobalStyle