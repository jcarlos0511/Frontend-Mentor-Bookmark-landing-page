import React, { useContext } from "react";

import BookmarkContext from "../context/bookmarkContext";
import { Cards } from ".";

import styled from "styled-components";
import { theme } from "../styles";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.5em;
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

      <StyledGrid>
        {browsers.map((browser, index) => (
          <Cards key={index} browser={browser} />
        ))}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Extension;
