import { createGlobalStyle } from "styled-components";

import FontFaces from "./fonts";
import theme from "./theme";

const { colors, fonts, fontSizes } = theme;

const GlobalStyles = createGlobalStyle`

  ${FontFaces}

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: ${fonts.Rubik};
    font-size: ${fontSizes.lg};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
      /* color: ${colors}; */
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.veryDarkBlue};
  }

  p {
    color:${colors.grayishBlue}
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

   button {
     --webkit-appearance: none;
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.softBlue};
    }
  }

  ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
      }
  }

  input, textarea {
    border: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
`;

export default GlobalStyles;
