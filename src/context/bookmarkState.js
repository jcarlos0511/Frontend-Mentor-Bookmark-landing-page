import React, { useState } from "react";
import { data } from "../data";
import BookmarkContext from "./bookmarkContext";

const BookmarkState = (props) => {
  const [state, SetState] = useState(data.bookmark);

  return (
    <BookmarkContext.Provider value={{ data: state, SetState }}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkState;
