import React from "react";
import styled from "styled-components";

const StyledTabs = styled.article`
  border: 1px solid red;
  display: none;
`;

const TabItems = ({ tab }) => {
  const { id, title, description } = tab;
  return (
    <StyledTabs className={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledTabs>
  );
};

export default TabItems;
