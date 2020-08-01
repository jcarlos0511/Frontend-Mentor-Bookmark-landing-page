import React from "react";

import styled from "styled-components";
import { theme, Button, BgDots, media } from "../../styles";
import { FormattedIcons } from "../../icons";

const { colors, fontSizes } = theme;

const StyledContainer = styled.article`
  background-color: ${colors.white};
  border-radius: 16px;
  padding-top: 3em;
  padding-bottom: 1.5em;
  margin: 0 auto;
  margin-bottom: 1em;
  width: 300px;
  box-shadow: 0px 10px 10px -3px ${colors.lightGrayishBlue};

  ${media.mdDesktop`
    width: 280px;

    &:nth-of-type(1) {
      margin-top: 0;
      margin-bottom: 5em;
    }

    &:nth-of-type(2) {
      margin-top: 2.5em;
      margin-bottom: 2.5em;
    }

    &:nth-of-type(3) {
      margin-top: 5em;
    }
  `}

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

      <Button
        background={colors.softBlue}
        border={colors.softBlue}
        title="Add & Install Extension"
      />
    </StyledContainer>
  );
};

export default Cards;
