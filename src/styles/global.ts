import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/Github.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* #f0f0f5 url(${githubBackground}) no-repeat 70% top */
  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background} url(${githubBackground}) no-repeat 70% top;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  /* #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  button {
    cursor: pointer;
  }

`;

