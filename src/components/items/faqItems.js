import React, { useState, useRef } from "react";
import { FormattedIcons } from "../../icons";
import styled from "styled-components";

const StyledAnswer = styled.p`
  border: 1px solid red;
`;
const FaqItems = ({ acc, iconArrow }) => {
  const { id, question, answer } = acc;

  const [state, setState] = useState({ acc: "" });
  const ref = useRef(false);
  console.log(ref.current.checked);
  return (
    <li>
      <input
        type="radio"
        name="acc"
        id={id}
        value={id}
        onChange={(e) =>
          setState({ ...state, [e.target.name]: e.target.value })
        }
        ref={ref}
        checked={state.acc === id}
      />
      <p>{question}</p>
      <label htmlFor={id}>
        <FormattedIcons name={iconArrow} />
      </label>
      {state.acc === id ? <StyledAnswer>{answer}</StyledAnswer> : null}
    </li>
  );
};

export default FaqItems;
