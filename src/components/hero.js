import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import { theme, Button, BgImageRight, FormattedImages, media } from "../styles";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  overflow-x: hidden;
`;

const StyledContainer = styled.div`
  padding: 2.2em 0;
  position: relative;
  margin-top: 5em;

  ${media.smDesktop`
    display: flex;
    flex-direction: row-reverse;
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;
    column-gap: 2.5em;
  `}

  ${media.mdDesktop`
    margin-left: 11%;
    margin-right: 11%;
  `}

  ${media.lgDesktop`
    margin-left: 12%;
    margin-right: 12%;
  `}
`;

const StyledImage = styled.div`
  position: relative;

  ${media.smDesktop`
      position: relative;
      margin-right: -2.5em;
  `}

  ${media.mdDesktop`
      position: relative;
      margin-right: -5em;
  `}

  & .illustrationHero {
    width: 100%;
    height: 256px;
    margin: auto;

    ${media.smDesktop`
      width: 450px;
      height: auto;
    `}

    ${media.mdDesktop`
      width: 550px;
      height: auto;
    `}

    ${media.lgDesktop`
      width: 650px;
      height: auto;
    `}
  }
`;

const StyledContent = styled.div`
  margin: 0 9%;
  text-align: center;

  ${media.smDesktop`
     margin: 0 auto;
     text-align: left;
     width: 500px;
  `}
`;

const StyledTitle = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 500;
  margin-top: 2em;

  ${media.mdDesktop`
    margin-top: 1em;
    font-size: ${fontSizes.xlplus};
  `}
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;

  ${media.mdDesktop`
    font-size: ${fontSizes.md};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.lg};
  `}
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;

  ${media.smDesktop`
    justify-content: initial;
    column-gap: 1.5em;
    margin-top: 2.5em;

  `}
`;

const Hero = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { hero } = sections;
  const { title, description } = hero;
  return (
    <StyledBackground>
      <StyledContainer>
        <div>
          <BgImageRight />

          <StyledImage>
            <FormattedImages name={utils.illustrationHero} />
          </StyledImage>
        </div>

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>

          <StyledDescription>{description}</StyledDescription>

          <StyledButtons>
            <Button
              background={colors.softBlue}
              border={colors.softBlue}
              title="Get it on Chrome"
            />

            <Button title="Get it on Firefox" />
          </StyledButtons>
        </StyledContent>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Hero;
