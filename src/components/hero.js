import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import { theme, Button, BgImageRight, FormattedImages } from "../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  padding: 2.2em 0;
  overflow-x: hidden;
  position: relative;
`;

const StyledImage = styled.div`
  position: absolute;
  top: 2.1em;
  left: 0;
  right: 0;

  & .illustrationHero {
    border: 1px orange solid;
    width: 100%;
    height: 256px;
    margin: auto;
  }
`;

const StyledContent = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
  margin: 0 9%;
`;

const StyledTitle = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;
`;

const StyledButtons = styled.div`
  /* border: solid 1px red; */
  display: flex;
  justify-content: space-between;
  margin: 0 8%;
`;

const Hero = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { hero } = sections;
  const { title, description } = hero;
  return (
    <StyledContainer>
      <BgImageRight />

      <StyledImage>
        <FormattedImages name={utils.illustrationHero} />
      </StyledImage>

      <StyledContent>
        <StyledTitle>{title}</StyledTitle>

        <StyledDescription>{description}</StyledDescription>
      </StyledContent>

      <StyledButtons>
        <Button background={colors.softBlue} title="Get it on Chrome" />
        <Button title="Get it on Firefox" />
      </StyledButtons>
    </StyledContainer>
  );
};

export default Hero;
