import React, { useContext } from "react";
import { FormattedIcons } from "../icons";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme, media } from "../styles";
import { FooterItems } from ".";

const { colors } = theme;

const StyledContainer = styled.footer`
  background-color: ${colors.veryDarkBlue};

  & .attribution {
    font-size: 11px;
    text-align: center;
    color: ${colors.grayishBlue};
  }
  & .attribution a {
    color: hsl(228, 45%, 44%);
  }
`;

const StyledContent = styled.div`
  margin: 0 8%;
  padding: 1.5em 0;
  text-align: center;
  position: relative;

  ${media.smDesktop`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    margin: 0 10%;
    padding: .75em 0;
  `}

  ${media.lgDesktop`
    margin: 0 12%;
  `}
`;

const StyledList = styled.ul`
  margin: 1em auto;

  ${media.smDesktop`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0;
  `}

  & .logoBookmark {
    margin-bottom: 1em;

    ${media.smDesktop`
      margin-right: 2.8em;
    `}

    & .logoTitle {
      fill: ${colors.white};
    }

    ${media.smDesktop`
      margin-bottom: 0;
  `}
  }
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0;

  & a .iconFacebook,
  & a .iconTwitter {
    margin: 0 1.25em;

    &:hover path {
      fill: ${colors.softRed};
    }
  }
`;

const Footer = () => {
  const { data } = useContext(BookmarkContext);

  const { sections, utils } = data;

  const { footer } = sections;
  const { items } = footer;

  const { logoBookmark, iconFacebook, iconTwitter } = utils;

  return (
    <StyledContainer>
      <StyledContent>
        <StyledList>
          <div>
            <FormattedIcons name={logoBookmark} />
          </div>

          {items.map((item, i) => (
            <FooterItems key={i} item={item} />
          ))}
        </StyledList>

        <StyledIcons>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FormattedIcons name={iconFacebook} />
          </a>

          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FormattedIcons name={iconTwitter} />
          </a>
        </StyledIcons>
      </StyledContent>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jcarlos0511">Chara-</a>.
      </div>
    </StyledContainer>
  );
};

export default Footer;
