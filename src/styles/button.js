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
  font-size: ${fontSizes.sm};
  box-shadow: 0 5px 10px ${colors.lightGrayishBlue};
  font-weight: 600;
`;

const Button = ({ background, title }) => {
  return <StyledButton background={background}>{title}</StyledButton>;
};

export default Button;
