import React, { useContext } from "react";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme, Button } from "../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.softBlue};

  & input {
    padding: 0.9em;
    border-radius: 5px;
  }
`;

const StyledContent = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;
`;

const StyledTinyTitle = styled.h4`
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin: 0.5em auto;
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: 400;
  letter-spacing: 0.2em;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xl};
  color: ${colors.white};
  font-weight: 500;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6em;
`;

const Contact = () => {
  const { data } = useContext(BookmarkContext);
  const { sections } = data;

  const { contact } = sections;
  const { tinyTitle, title } = contact;

  return (
    <StyledContainer>
      <StyledContent>
        <StyledTinyTitle>{tinyTitle}</StyledTinyTitle>

        <StyledTitle>{title}</StyledTitle>

        <StyledForm>
          <input type="text" name="" id="" />

          <Button
            background={colors.softRed}
            bShadow="none"
            title="Contact Us"
          />
        </StyledForm>
      </StyledContent>
    </StyledContainer>
  );
};

export default Contact;
