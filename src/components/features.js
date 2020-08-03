import React, { useContext, useState } from "react";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";
import { theme, media } from "../styles";
import { FeaturesItems, TabItems } from ".";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;

  ${media.smDesktop`
    margin: 0 10%;
  `}

  ${media.mdDesktop`
    margin: 0 11%;
    padding: 4.2em 0;
  `}

  ${media.lgDesktop`
    margin: 0 12%;
    padding: 6.2em 0;
  `}

  & input {
    display: none;
  }

  & input[id="simplebookmaking"]:checked ~ .tab-Bookmarking {
    display: inline-block;

    ${media.smDesktop`
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 6em;
    `}
  }

  &
    input[id="simplebookmaking"]:checked
    ~ ul
    [for="simplebookmaking"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};

    ${media.smDesktop`
      width: 100%;
      right:0;      
    `}
  }

  & input[id="speedysearching"]:checked ~ .tab-Searching {
    display: inline-block;

    ${media.smDesktop`
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 3em;
    `}

    ${media.smDesktop`
      column-gap: 6em;
    `}
  }

  & input[id="speedysearching"]:checked ~ ul [for="speedysearching"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};

    ${media.smDesktop`
      width: 100%;
      right:0;
    `}
  }

  & input[id="easysharing"]:checked ~ .tab-Sharing {
    display: inline-block;

    ${media.smDesktop`
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 6em;
    `}
  }

  & input[id="easysharing"]:checked ~ ul [for="easysharing"]::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 140px;
    height: 4px;
    right: calc(50% - 70px);
    background-color: ${colors.softRed};

    ${media.smDesktop`
      width: 100%;
      right:0;
    `}
  }
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  font-weight: 500;

  ${media.mdDesktop`
    font-size: ${fontSizes.xxl};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.xxxl};
  `}
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  line-height: 1.65em;

  ${media.smDesktop`
    margin: 0 auto;
    width: 540px;
  `}

  ${media.mdDesktop`
    font-size: ${fontSizes.md};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.lg};
  `}
`;

const StyledMenu = styled.ul`
  padding: 1.5em 0;

  ${media.smDesktop`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      width: 740px;
  `}

  & li {
    &:last-child {
      border-bottom: 1px solid ${colors.lightGrayishBlue};
    }
  }
`;

const Features = () => {
  const { data } = useContext(BookmarkContext);
  const { sections } = data;

  const { features } = sections;
  const { title, description, list, tabs } = features;

  const [state, setState] = useState({
    menu: "Simple Bookmarking",
  });

  const ChangeMenu = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <StyledContainer id="features">
      <StyledTitle>{title}</StyledTitle>

      <StyledDescription>{description}</StyledDescription>

      {list.map((item, index) => (
        <input
          key={index}
          type="radio"
          id={item.id}
          name="menu"
          value={item.name}
          checked={state.menu === item.name}
          onChange={ChangeMenu}
        />
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
