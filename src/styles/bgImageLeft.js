import React from "react";

import styled from "styled-components";
import { theme } from ".";

const { colors } = theme;

const StyledBgImage = styled.div`
  background-color: ${colors.softBlue};
  width: 100%;
  height: 200px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  margin: 3.25em -2.2em;
`;

const BgImageLeft = () => {
  return <StyledBgImage />;
};

export default BgImageLeft;
