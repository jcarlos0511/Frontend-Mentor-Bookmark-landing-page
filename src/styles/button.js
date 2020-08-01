import React from "react";
import styled from "styled-components";
import { theme } from ".";

const { colors, fontSizes } = theme;

const StyledButton = styled.button`
  width: ${(props) => (props.expanded ? "100%" : "auto")};
  border-radius: 5px;
  padding: 0.9em;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  text-decoration: none;

  border: 2px solid;

  border-color: ${(props) => (props.border ? props.border : colors.white)};

  background-color: ${(props) =>
    props.background ? props.background : colors.white};

  color: ${(props) =>
    props.background ? colors.white : colors.veryGrayishBlue};

  box-shadow: ${(props) =>
    props.bShadow ? props.bShadow : `0 5px 10px ${colors.lightGrayishBlue}`};

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.white};
    border: 2px solid;
    border-color: ${(props) =>
      props.border ? props.border : colors.veryGrayishBlue};

    color: ${(props) => (props.border ? props.border : colors.veryGrayishBlue)};

    transition: all 0.3s ease;
  }
`;

const Button = ({ background, border, bShadow, title, expanded }) => {
  return (
    <StyledButton
      bShadow={bShadow}
      background={background}
      border={border}
      expanded={expanded}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
