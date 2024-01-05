import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brands}>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Image src="/youtube.png" alt="brands" width={45} height={35} className={styles.brandImg} />
        </Link>
        <Link href="https://www.twitch.tv/">
          <Image src="/twitch.png" alt="brands" width={35} height={35} className={styles.brandImg} />
        </Link>
        <Link href="https://twitter.com">
          <Image src="/twitter.png" alt="brands" width={35} height={35} className={styles.brandImg} />
        </Link>
        <Link href="https://github.com/iEdiz">
          <Image src="/github.png" alt="brands" width={35} height={35} className={styles.brandImg} />
        </Link>
      </div>
      <div className={styles.copyright}>Copyright © 2024 EddBlog. All rights reserved.</div>
    </div>
  );
};

export default Footer;
