import React from "react";

import styled from "styled-components";
import { theme, Button, BgDots } from "../../styles";
import { FormattedIcons } from "../../icons";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  border-radius: 16px;
  padding-top: 3em;
  padding-bottom: 1.5em;
  margin: 0 auto;
  width: 300px;
  box-shadow: 0px 10px 20px ${colors.lightGrayishBlue};

  & .BgDots {
    margin: 1.25em auto;
  }
`;

const StyledTitle = styled.h3`
  font-size: ${fontSizes.ml};
  font-weight: 500;
  margin: 0.5em auto;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
`;

const Cards = ({ browser }) => {
  const { title, version, logo } = browser;

  return (
    <StyledContainer>
      <FormattedIcons name={logo} />

      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{version}</StyledDescription>

      <BgDots />

      <Button background={colors.softBlue} title="Add & Install Extension" />
    </StyledContainer>
  );
};

export default Cards;
