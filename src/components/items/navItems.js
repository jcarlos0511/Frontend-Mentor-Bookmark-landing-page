import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";
const { colors, fontSizes } = theme;

const NavItem = styled.li`
  border-top: 1px solid ${colors.grayishBlue};
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  letter-spacing: 0.15em;
  list-style: none;
  margin: 0 8%;
  padding: 1.4em 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  &:last-of-type .link {
    border: 2px solid ${colors.white};
    width: 100%;
    padding: 0.833em 0;
    border-radius: 5px;

    &:hover {
      border: 2px solid ${colors.softRed};
    }
  }

  & .link:hover {
    color: ${colors.softRed};
  }

  &.mode-desktop {
    color: ${colors.veryDarkBlue};
    border-top: none;
    font-size: ${fontSizes.xs};
    padding: 0;
    margin: 0;

    &:last-of-type .link {
      border: 2px solid ${colors.softRed};
      background-color: ${colors.softRed};
      color: ${colors.white};
      padding: 0.75em 1.5em;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.softRed};
        transition: background-color 0.3s ease;
      }
    }
  }
`;

const NavItems = ({ item, SetMenu, desktop }) => {
  return (
    <NavItem id={`nav__${item.name}`} className={desktop}>
      <a
        className="link"
        href={`#${item.name}`}
        id={`link__${item.name}`}
        name={item.name}
        onClick={() => SetMenu(false)}
        rel="noopener noreferrer"
      >
        {item.name}
      </a>
    </NavItem>
  );
};

export default NavItems;
