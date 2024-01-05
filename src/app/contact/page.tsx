import Image from "next/image";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Contact Us:</h1>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname..." className={styles.input} />
          <input type="text" placeholder="Email Address..." className={styles.input} />
          <input type="text" placeholder="Phone Number (Optional)" className={styles.input} />
          <textarea name="" id="" cols={30} rows={10} placeholder="Message..." className={styles.input}></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/gamerbara.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default ContactPage;
