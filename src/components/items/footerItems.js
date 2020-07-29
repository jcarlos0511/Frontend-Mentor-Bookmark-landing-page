import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const { fontSizes, colors } = theme;

const StyledItem = styled.li`
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: 400;
  padding: 1.4em 0;
  font-size: ${fontSizes.sm};
  letter-spacing: 0.15em;

  & a:hover {
    color: ${colors.softRed};
  }
`;

const FooterItems = ({ item }) => {
  return (
    <StyledItem>
      <a href={`#${item.name}`} rel="noopener noreferrer">
        {item.name}
      </a>
    </StyledItem>
  );
};

export default FooterItems;
