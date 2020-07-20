import React from "react";
import BookmarkState from "../context/bookmarkState";
import { Nav } from ".";

const Bookmark = () => {
  return (
    <BookmarkState>
      <Nav />
    </BookmarkState>
  );
};

export default Bookmark;
