import React, { useContext, useState, useRef } from "react";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme, Button } from "../styles";
import { FormattedIcons } from "../icons";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.softBlue};

  & .email {
    padding: 0.9em 1.5em;
    border-radius: 5px;

    & + span {
      font-size: ${fontSizes.xs};
      font-style: italic;
      text-align: left;
      color: ${colors.white};
      width: auto;
      background-color: ${colors.softRed};
      display: block;
      margin-top: -3px;
      margin-bottom: 2em;
      padding: 0.35em 1em;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &::-webkit-input-placeholder {
      color: ${colors.lightGrayishBlue};
    }
  }

  & .isActive:active,
  & .isActive:focus {
    border: 3px solid;
    border-color: ${colors.softRed};
  }

  & .icon {
    display: none;
    position: relative;
  }

  & .error {
    display: block;
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
  margin: 2em auto;
  height: 6em;
`;

const Contact = () => {
  const { data } = useContext(BookmarkContext);
  const { sections, utils } = data;

  const { contact } = sections;
  const { tinyTitle, title } = contact;

  const [email, setEmail] = useState({ email: "" });

  const [errors, setErrors] = useState({
    name: "",
  });

  const ref = useRef(null);

  // focus input
  const focus = () => ref.current.focus();

  //Hide error
  const hideError = () =>
    setTimeout(() => {
      setErrors({ ...errors, name: "" });
    }, 5000);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validations

    if (email.email === "") {
      setErrors({ ...errors, name: "Whoops, empty field" });

      focus();

      hideError();
      return;
    }

    if (email.email.length < 8) {
      setErrors({
        ...errors,
        name: "Whoops, must be at least 8 characters or more",
      });

      focus();

      hideError();

      return;
    }

    setErrors({ ...errors, name: "" });
    setEmail({ email: "" });
    alert("Sending");
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledTinyTitle>{tinyTitle}</StyledTinyTitle>

        <StyledTitle>{title}</StyledTitle>

        <StyledForm onSubmit={handleSubmit}>
          <input
            ref={ref}
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email.email}
            className={`email ${errors.name !== "" && "isActive"}`}
            onChange={(e) =>
              setEmail({ ...email, [e.target.name]: e.target.value })
            }
          />

          {errors.name !== "" && <span>{errors.name}</span>}

          <i className={`icon ${errors.name !== "" && "error"}`}>
            <FormattedIcons name={utils.iconError} />
          </i>

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
