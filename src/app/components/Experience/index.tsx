"use client";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.expContainer}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.experienceWrapper}>
        {/* SDE-2 */}
        <div className={styles.expItem}>
          <h4 className={styles.desg}>Software Development Engineer II</h4>

          <div className={styles.compDur}>
            <a
              href="https://www.nw18.com/"
              className={styles.compName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network18 Media & Investments Limited
            </a>
            <p className={styles.time}>June 2025 – Present</p>
          </div>

          <p className={styles.summary}>
            Working on large-scale, high-traffic digital news platforms
            including
            <strong> CNBCTV18, Firstpost, and Forbes India</strong>, delivering
            performant, SEO-optimized, and highly reliable web experiences for
            millions of users.
          </p>

          <h4 className={styles.desg}>Key Responsibilities & Contributions</h4>
          <ul>
            <li className={styles.keyItem}>
              Leading development of scalable and performance-critical features
              using <strong>Next.js, React.js, TypeScript</strong>, optimized
              for server-side rendering and fast page loads.
            </li>
            <li className={styles.keyItem}>
              Architecting reusable UI components and frontend modules used
              across multiple Network18 media properties.
            </li>
            <li className={styles.keyItem}>
              Designing and implementing secure, high-performance REST APIs
              using <strong>Node.js and Express.js</strong>.
            </li>
            <li className={styles.keyItem}>
              Improving Core Web Vitals (LCP, CLS, INP) and SEO performance for
              content-heavy news platforms.
            </li>
            <li className={styles.keyItem}>
              Mentoring junior developers, reviewing pull requests, and driving
              best practices for code quality and maintainability.
            </li>
            <li className={styles.keyItem}>
              Collaborating closely with editorial, product, QA, and DevOps
              teams to ship reliable features under tight publishing deadlines.
            </li>
          </ul>

          <h4 className={styles.subttl}>Technologies</h4>
          <ul>
            <li className={styles.techItem}>JavaScript / TypeScript</li>
            <li className={styles.techItem}>React.js</li>
            <li className={styles.techItem}>Next.js</li>
            <li className={styles.techItem}>Node.js</li>
            <li className={styles.techItem}>Express.js</li>
            <li className={styles.techItem}>MongoDB</li>
          </ul>
        </div>

        {/* SDE-1 */}
        <div className={styles.expItem}>
          <h4 className={styles.desg}>Software Development Engineer I</h4>

          <div className={styles.compDur}>
            <a
              href="https://www.nw18.com/"
              className={styles.compName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network18 Media & Investments Limited
            </a>
            <p className={styles.time}>June 2023 – May 2025</p>
          </div>

          <h4 className={styles.desg}>Key Responsibilities & Contributions</h4>
          <ul>
            <li className={styles.keyItem}>
              Built and maintained production-grade features for leading digital
              news brands using <strong>Next.js and React.js</strong>.
            </li>
            <li className={styles.keyItem}>
              Implemented SSR, dynamic routing, and data-fetching strategies to
              support real-time news updates.
            </li>
            <li className={styles.keyItem}>
              Developed backend APIs and middleware to support content delivery,
              analytics, and platform integrations.
            </li>
            <li className={styles.keyItem}>
              Ensured responsive, accessible UI across devices and browsers for
              large-scale audiences.
            </li>
            <li className={styles.keyItem}>
              Actively participated in sprint planning, code reviews, and
              production deployments.
            </li>
          </ul>

          <h4 className={styles.subttl}>Technologies</h4>
          <ul>
            <li className={styles.techItem}>JavaScript</li>
            <li className={styles.techItem}>React.js</li>
            <li className={styles.techItem}>Next.js</li>
            <li className={styles.techItem}>Node.js</li>
            <li className={styles.techItem}>Express.js</li>
            <li className={styles.techItem}>MongoDB</li>
          </ul>
        </div>

        {/* Trainee */}
        <div className={styles.expItem}>
          <h4 className={styles.desg}>Software Engineer Trainee</h4>

          <div className={styles.compDur}>
            <a
              href="https://www.nw18.com/"
              className={styles.compName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network18 Media & Investments Limited
            </a>
            <p className={styles.time}>June 2022 – July 2023</p>
          </div>

          <h4 className={styles.desg}>Key Responsibilities & Learning</h4>
          <ul>
            <li className={styles.keyItem}>
              Developed interactive, component-driven user interfaces using
              <strong> React.js</strong>.
            </li>
            <li className={styles.keyItem}>
              Built server-rendered applications with <strong>Next.js</strong>
              and optimized routing and page performance.
            </li>
            <li className={styles.keyItem}>
              Created backend APIs using <strong>Node.js and Express.js</strong>
              , gaining hands-on experience with full-stack development.
            </li>
          </ul>

          <h4 className={styles.subttl}>Technologies</h4>
          <ul>
            <li className={styles.techItem}>JavaScript</li>
            <li className={styles.techItem}>React.js</li>
            <li className={styles.techItem}>Next.js</li>
            <li className={styles.techItem}>Node.js</li>
            <li className={styles.techItem}>Express.js</li>
            <li className={styles.techItem}>HTML5</li>
            <li className={styles.techItem}>CSS3</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
