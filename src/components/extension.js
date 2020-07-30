import React, { useContext } from "react";

import BookmarkContext from "../context/bookmarkContext";
import { Cards } from ".";

import styled from "styled-components";
import { theme, media } from "../styles";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;

  ${media.smDesktop`
    margin: 0 10%;
  `}

  ${media.mdDesktop`
    margin: 0 14%;
  `}

  ${media.lgDesktop`
    margin: 0 18%;
  `}
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;

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
  margin-bottom: 2em;

  ${media.smDesktop`
    margin-left: auto;
    margin-right: auto;
    width: 540px;
  `}

  ${media.mdDesktop`
    font-size: ${fontSizes.md};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.lg};
  `}
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5em;

  ${media.lgDesktop`
    column-gap: 2em;
  `}
`;

const Extension = () => {
  const { data } = useContext(BookmarkContext);
  const { sections } = data;

  const { extension } = sections;
  const { title, description, browsers } = extension;

  return (
    <StyledContainer id="pricing">
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>

      <StyledBox>
        {browsers.map((browser, index) => (
          <Cards key={index} browser={browser} />
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default Extension;
