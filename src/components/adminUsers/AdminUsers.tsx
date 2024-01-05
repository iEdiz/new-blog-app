import React from "react";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import styles from "./AdminUsers.module.css";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users:</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image src={user.img || "/noAvatar.png"} alt="" width={50} height={50} />
            <span className={styles.userTitle}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
