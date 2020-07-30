import { useState, useEffect } from "react";

export const useScroll = () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
    direction: "none",
  });
  const { x, y, direction } = scroll;

  const listener = () => {
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    setScroll((prev) => ({
      x: window.scrollX,
      y: window.scrollY,
      direction: prev.y > window.scrollY ? "up" : "down",
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return { x, y, direction };
};
