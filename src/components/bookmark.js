import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero, Features, Extension, Faq, Contact } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Contact />
    </BookmarkState>
  );
};

export default Bookmark;
