import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import { theme } from "../styles";
import { FeaturesItems } from ".";

const { fontSizes } = theme;
const StyledContainer = styled.div`
  border: 1px solid green;
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.md};
  line-height: 1.65em;
`;

const StyledMenu = styled.ul`
  border: 1px solid orange;
`;

const Features = () => {
  const { data } = useContext(BookmarkContext);
  const { sections } = data;

  const { features } = sections;
  const { title, description, list } = features;

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{description}</StyledDescription>

      <StyledMenu>
        {list.map((item, index) => (
          <FeaturesItems key={index} item={item} />
        ))}
      </StyledMenu>
    </StyledContainer>
  );
};

export default Features;
