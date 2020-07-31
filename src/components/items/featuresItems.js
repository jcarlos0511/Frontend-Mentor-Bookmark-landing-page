import React from "react";
import styled from "styled-components";
import { theme, media } from "../../styles";

const { colors, fontSizes } = theme;

const StyledItem = styled.li`
  border-top: 1px solid ${colors.lightGrayishBlue};
  font-size: ${fontSizes.md};
  color: ${colors.veryGrayishBlue};
  font-weight: 400;
  position: relative;

  ${media.smDesktop`
      border-top: none;
      border-bottom:  1px solid ${colors.lightGrayishBlue}; 
  `}
`;

const StyledName = styled.label`
  padding: 1em;
  display: block;
  position: relative;
  cursor: pointer;

  ${media.smDesktop`
    padding: 1.5em;
  `}
`;

const FeaturesItems = ({ item }) => {
  return (
    <StyledItem>
      <StyledName htmlFor={item.name}>{item.name}</StyledName>
    </StyledItem>
  );
};

export default FeaturesItems;
