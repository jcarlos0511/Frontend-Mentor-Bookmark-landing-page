import React, { useContext, useState } from "react";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme, Button } from "../styles";
import { FaqItems } from ".";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  margin: 0 8%;
  padding: 5em 0;
  text-align: center;

  & .acc {
    display: none;
  }
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

const StyledList = styled.ul`
  padding: 2.2em 0;
`;

const Faq = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { faq } = sections;
  const { iconArrow } = utils;

  const { title, description, accordion } = faq;

  const [state, setState] = useState({ acc: "" });

  const hideState = () => {
    setTimeout(() => {
      setState({ acc: "" });
    }, 15000);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

    hideState();
  };
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{description}</StyledDescription>

      {accordion.map(({ id }, i) => (
        <input
          key={i}
          type="radio"
          className="acc"
          name="acc"
          id={id}
          value={id}
          onChange={handleChange}
        />
      ))}

      <StyledList>
        {accordion.map((acc, i) => (
          <FaqItems key={i} acc={acc} iconArrow={iconArrow} state={state} />
        ))}
      </StyledList>

      <Button
        background={colors.softBlue}
        border={colors.softBlue}
        title="More Info"
      />
    </StyledContainer>
  );
};

export default Faq;
