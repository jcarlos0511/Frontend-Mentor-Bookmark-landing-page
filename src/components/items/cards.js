import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { fontSizes } = theme;

const StyledTitle = styled.h3`
  font-size: ${fontSizes.lg};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
`;

const Cards = ({ browser }) => {
  const { title, version } = browser;

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{version}</StyledDescription>
    </div>
  );
};

export default Cards;
