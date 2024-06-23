import Link from "next/link";
import ChannelSpan from "./font-channel";
import NavLink from "./nav-link";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink href="/channel">
              <ChannelSpan>U</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/n">
              <ChannelSpan>N</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/i">
              <ChannelSpan>I</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/v">
              <ChannelSpan>V</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/e">
              <ChannelSpan>E</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/r">
              <ChannelSpan>R</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/s">
              <ChannelSpan>S</ChannelSpan>
            </NavLink>
          </li>
          <li>
            <NavLink href="/channel/e-1">
              <ChannelSpan>E</ChannelSpan>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
