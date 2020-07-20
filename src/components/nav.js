import React, { useContext, useState, useRef } from "react";
import BookmarkContext from "../context/bookmarkContext";

import NavItems from "./items/navItems";

import styled from "styled-components";
import { FormattedIcons } from "../icons";
import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 2.2em 8%;

  & .hamburger {
    display: none;
  }
`;

const StyledMenu = styled.ul`
  border: 5px solid green;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.veryDarkBlue};
  opacity: 0.9;
  margin: auto;
`;

const Nav = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;
  const { nav } = sections;

  const [menu, SetMenu] = useState(false);

  const ref = useRef(null);

  return (
    <StyledContainer>
      <FormattedIcons name={utils.logoBookmark} />

      <div>
        <input
          type="checkbox"
          id="hamburger"
          className="hamburger"
          ref={ref}
          onChange={() => SetMenu(ref.current.checked)}
        />
        {/* // Show 'X' to close Menu.... */}
        <label htmlFor="hamburger">
          {menu ? (
            <FormattedIcons name={utils.iconClose} />
          ) : (
            <FormattedIcons name={utils.iconHamburger} />
          )}
        </label>
      </div>

      {menu ? (
        <StyledMenu>
          <FormattedIcons name={utils.logoBookmark} />

          {nav.items.map((item, index) => (
            <NavItems key={index} item={item} />
          ))}
        </StyledMenu>
      ) : null}
    </StyledContainer>
  );
};

export default Nav;
