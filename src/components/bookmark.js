import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav, Hero, Features, Extension, Faq, Contact, Footer } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Contact />
      <Footer />
    </BookmarkState>
  );
};

export default Bookmark;
