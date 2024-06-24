"use client";

import classes from "./login-form.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth-action";

export default function LoginForm() {
  const [formState, formAction] = useFormState(login, {});
  return (
    <form className={classes.loginform} action={formAction}>
      <h1>LOGIN</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      <p>
        <button>LOGIN</button>
      </p>
      <p className={classes.errorMessage}>
        {formState.errors && formState.errors.msg}
      </p>
    </form>
  );
}
