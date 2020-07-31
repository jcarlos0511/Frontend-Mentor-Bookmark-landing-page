import React from "react";

import styled from "styled-components";
import { theme, media } from ".";

const { colors } = theme;

const StyledBgImage = styled.div`
  background-color: ${colors.softBlue};
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  position: absolute;
  top: 5.5em;
  left: 18%;

  ${media.lgPhone`
    left: 22%;
  `};

  ${media.mdTablet`
    left: 30%;
  `};

  ${media.lgTablet`
    left: 35%;
  `};

  ${media.smDesktop`
    border-bottom-left-radius: 200px;
    border-top-left-radius: 200px;
    height: 250px;
    left: 60%;
    top: 7.5em;
  `}

  ${media.mdDesktop`
    height: 300px;
    left: 65%;
    top: 8.5em;
  `}

  ${media.lgDesktop`
    height: 350px;
    top: 10em;
  `};
`;

const BgImageRight = () => {
  return <StyledBgImage />;
};

export default BgImageRight;
