import React from "react";
import styled from "styled-components";
import { theme } from ".";

const { colors, fontSizes } = theme;

const StyledButton = styled.button`
  width: auto;
  border-radius: 5px;
  padding: 0.9em;
  font-size: ${fontSizes.sm};
  font-weight: 600;

  background: ${(props) =>
    props.background ? props.background : colors.white};

  color: ${(props) =>
    props.background ? colors.white : colors.veryGrayishBlue};

  box-shadow: ${(props) =>
    props.bShadow ? props.bShadow : `0 5px 10px ${colors.lightGrayishBlue}`};
`;

const Button = ({ background, title, bShadow }) => {
  return (
    <StyledButton bShadow={bShadow} background={background}>
      {title}
    </StyledButton>
  );
};

export default Button;
