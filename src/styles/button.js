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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  font-weight: 600;
`;

const Button = ({ background, title }) => {
  return <StyledButton background={background}>{title}</StyledButton>;
};

export default Button;
