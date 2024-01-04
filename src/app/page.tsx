import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem
          assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.button}>
            Contact
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/capybara.png" alt="" fill className={styles.mainImg} />
      </div>
    </div>
  );
};

export default Home;
