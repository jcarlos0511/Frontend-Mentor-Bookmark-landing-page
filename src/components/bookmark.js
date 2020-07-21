import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
    </BookmarkState>
  );
};

export default Bookmark;
