"use client";

import classes from "./mobile-header.module.css";
import HamburgerManu from "./hamburger-manu";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileHeader() {
  const [manuOpen, setManuOpen] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.hambugerbtn} onClick={() => setManuOpen(true)}>
        <RxHamburgerMenu />
      </div>
      <HamburgerManu manuOpen={manuOpen} setManuOpen={setManuOpen} />
    </header>
  );
}
