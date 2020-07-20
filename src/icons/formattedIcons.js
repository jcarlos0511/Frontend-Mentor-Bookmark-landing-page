import React from "react";
import { LogoBookmark, IconHamburger } from ".";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "LogoBookmark":
      return <LogoBookmark />;

    case "IconHamburger":
      return <IconHamburger />;

    default:
      return null;
  }
};

export default FormattedIcons;
