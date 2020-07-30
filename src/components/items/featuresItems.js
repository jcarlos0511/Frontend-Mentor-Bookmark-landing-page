import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;

const StyledItem = styled.li`
  border-top: 1px solid ${colors.lightGrayishBlue};
  font-size: ${fontSizes.md};
  color: ${colors.veryGrayishBlue};
  font-weight: 400;
  position: relative;
`;

const StyledName = styled.label`
  padding: 1em;
  display: block;
  position: relative;
  cursor: pointer;
`;

const FeaturesItems = ({ item }) => {
  return (
    <StyledItem>
      <StyledName htmlFor={item.name}>{item.name}</StyledName>
    </StyledItem>
  );
};

export default FeaturesItems;
