"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const ProgressBar = styled.div`
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  width: 20rem;
  height: 25px;
  border: 3px solid white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;

const progress = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;
const Progress = styled.div`
  height: 100%;
  background-color: white;
  animation: ${progress} 2s linear forwards;
`;

export const LoadingProgressBar = () => {
  const [isVisible, setIsVisible] = useState(true);

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
          <ProgressBar>
            <Progress />
          </ProgressBar>
        </>
      )}
    </>
  );
};
