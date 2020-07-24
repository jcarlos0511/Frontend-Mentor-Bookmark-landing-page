import React from "react";
import styled from "styled-components";
import { FormattedImages, BgImageLeft, theme } from "../../styles";

const { fontSizes } = theme;

const StyledTabs = styled.article`
  display: none;
  position: relative;

  & svg {
    max-width: 375px;
    width: 100%;
    max-height: 300px;
  }

  & .illustrationFeaturesTab1 {
    margin-top: 1em;
    height: 212px;
  }
`;

const StyledImage = styled.div`
  border: 1px solid green;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
    <StyledTabs className={id}>
      <BgImageLeft />

      <StyledImage>
        <FormattedImages name={image} />
      </StyledImage>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTabs>
  );
};

export default TabItems;
