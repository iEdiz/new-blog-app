"use client";

import { login } from "@/lib/action";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username..." name="username" />
      <input type="password" placeholder="Password..." name="password" />
      <button className={styles.button}>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b className={styles.register}>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
