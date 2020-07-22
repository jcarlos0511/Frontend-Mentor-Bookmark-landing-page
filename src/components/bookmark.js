import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero, Features } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
      <Features />
    </BookmarkState>
  );
};

export default Bookmark;
