import React, { useContext, useState, useRef } from "react";
import BookmarkContext from "../context/bookmarkContext";

import NavItems from "./items/navItems";

import styled from "styled-components";
import { FormattedIcons } from "../icons";
import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  position: relative;
  padding: 2.2em 8%;

  & .hamburger {
    display: none;
  }
`;

const StyledMenu = styled.div`
  border: 1px green solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuActive = styled.ul`
  border: 1px solid green;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.veryDarkBlue};
  opacity: 0.95;
  user-select: none;
  z-index: 2;

  & .menuHeader {
    padding: 2.2em 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .logoTitle {
    fill: ${colors.white};
  }

  & .logoCircle {
    fill: ${colors.white};
  }

  & .logoInnerIcon {
    fill: ${colors.veryDarkBlue};
  }

  & .menuFooter {
    position: absolute;
    bottom: 50px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100px;

    & svg {
      margin: 0 0.66em;
    }
  }
`;

const Nav = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { nav } = sections;
  const {
    logoBookmark,
    iconClose,
    iconHamburger,
    iconFacebook,
    iconTwitter,
  } = utils;

  const [menu, SetMenu] = useState(false);

  const ref = useRef(null);

  return (
    <StyledContainer>
      <input
        type="checkbox"
        id="hamburger"
        className="hamburger"
        ref={ref}
        onChange={() => SetMenu(ref.current.checked)}
      />

      {menu ? (
        <StyledMenuActive>
          <div className="menuHeader">
            <FormattedIcons name={logoBookmark} />

            <label htmlFor="hamburger">
              <FormattedIcons name={iconClose} />
            </label>
          </div>

          {nav.items.map((item, index) => (
            <NavItems key={index} item={item} />
          ))}

          <div className="menuFooter">
            <FormattedIcons name={iconFacebook} />

            <FormattedIcons name={iconTwitter} />
          </div>
        </StyledMenuActive>
      ) : (
        <StyledMenu>
          <FormattedIcons name={logoBookmark} />

          <label htmlFor="hamburger">
            <FormattedIcons name={iconHamburger} />
          </label>
        </StyledMenu>
      )}
    </StyledContainer>
  );
};

export default Nav;
