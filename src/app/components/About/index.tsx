'use client';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.ttl}>About Me</h2>

      <div className={styles.aboutDesc}>
        <p className={styles.aboutPara}>
          Hi, I’m <span className={styles.highlight}>Salim Ansari</span>, a Software Development Engineer (SDE1)  
          at <span className={styles.highlight}>Network18 Media & Investment Limited</span>, where I build scalable,
          user-centric web applications that power one of India’s leading
          digital media networks.
        </p>
        <p className={styles.aboutPara}>
          With a span foundation in <span className={styles.highlight}>JavaScript, React.js, Node.js</span>, and
          modern web development practices, I specialize in delivering
          high-performance, accessible, and responsive interfaces that serve
          millions of users across platforms. I enjoy solving complex
          engineering problems, optimizing code for performance, and
          collaborating across teams to ship features that directly impact the
          digital media experience.
        </p>
        <p className={styles.aboutPara}>
          I’m particularly passionate about working at the intersection 
          of <span className={styles.highlight}>technology and content</span>, enabling fast, reliable delivery of news and
          media to users nationwide. Whether it’s building reusable UI
          components, improving API integrations, or enhancing frontend
          performance, I take pride in writing clean, maintainable code that
          drives business value.
        </p>
        <p className={styles.aboutPara}>
          Outside of work, I’m constantly learning — exploring new tools in
          the web ecosystem, contributing to side projects, and staying
          updated with emerging trends in tech and product design.
        </p>
        <p className={`${styles.aboutPara} ${styles.nm}`}>salim...&#9997;</p>
      </div>
    </section>
  );
}