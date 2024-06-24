"use client";

import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import classes from "./login-form.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const submitHandler = async () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    if (!result.error) {
      router.replace('/channel');
    }
  };
  return (
    <form className={classes.loginform} action={submitHandler}>
      <h1>LOGIN</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" ref={emailInputRef} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordInputRef}
        />
      </p>
      <p>
        <button>LOGIN</button>
      </p>
      <p className={classes.errorMessage}></p>
    </form>
  );
}
