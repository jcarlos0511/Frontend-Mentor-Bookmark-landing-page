import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero, Features, Extension } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
      <Features />
      <Extension />
    </BookmarkState>
  );
};

export default Bookmark;
