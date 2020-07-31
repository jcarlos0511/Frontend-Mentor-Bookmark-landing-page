import React from "react";
import styled from "styled-components";
import { FormattedImages, BgImageLeft, theme, media } from "../../styles";

const { fontSizes } = theme;

const StyledTabs = styled.article`
  display: none;
  position: relative;
  margin-top: 1.5em;

  ${media.smDesktop`
    width: 820px;
    margin-left: auto;
    margin-right: auto;
  `};

  ${media.mdDesktop`
    width: 1000px;
  `};

  ${media.lgDesktop`
    width: 1100px;
  `};

  & svg {
    max-width: 375px;
    max-height: 300px;

    ${media.smDesktop`
      max-width: 450px;
      max-height: 325px;
      width: 450px;
      height: 325px;
    `}

    ${media.mdDesktop`
      max-width: 550px;
      max-height: 350px;
      width: 550px;
      height: 550px;
    `}
  }

  & .illustrationFeaturesTab1 {
    margin-top: 1em;
    margin-bottom: 3em;
    height: 212px;

    ${media.smDesktop`
      margin: 0;
      width: 450px;
      height: 325px;
    `}

    ${media.mdDesktop`
      width: 550px;
      height: 350px;
    `}
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

  ${media.smDesktop`
    text-align: left;
  `}

  ${media.mdDesktop`
    font-size: ${fontSizes.xxl};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.xxxl};
  `}
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;

  ${media.smDesktop`
    text-align: left;
  `}

  ${media.smDesktop`
    margin: 0 auto;
  `}

  ${media.mdDesktop`
    font-size: ${fontSizes.md};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.lg};
  `}
`;

const TabItems = ({ tab }) => {
  const { id, title, description, image } = tab;
  return (
    <StyledTabs className={id} tabs>
      <div>
        <StyledImage>
          <BgImageLeft />
        </StyledImage>
        <FormattedImages name={image} />
      </div>

      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </div>
    </StyledTabs>
  );
};

export default TabItems;
