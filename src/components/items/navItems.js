import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";
const { colors, fontSizes } = theme;

const NavItem = styled.li`
  color: ${colors.white};
  text-transform: uppercase;
  margin: 0 8%;
  padding: 1.4em 0;
  border-top: 1px solid ${colors.grayishBlue};
  text-align: center;
  font-size: ${fontSizes.sm};
  letter-spacing: 0.15em;

  &:last-of-type a {
    border: 2px solid ${colors.white};
    width: 100%;
    padding: 0.833em 0;
    border-radius: 6px;
  }

  & a:hover {
    color: ${colors.softRed};
  }
`;

const NavItems = ({ item, SetMenu }) => {
  return (
    <NavItem>
      <label htmlFor="hamburger">
        <a href={`#${item.name}`} rel="noopener noreferrer">
          {item.name}
        </a>
      </label>
    </NavItem>
  );
};

export default NavItems;
