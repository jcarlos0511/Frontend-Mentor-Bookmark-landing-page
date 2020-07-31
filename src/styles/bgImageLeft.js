import React from "react";

import styled from "styled-components";
import { theme } from ".";
import media from "./media";

const { colors } = theme;

const StyledBgImage = styled.div`
  background-color: ${colors.softBlue};
  width: 100%;
  height: 200px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  margin-top: 3.25em;
  margin-bottom: 3.25em;
  margin-left: -22.5%;

  ${media.smDesktop`
    border-bottom-right-radius: 200px;
    height: 275px;
    border-top-right-radius: 200px;
    margin-top: 4.5em;
    margin-bottom: 4.5em;
    margin-left: -55%;
  `}

  ${media.mdDesktop`
    height: 350px;
    margin-left: -60%;
  `};
`;

const BgImageLeft = () => {
  return <StyledBgImage />;
};

export default BgImageLeft;
