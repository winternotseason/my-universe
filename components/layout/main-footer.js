import { logout } from "@/actions/auth-action";
import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import classes from "./main-footer.module.css";

export default async function MainFooter() {
  const result = await verifyAuth();
  
  return (
    <footer className={classes.footer}>
      <div className={classes.disconnect}>
        <Link href="/">
          <button>DISCONNECT</button>
        </Link>
      </div>
      <div className={classes.usermanu}>
        {result.user  ? (
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
