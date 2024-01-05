"use client";

import React from "react";
import styles from "./AdminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1 className={styles.title}>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title..." className={styles.input}/>
      <input type="text" name="slug" placeholder="Slug..." className={styles.input}/>
      <input type="text" name="img" placeholder="Image link..." className={styles.input}/>
      <textarea name="desc" placeholder="Description..." rows={7} className={styles.input}/>
      <button className={styles.button}>Add</button>
      {state && state.error}
    </form> 
  );
};

export default AdminPostForm;
