import React from "react";
import styled from "styled-components";

const StyledIconArrow = styled.svg`
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
`;

const IconArrow = ({ color, transform, transition }) => {
  return (
    <StyledIconArrow
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      className="IconArrow"
      transform={transform}
      transition={transition}
    >
      <path fill="none" stroke={color} strokeWidth="3" d="M1 1l8 8 8-8"></path>
    </StyledIconArrow>
  );
};

export default IconArrow;
