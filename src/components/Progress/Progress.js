import { useEffect, useState } from "react";
import "./Progress.css";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = total > 0 ? (scrolled / total) * 100 : 0;
      setProgress(percentage);
    };

    window.addEventListener("scroll", calculatePercentage);
    return () => {
      window.removeEventListener("scroll", calculatePercentage);
    };
  }, []);

  return (
    <progress value={progress} max={100}></progress>
  );
};

export default Progress;
