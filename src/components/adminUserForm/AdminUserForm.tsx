"use client";

import React from "react";
import styles from "./AdminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1 className={styles.title}>Add New User</h1>
      <input type="text" name="username" placeholder="Username..." className={styles.input} />
      <input type="email" name="email" placeholder="Email..." className={styles.input} />
      <input type="password" name="password" placeholder="Password..." className={styles.input} />
      <input type="text" name="image" placeholder="Image..." className={styles.input} />
      <select name="isAdmin" id="" >
        <option value="false">Default</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button className={styles.button}>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
