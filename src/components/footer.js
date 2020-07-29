import React, { useContext } from "react";
import { FormattedIcons } from "../icons";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme } from "../styles";
import { FooterItems } from ".";

const { colors } = theme;

const StyledContainer = styled.footer`
  background-color: ${colors.veryDarkBlue};
`;

const StyledContent = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;
  position: relative;

  & .logoTitle {
    fill: ${colors.white};
  }
`;

const StyledList = styled.ul`
  margin: 1em auto;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
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
        <FormattedIcons name={logoBookmark} />

        <StyledList>
          {items.map((item, i) => (
            <FooterItems key={i} item={item} />
          ))}
        </StyledList>

        <StyledIcons>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedIcons name={iconFacebook} />
          </a>

          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedIcons name={iconTwitter} />
          </a>
        </StyledIcons>
      </StyledContent>
    </StyledContainer>
  );
};

export default Footer;
