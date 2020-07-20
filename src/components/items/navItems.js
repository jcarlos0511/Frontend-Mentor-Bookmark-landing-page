import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";
const { colors } = theme;

const NavItem = styled.li`
  color: ${colors.white};
  text-transform: uppercase;
`;

const NavItems = ({ item }) => {
  return <NavItem>{item.name} </NavItem>;
};

export default NavItems;
