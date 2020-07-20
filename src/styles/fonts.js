import { css } from "styled-components";

import RubikRegularTTF from "../fonts/Rubik/Rubik-Regular.ttf";
import RubikRegularWOFF from "../fonts/Rubik/Rubik-Regular.woff";
import RubikRegularWOFF2 from "../fonts/Rubik/Rubik-Regular.woff2";

import RubikMediumTTF from "../fonts/Rubik/Rubik-Medium.ttf";
import RubikMediumWOFF from "../fonts/Rubik/Rubik-Medium.woff";
import RubikMediumWOFF2 from "../fonts/Rubik/Rubik-Medium.woff2";

const FontFaces = css`
  @font-face {
    font-family: "Rubik";
    src: url(${RubikRegularWOFF2}) format("woff2"),
      url(${RubikRegularWOFF}) format("woff"),
      url(${RubikRegularTTF}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Rubik";
    src: url(${RubikMediumWOFF2}) format("woff2"),
      url(${RubikMediumWOFF}) format("woff"),
      url(${RubikMediumTTF}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
`;

export default FontFaces;
