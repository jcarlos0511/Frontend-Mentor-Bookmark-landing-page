import React, { useContext } from "react";
import { FormattedIcons } from "../icons";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme } from "../styles";
import { FooterItems } from ".";

const { colors } = theme;

const StyledContainer = styled.div`
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

  & .iconFacebook,
  & .iconTwitter {
    margin: 0 1.25em;
  }
`;

const Footer = () => {
  const { data } = useContext(BookmarkContext);

  const { sections, utils } = data;

  const { footer } = sections;

  const { logoBookmark, iconFacebook, iconTwitter } = utils;

  const { items } = footer;
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
          <FormattedIcons name={iconFacebook} />
          <FormattedIcons name={iconTwitter} />
        </StyledIcons>
      </StyledContent>
    </StyledContainer>
  );
};

export default Footer;
