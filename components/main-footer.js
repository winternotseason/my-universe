import Link from "next/link";
import classes from "./main-footer.module.css";

export default function MainFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.disconnect}>
        <Link href="/">
          <p>DISCONNECT</p>
        </Link>
      </div>
      <div className={classes.i}>
        <Link href="">
          <p>JOIN</p>
        </Link>
        <Link href="">
          <p>LOGIN</p>
        </Link>
      </div>
    </footer>
  );
}
