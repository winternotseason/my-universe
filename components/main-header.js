import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/channel">A</Link>
          </li>
          <li>
            <Link href="/channel/b">B</Link>
          </li>
          <li>
            <Link href="/channel/c">C</Link>
          </li>
          <li>
            <Link href="/channel/d">D</Link>
          </li>{" "}
          <li>
            <Link href="/channel/e">E</Link>
          </li>
          <li>
            <Link href="/channel/f">F</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
