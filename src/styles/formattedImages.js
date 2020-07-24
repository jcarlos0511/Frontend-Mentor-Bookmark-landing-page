import React from "react";
import {
  IllustrationHero,
  IllustrationFeaturesTab1,
  IllustrationFeaturesTab2,
  IllustrationFeaturesTab3,
} from "../images";

const FormattedImages = ({ name }) => {
  switch (name) {
    case "IllustrationHero":
      return <IllustrationHero />;

    case "IllustrationFeaturesTab1":
      return <IllustrationFeaturesTab1 />;

    case "IllustrationFeaturesTab2":
      return <IllustrationFeaturesTab2 />;

    case "IllustrationFeaturesTab3":
      return <IllustrationFeaturesTab3 />;

    default:
      return null;
  }
};

export default FormattedImages;
