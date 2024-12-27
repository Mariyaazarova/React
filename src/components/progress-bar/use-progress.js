import { useEffect } from "react";
import { useState } from "react";

const getNewPercent = () => {
  return Math.floor(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getNewPercent());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return `${progress}%`;
};
