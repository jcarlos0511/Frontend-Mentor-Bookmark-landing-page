import React from "react";
import {
  LogoBookmark,
  IconHamburger,
  IconClose,
  IconFacebook,
  IconTwitter,
} from ".";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "LogoBookmark":
      return <LogoBookmark />;

    case "IconHamburger":
      return <IconHamburger />;

    case "IconClose":
      return <IconClose />;

    case "IconFacebook":
      return <IconFacebook />;

    case "IconTwitter":
      return <IconTwitter />;

    default:
      return null;
  }
};

export default FormattedIcons;
