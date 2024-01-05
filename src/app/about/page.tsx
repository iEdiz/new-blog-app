import Image from "next/image";
import styles from "./About.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.subtitle}>About EdBlog</h1>
        <p className={styles.title}>
          We believe in the transformative power of introspection, mindfulness, and the gentle teachings of capybara
          monks.
        </p>
        <h1 className={styles.subtitle}>What to Expect?</h1>
        <p className={styles.title}>
          EddBlog is more than just a collection of articles; it's a haven where words dance to the rhythm of capybara
          tales. Expect to find insightful posts on mindfulness, well-being, and personal development
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>5 K</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>2 K+</h1>
            <p>Inspiring stories</p>
          </div>
          <div className={styles.box}>
            <h1>8 K</h1>
            <p>Hours of Capy wisdom</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/capygif.gif"
          alt="About Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
