import { useState, useEffect } from "react";

/**
 * https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5?permalink_comment_id=3455093#gistcomment-3455093
 */
export const useKeyPressed = (keyLookup: (event: KeyboardEvent) => boolean) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = (ev: KeyboardEvent) => setKeyPressed(keyLookup(ev));
    const upHandler = (ev: KeyboardEvent) => setKeyPressed(keyLookup(ev));

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keyLookup]);

  return keyPressed;
};
