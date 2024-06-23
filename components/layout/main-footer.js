import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import classes from "./main-footer.module.css";
import { logout } from "@/actions/auth-action";

export default async function MainFooter() {
  const result = await verifyAuth();
  return (
    <footer className={classes.footer}>
      <div className={classes.disconnect}>
        <Link href="/">
          <button>DISCONNECT</button>
        </Link>
      </div>
      <div className={classes.i}>
        {result.user ? (
          <form action={logout}>
            <button>LOGOUT</button>
          </form>
        ) : (
          <Link href="/login">
            <button>LOGIN</button>
          </Link>
        )}
        <Link href="/join">
          <button>JOIN</button>
        </Link>
      </div>
    </footer>
  );
}
