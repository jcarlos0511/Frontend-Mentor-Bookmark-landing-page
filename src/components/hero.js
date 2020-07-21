import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import FormattedImages from "../styles/formattedImages";

const StyledImage = styled.div`
  & .illustrationHero {
    border: 1px orange solid;
    width: 100%;
    height: 256px;
    margin: auto;
  }
`;

const Hero = () => {
  const { data } = useContext(BookmarkContext);
  const { utils } = data;
  return (
    <StyledImage>
      <FormattedImages name={utils.illustrationHero} />
    </StyledImage>
  );
};

export default Hero;
