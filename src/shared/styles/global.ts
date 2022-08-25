import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    
      html {
        font-size: 62.5%;
      }

      body{
        background-color: #E0E0E0;
      }
  
  `;

export default GlobalStyles;
