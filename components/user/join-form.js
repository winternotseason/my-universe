"use client";

import classes from "./join-form.module.css";
import { useFormState } from "react-dom";
import { signup } from "@/actions/auth-action.js";

export default function JoinForm() {
  const [formState, formAction] = useFormState(signup, {});
  return (
    <div className={classes.join}>
      <form className={classes.joinform} action={formAction}>
        <h1>MAKE YOUR UNIVERSE</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </p>
        <p>
          <label htmlFor="password-confirm">Password Confirm</label>
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
          />
        </p>
        <p>
          <button className={classes.create}>CREATE</button>
          <button className={classes.login}>LOGIN</button>
        </p>
        <p className={classes.errorMessage}>
          {formState.errors && <>{formState.errors.msg}</>}
        </p>
      </form>
    </div>
  );
}
