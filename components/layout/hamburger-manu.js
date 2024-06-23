"use client";

import ChannelSpan from "./font-channel";
import classes from "./hamburger-manu.module.css";
import NavLink from "./nav-link";

export default function HamburgerManu({ manuOpen, setManuOpen }) {
  return (
    <ul
      className={
        manuOpen ? `${classes.hamburger} ${classes.open}` : classes.hamburger
      }
    >
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel">
          <ChannelSpan>U</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/n">
          <ChannelSpan>N</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/i">
          <ChannelSpan>I</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/v">
          <ChannelSpan>V</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/e">
          <ChannelSpan>E</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/r">
          <ChannelSpan>R</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/s">
          <ChannelSpan>S</ChannelSpan>
        </NavLink>
      </li>
      <li
        onClick={() => {
          setManuOpen(false);
        }}
      >
        <NavLink href="/channel/e-1">
          <ChannelSpan>E</ChannelSpan>
        </NavLink>
      </li>
    </ul>
  );
}


// false일떄 햄버거 메뉴 사라지게 해야함. open 클래스 삭제
// true일때 나타나게 left: 0줌