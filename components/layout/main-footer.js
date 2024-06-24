"use client";

import Link from "next/link";
import classes from "./main-footer.module.css";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MainFooter() {
  const { data: session, status } = useSession();
const router = useRouter();
const logoutHandler = () => {
  fetch('api/auth/logout')
};
  return (
    <footer className={classes.footer}>
      <div className={classes.disconnect}>
        <Link href="/">
          <button>DISCONNECT</button>
        </Link>
      </div>
      <div className={classes.usermanu}>
        {status === "authenticated" ? (
          <form>
            <button onClick={logoutHandler}>LOGOUT</button>
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
