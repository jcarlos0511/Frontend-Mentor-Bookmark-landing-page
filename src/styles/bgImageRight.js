import React from "react";

import styled from "styled-components";
import { theme } from ".";

const { colors } = theme;

const StyledBgImage = styled.div`
  background-color: ${colors.softBlue};
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  margin: 3em 3.5em;
`;

const BgImageRight = () => {
  return <StyledBgImage />;
};

export default BgImageRight;
