"use client";

import classes from "./connect.module.css";
import Link from "next/link";
import Image from "next/image";
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
    <>
      <Image fill className="texture" src="/break.png" alt="background" />
      <LoadingProgressBar />
      {isVisible && (
        <Link href="/channel">
          <div className={classes.connect}>
            <span>Connect</span>
          </div>
        </Link>
      )}
      <video autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2022/09/18/131735-751029898_large.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
