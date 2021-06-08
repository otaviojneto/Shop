import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }
  body,
  html {
    font-size: 16px;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  textarea {
    resize: none;
  }
  button, a {
    cursor: pointer;
  }
  h1 {
    font-size: 70px;
    font-weight: 600;
    line-height: 60px;
  }
  h2 {
    font-size: 30px;
    line-height: 30px;
  }
  h3 {
    font-size: 28px;
    line-height: 34px;
  }
  h4 {

    font-size: 18px;
    line-height: 28px;
  }

`;

export default GlobalStyle;
