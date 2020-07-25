import React from "react";
import styled from "styled-components";
import { FormattedImages, BgImageLeft, theme } from "../../styles";

const { fontSizes } = theme;

const StyledTabs = styled.article`
  display: none;
  position: relative;
  margin-top: 1.5em;

  & svg {
    max-width: 375px;
    width: 100%;
    max-height: 300px;
  }

  & .illustrationFeaturesTab1 {
    margin-top: 1em;
    margin-bottom: 3em;
    height: 212px;
  }
`;

const StyledImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;
`;

const TabItems = ({ tab }) => {
  const { id, title, description, image } = tab;
  return (
    <StyledTabs className={id} tabs>
      <StyledImage>
        <BgImageLeft />
      </StyledImage>
      <FormattedImages name={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTabs>
  );
};

export default TabItems;
