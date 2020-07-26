import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme } from "../styles";
import { FaqItems } from ".";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;
  margin: 0;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;
`;

const Faq = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { faq } = sections;
  const { iconArrow } = utils;

  const { title, description, accordion } = faq;

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{description}</StyledDescription>

      <ul>
        {accordion.map((acc, i) => (
          <FaqItems key={i} acc={acc} iconArrow={iconArrow} />
        ))}
      </ul>
    </StyledContainer>
  );
};

export default Faq;
