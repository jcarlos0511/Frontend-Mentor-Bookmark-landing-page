import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import { theme } from "../styles";
import { FeaturesItems, TabItems } from ".";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid green;
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;

  & input {
    display: none;
  }

  & input[id="Simple Bookmarking"]:checked ~ .tab-Bookmarking {
    display: block;
  }

  &
    input[id="Simple Bookmarking"]:checked
    ~ ul
    [for="Simple Bookmarking"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};
  }

  & input[id="Speedy Searching"]:checked ~ .tab-Searching {
    display: block;
  }

  & input[id="Speedy Searching"]:checked ~ ul [for="Speedy Searching"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};
  }

  & input[id="Easy Sharing"]:checked ~ .tab-Sharing {
    display: block;
  }

  & input[id="Easy Sharing"]:checked ~ ul [for="Easy Sharing"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};
  }
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;
`;

const StyledMenu = styled.ul`
  /* border: 1px solid orange; */
  padding: 1.5em 0;

  & li:last-child {
    border-bottom: 1px solid ${colors.lightGrayishBlue};
  }
`;

const Features = () => {
  const { data } = useContext(BookmarkContext);
  const { sections } = data;

  const { features } = sections;
  const { title, description, list, tabs } = features;

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{description}</StyledDescription>

      {list.map((item, index) => (
        <input key={index} type="radio" id={item.name} name="menu" />
      ))}

      <StyledMenu>
        {list.map((item, index) => (
          <FeaturesItems key={index} item={item} />
        ))}
      </StyledMenu>

      {tabs.map((tab, index) => (
        <TabItems key={index} tab={tab} />
      ))}
    </StyledContainer>
  );
};

export default Features;
