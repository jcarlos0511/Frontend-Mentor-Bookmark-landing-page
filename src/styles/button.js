import React from "react";
import styled from "styled-components";
import { theme } from ".";

const { colors, fontSizes } = theme;

const StyledButton = styled.button`
  width: 10em;
  border-radius: 5px;
  padding: 0.9em;
  background: ${(props) =>
    props.background ? props.background : colors.white};
  color: ${(props) =>
    props.background ? colors.white : colors.veryGrayishBlue};
  font-size: ${fontSizes.md};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  font-weight: 600;
`;

const Button = ({ background, title }) => {
  return <StyledButton background={background}>{title}</StyledButton>;
};

export default Button;