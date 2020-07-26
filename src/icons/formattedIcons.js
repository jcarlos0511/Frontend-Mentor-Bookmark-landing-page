import React from "react";
import {
  LogoBookmark,
  IconHamburger,
  IconClose,
  IconFacebook,
  IconTwitter,
  LogoChrome,
  LogoFirefox,
  LogoOpera,
  IconArrow,
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

    case "LogoChrome":
      return <LogoChrome />;

    case "LogoFirefox":
      return <LogoFirefox />;

    case "LogoOpera":
      return <LogoOpera />;

    case "IconArrow":
      return <IconArrow />;

    default:
      return null;
  }
};

export default FormattedIcons;
