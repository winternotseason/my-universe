"use client";
import classes from "./progress-bar.module.css";
import { useEffect, useState } from "react";

export const LoadingProgressBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // 2초뒤에 progress Bar 사라짐
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div className={classes.progressBar}>
            <div className={classes.progress} />
          </div>
        </>
      )}
    </>
  );
};
