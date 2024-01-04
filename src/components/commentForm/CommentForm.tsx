"use client";

import React from "react";
import styles from "./CommentForm.module.css";
import { useFormState } from "react-dom";
import { addComment } from "@/lib/action";

type CommentPostProp = {
    blogId: string,
}

const CommentPostForm = ({ blogId }: CommentPostProp) => {
  const [state, formAction] = useFormState(addComment, undefined);

  return (
    <form onSubmit={formAction} className={styles.container}>
      <h1 className={styles.title}>Add New Post</h1>
      <input type="hidden" name="blogId" value={blogId} />
      <input type="text" name="desc" placeholder="Comment..." />
      <button type="submit" className={styles.button}>
        Add Comment
      </button>
      {state && state.error && <div className={styles.error}>{state.error}</div>}
    </form>
  );
};

export default CommentPostForm;
