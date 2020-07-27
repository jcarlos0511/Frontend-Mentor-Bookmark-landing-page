import React from "react";

import { FormattedIcons } from "../../icons";
import styled from "styled-components";

import { theme } from "../../styles";
const { colors, fontSizes } = theme;

const StyledContainer = styled.li`
  user-select: none;
  font-size: ${fontSizes.sm};
  text-align: left;
  line-height: 2em;
  border-bottom: 1px solid ${colors.lightGrayishBlue};
`;

const StyledContent = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledQuestion = styled.p`
  color: ${colors.veryDarkBlue};
  font-weight: 400;

  &:hover {
    color: ${colors.softRed};
  }
`;

const StyledAnswer = styled.p`
  padding-bottom: 1em;
  color: ${colors.veryGrayishBlue};
`;

const FaqItems = ({ acc, iconArrow, state }) => {
  const { id, question, answer } = acc;

  return (
    <StyledContainer>
      <StyledContent htmlFor={id}>
        <StyledQuestion>{question}</StyledQuestion>

        {state.acc === id ? (
          <FormattedIcons
            name={iconArrow}
            color={colors.softRed}
            rotate={"rotate(180deg)"}
            transition={"transform .3s ease"}
          />
        ) : (
          <FormattedIcons
            color={colors.softBlue}
            name={iconArrow}
            rotate={"rotate(0deg)"}
            transition={"transform .3s ease"}
          />
        )}
      </StyledContent>

      {state.acc === id ? <StyledAnswer>{answer}</StyledAnswer> : null}
    </StyledContainer>
  );
};

export default FaqItems;
