import React, { useContext, useState, useRef } from "react";
import BookmarkContext from "../context/bookmarkContext";

import styled from "styled-components";
import { theme, Button, media } from "../styles";
import { FormattedIcons } from "../icons";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.softBlue};

  & .email {
    padding: 1.2em 1.5em;
    border-radius: 5px;
    width: 100%;

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

      ${media.smDesktop`
        margin-top: -3px;
        margin-bottom: 3px;
      `}
    }

    &::-webkit-input-placeholder {
      color: ${colors.lightGrayishBlue};
    }
  }

  & .isActive:active,
  & .isActive:focus {
    border: 2px solid;
    border-color: ${colors.softRed};
  }

  & .icon {
    display: none;
    position: relative;
  }

  & .error {
    display: block;
    position: absolute;
    top: 0.65em;
    right: 1em;

    ${media.smDesktop`
      left: 7em;      
    `}
  }
`;

const StyledContent = styled.div`
  margin: 0 8%;
  padding: 2.2em 0;
  text-align: center;

  ${media.smDesktop`
    margin: 0 auto;
    width: 450px;
  `}
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

  ${media.mdDesktop`
    font-size: ${fontSizes.xxl};
  `}

  ${media.lgDesktop`
    font-size: ${fontSizes.xxxl};
  `}
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2em auto;
  height: 7em;

  ${media.smDesktop`
    display: grid;
    grid-template-columns: 300px 125px;
    column-gap: 1em;
    height: 3.5em;
  `}
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

  const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  // focus input
  const focus = () => ref.current.focus();

  //Hide error
  const hideError = () =>
    setTimeout(() => {
      setErrors({ ...errors, name: "" });
    }, 5000);

  const handleChange = (e) =>
    setEmail({ ...email, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validations
    // empty field
    if (email.email === "") {
      setErrors({ ...errors, name: "Whoops, empty field" });

      focus();

      return hideError();
    }

    //min 8
    if (email.email.length < 8) {
      setErrors({
        ...errors,
        name: "Whoops, must be at least 8 characters or more",
      });

      focus();

      return hideError();
    }

    //verify email
    if (!regExp.test(email.email)) {
      setErrors({
        ...errors,
        name: "Whoops, make sure it's an email",
      });

      focus();

      return hideError();
    }

    setErrors({ ...errors, name: "" });

    alert(`Sending to ${email.email}`);

    setEmail({ email: "" });
  };

  return (
    <StyledContainer id="contact">
      <StyledContent>
        <StyledTinyTitle>{tinyTitle}</StyledTinyTitle>

        <StyledTitle>{title}</StyledTitle>

        <StyledForm onSubmit={handleSubmit} noValidate>
          <div>
            <input
              ref={ref}
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email.email}
              className={`email ${errors.name !== "" && "isActive"}`}
              onChange={handleChange}
            />

            {errors.name !== "" && <span>{errors.name}</span>}

            <i className={`icon ${errors.name !== "" && "error"}`}>
              <FormattedIcons name={utils.iconError} />
            </i>
          </div>

          <div>
            <Button
              className="FormButton"
              background={colors.softRed}
              bShadow="none"
              border={colors.softRed}
              title="Contact Us"
            />
          </div>
        </StyledForm>
      </StyledContent>
    </StyledContainer>
  );
};

export default Contact;
