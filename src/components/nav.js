import React, { useContext, useState, useRef } from "react";
import BookmarkContext from "../context/bookmarkContext";

import NavItems from "./items/navItems";

import styled from "styled-components";
import { FormattedIcons } from "../icons";
import { theme } from "../styles";
import { useScroll } from "../customHooks/useScroll";

const { colors } = theme;

const StyledContainer = styled.header`
  border: 1px solid red;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  padding: 2.2em 8%;
  background-color: ${colors.white};
  transform: translateY(
    ${(props) => (props.direction === "down" ? `-106px` : "0px")}
  );
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  & .hamburger {
    display: none;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuActive = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.veryDarkBlue};
  opacity: 0.95;
  user-select: none;
  z-index: 2;

  & .hamburger {
    display: none;
  }

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

  // handle scroll

  const { x, y, direction } = useScroll();

  console.log(x, y, direction);

  return (
    <>
      {!menu && (
        <StyledContainer direction={direction}>
          <input
            type="checkbox"
            id="hamburger"
            className="hamburger"
            ref={ref}
            onChange={() => SetMenu(ref.current.checked)}
          />

          <StyledMenu>
            <FormattedIcons name={logoBookmark} />

            <label htmlFor="hamburger">
              <FormattedIcons name={iconHamburger} />
            </label>
          </StyledMenu>
        </StyledContainer>
      )}

      {menu && (
        <StyledMenuActive>
          <input
            type="checkbox"
            id="hamburger"
            className="hamburger"
            ref={ref}
            onChange={() => SetMenu(!ref.current.checked)}
          />

          <div className="menuHeader">
            <FormattedIcons name={logoBookmark} />

            <label htmlFor="hamburger">
              <FormattedIcons name={iconClose} />
            </label>
          </div>

          {nav.items.map((item, index) => (
            <NavItems key={index} item={item} menu={menu} SetMenu={SetMenu} />
          ))}

          <div className="menuFooter">
            <FormattedIcons name={iconFacebook} />

            <FormattedIcons name={iconTwitter} />
          </div>
        </StyledMenuActive>
      )}
    </>
  );
};

export default Nav;
