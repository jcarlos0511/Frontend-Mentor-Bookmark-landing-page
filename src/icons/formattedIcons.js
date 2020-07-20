import React from "react";
import { LogoBookmark, IconHamburger, IconClose } from ".";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "LogoBookmark":
      return <LogoBookmark />;

    case "IconHamburger":
      return <IconHamburger />;

    case "IconClose":
      return <IconClose />;
    default:
      return null;
  }
};

export default FormattedIcons;
