import { useEffect, useState } from "react";

/**
 * Cycles through a list of words with a typewriter / delete effect.
 * Returns the current substring to render.
 */
export function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 45, holdTime = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), holdTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return text;
}
