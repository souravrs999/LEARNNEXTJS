import { useState, useCallback, useRef, useEffect } from "react";

function RecursiveTimeout(callback, delay) {
  const [isRunning, setIsRunning] = useState(false);
  const stop = useCallback(() => setIsRunning(false), [setIsRunning]);
  const play = useCallback(() => setIsRunning(true), [setIsRunning]);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning) return;
    let id = 0;

    function tick() {
      if (!isRunning) return clearTimeout(id);
      savedCallback.current();
      requestAnimationFrame(() => (id = setTimeout(tick, delay)));
    }
    requestAnimationFrame(() => (id = setTimeout(tick, delay)));

    return () => {
      if (id) clearTimeout(id);
      stop();
    };
  }, [isRunning, delay, stop]);

  return { play, stop };
}

export default RecursiveTimeout;
