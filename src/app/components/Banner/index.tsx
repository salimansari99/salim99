"use client";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.homePage}>
      <div className={styles.imgContainer}>
        <img src="/images/my-pic.jpeg" alt="me" className={styles.myPic} />
      </div>
      <h1 className={styles.ttl}>Hi, I'm Salim Ansari</h1>
      <p className={styles.desg}>SDE 2 | Software Development Engineer</p>
      <p className={styles.subtitle}>
        Building scalable solutions with modern technologies
      </p>
      <ul className={styles.skillList}>
        <li className={styles.skillItem}>Next.js</li>
        <li className={styles.skillItem}>React</li>
        <li className={styles.skillItem}>Node.js</li>
        <li className={styles.skillItem}>TypeScript</li>
        <li className={styles.skillItem}>JavaScript</li>
        <li className={styles.skillItem}>Full Stack</li>
      </ul>
      <div className={styles.ctaContainer}>
        <a href="/about" className={styles.knowMore}>
          Know More &rarr;
        </a>
        <a href="/contact" className={styles.contactBtn}>
          Get In Touch
        </a>
      </div>
    </section>
  );
}
