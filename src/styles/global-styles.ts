import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    margin:0;
  }
  body{
    background-color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  select{
    -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;       /* Remove default arrow */
   background-image: url(...);   /* Add custom arrow */
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
