import React from "react";
import { IllustrationHero } from "../images";

const FormattedImages = ({ name }) => {
  switch (name) {
    case "IllustrationHero":
      return <IllustrationHero />;

    default:
      return null;
  }
};

export default FormattedImages;
