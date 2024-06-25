"use client";

import classes from "./connect.module.css";
import Link from "next/link";

import { LoadingProgressBar } from "./progress-bar";
import { useEffect, useState } from "react";

export default function Connect() {
  const [isVisible, setIsVisible] = useState(false);

  // Loading 효과 생성
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.background}>
      <LoadingProgressBar />
      {isVisible && (
        <Link href="/channel">
          <div className={classes.connect}>
            <span>Connect</span>
          </div>
        </Link>
      )}
    </div>
  );
}
