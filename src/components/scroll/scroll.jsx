import { useEffect } from "react";
import { useState } from "react";

const getNewPercent = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    ) + "%"
  );
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleSсroll = () => {
      setProgress(getNewPercent());
    };

    window.addEventListener("scroll", handleSсroll);

    return () => {
      window.removeEventListener("scroll", handleSсroll);
    };
  }, []);

  return progress;
};
