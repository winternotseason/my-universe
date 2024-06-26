"use client";

import classes from "./join-form.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signup } from "@/actions/auth-action";

export default function JoinForm() {
  const [formState, formAction] = useFormState(signup, {});
  
  return (
    <form className={classes.joinform} action={formAction}>
      <h1>MAKE YOUR UNIVERSE</h1>
      <p>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      <p>
        <label htmlFor="password-confirm">Password Confirm</label>
        <input type="password" id="password-confirm" name="password-confirm" />
      </p>
      <p>
        <button type="submit">CREATE</button>
        <Link href="/login">
         Login with exisiting account
        </Link>
      </p>
      <p className={classes.errorMessage}>
       {formState.errors && formState.errors.msg}
      </p>
    </form>
  );
}
