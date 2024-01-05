import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span className={styles.singleLetter}>E</span>levate <span className={styles.singleLetter}>D</span>iscover <span className={styles.singleLetter}>B</span>lossom
        </h1>
        <p className={styles.desc}>
          Welcome, kindred spirits, to the enchanting haven of the Capybara Monk Temple! Here, amid the whispers of
          nature and the gentle sway of bamboo, you are embraced by the warm embrace of serenity and wisdom.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.button}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/capybara.png" alt="" width={700} height={700} className={styles.mainImg} />
      </div>
    </div>
  );
};

export default Home;
