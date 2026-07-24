// src/hooks/useTypewriter.js
import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [display, setDisplay] = useState('');
  const index = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(index.current));
      index.current++;
      if (index.current === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return display;
};

export default useTypewriter;