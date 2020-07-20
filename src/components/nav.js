import React, { useContext } from "react";
import { FormattedIcons } from "../icons";
import BookmarkContext from "../context/bookmarkContext";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2em 8%;
`;

const Nav = () => {
  const { data } = useContext(BookmarkContext);
  const { utils } = data;
  return (
    <StyledContainer>
      <FormattedIcons name={utils.logoBookmark} />
      <FormattedIcons name={utils.iconHamburger} />
    </StyledContainer>
  );
};

export default Nav;
