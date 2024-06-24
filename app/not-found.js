import Link from "next/link";
import classes from "./not-found.module.css";
export default function NotFound() {
  return (
    <div className={classes.notfound}>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link href="/">Return to Connection</Link>
    </div>
  );
}
