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
  list-style: none;
  position: relative;

  &:last-of-type .link {
    border: 2px solid ${colors.white};
    width: 100%;
    padding: 0.833em 0;
    border-radius: 6px;

    &:hover {
      border: 2px solid ${colors.softRed};
    }
  }

  & .link:hover {
    color: ${colors.softRed};
  }
`;

const NavItems = ({ item, SetMenu }) => {
  return (
    <NavItem>
      <a
        className="link"
        href={`#${item.name}`}
        rel="noopener noreferrer"
        name={item.name}
        onClick={() => SetMenu(false)}
      >
        {item.name}
      </a>
    </NavItem>
  );
};

export default NavItems;
