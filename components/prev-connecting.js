"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { LoadingProgressBar } from "./progress-bar";
import { useEffect, useState } from "react";

const flicker = keyframes`
0% {opacity:0;}
9% {opacity:0;}
10% {opacity:.5;}
13% {opacity:0;}
20% {opacity:.5;}
25% {opacity:1;}`;

const ConnectButton = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 6rem;
  font-weight: 900;
  cursor: pointer;
  z-index: 1;
  span {
    animation: ${flicker} 2s infinite;
  }
`;

export default function PrevConneting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []); 

  return (
    <>
      <LoadingProgressBar />
      {isVisible && (
        <Link href="/main">
          <ConnectButton>
            <span>Connect</span>
          </ConnectButton>
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
