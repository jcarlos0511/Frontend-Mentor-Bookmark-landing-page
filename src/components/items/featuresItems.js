import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;
const StyledItem = styled.li`
  border: 1px solid red;
  padding: 1em 0;
  font-size: ${fontSizes.md};
  color: ${colors.veryGrayishBlue};
  font-weight: 400;
`;

const FeaturesItems = ({ item }) => {
  return <StyledItem>{item.name}</StyledItem>;
};

export default FeaturesItems;
