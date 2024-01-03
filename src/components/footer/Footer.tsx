import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>EddBlog</div>
      <div className={styles.text}>
        Ediz © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;