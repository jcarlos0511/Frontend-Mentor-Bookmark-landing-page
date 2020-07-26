import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero, Features, Extension, Faq } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
      <Features />
      <Extension />
      <Faq />
    </BookmarkState>
  );
};

export default Bookmark;
