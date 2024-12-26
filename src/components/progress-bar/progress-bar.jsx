import { useEffect } from "react";
import { useState } from "react";

const getNewPercent = () => {
  return Math.floor(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const ProgressBar = ({ style }) => {
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

  return (
    <div
      style={{
        ...style,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "10px",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "red",
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
