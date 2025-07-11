'use client';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.homePage}>
      <div className={styles.imgContainer}>
        <img src="/images/my-pic.jpeg" alt="me" className={styles.myPic} />
      </div>
      <h1 className={styles.ttl}>Hi, I'm Salim Ansari</h1>
      <p className={styles.desg}>Software Engineer</p>
      <ul className={styles.skillList}>
        <li className={styles.skillItem}>NextJS</li>
        <li className={styles.skillItem}>ReactJS</li>
        <li className={styles.skillItem}>NodeJS</li>
        <li className={styles.skillItem}>JavaScript</li>
        <li className={styles.skillItem}>HTML</li>
        <li className={styles.skillItem}>CSS</li>
      </ul>
      <a href="/about" className={styles.knowMore}>Know More &rarr;</a>
    </section>
  );
}