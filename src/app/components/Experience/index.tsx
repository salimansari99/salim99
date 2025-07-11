'use client';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.expContainer}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceWrapper}>
        <div className={styles.expItem}>
          <h4 className={styles.desg}>Software Development Engineer 1</h4>
          <div className={styles.compDur}>
            <a
              href="https://www.nw18.com/"
              className={styles.compName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network18 Media & Investments Limited
            </a>
            <p className={styles.time}>June 2023 - Present</p>
          </div>
          <h4 className={styles.desg}>Key Responsibilities & Technologies:</h4>

          <ul>
            <li className={styles.keyItem}>
              Developing dynamic, high-performance web interfaces using Next.js,
              React.js, JavaScript, and TypeScript, with a focus on performance,
              reusability, and maintainability.
            </li>
            <li className={styles.keyItem}>
              Building RESTful APIs and backend services using Node.js and
              Express.js, ensuring secure and efficient communication between
              client and server.
            </li>
            <li className={styles.keyItem}>
              Implementing responsive UI components with HTML5, CSS3, and modern
              CSS frameworks, optimizing for cross-browser compatibility and
              accessibility.
            </li>
            <li className={styles.keyItem}>
              Participating in code reviews, sprint planning, and agile ceremonies
              to ensure code quality and timely delivery.
            </li>
            <li className={styles.keyItem}>
              Collaborating with product, QA, and DevOps teams to release reliable
              features in production.
            </li>
          </ul>

          <h4 className={styles.subttl}>Technologies</h4>
          <ul>
            <li className={styles.techItem} style={{ color: '#4e79a7' }}>
              JavaScript
            </li>
            <li className={styles.techItem} style={{ color: '#f28e2b' }}>
              React.js
            </li>
            <li className={styles.techItem} style={{ color: '#e15759' }}>
              Next.js
            </li>
            <li className={styles.techItem} style={{ color: '#9c755f' }}>
              Node.js
            </li>
            <li className={styles.techItem} style={{ color: '#59a14f' }}>
              Express.js
            </li>
            <li className={styles.techItem} style={{ color: '#af7aa1' }}>
              MongoDB
            </li>
          </ul>
        </div>
        <div className={styles.expItem}>
          <h4 className={styles.desg}>Trainee</h4>
          <div className={styles.compDur}>
            <a
              href="https://www.nw18.com/"
              className={styles.compName}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network18 Media & Investments Limited
            </a>
            <p className={styles.time}>June 2022 - July 2023</p>
          </div>
          <h4 className={styles.desg}>Key Responsibilities & Technologies:</h4>

          <ul>
            <li className={styles.keyItem}>
              Developed interactive user interfaces using React.js and JavaScript, focusing on component-based 
 architecture and state management.
            </li>
            <li className={styles.keyItem}>
              Built server-side rendered applications and optimized routing with Next.js.
            </li>
            <li className={styles.keyItem}>
             Created and managed backend APIs using Node.js and Express.js, integrating database operations 
 and middleware.
            </li>
            
          </ul>

          <h4 className={styles.subttl}>Technologies</h4>
          <ul>
            <li className={styles.techItem} style={{ color: '#4e79a7' }}>
              JavaScript
            </li>
            <li className={styles.techItem} style={{ color: '#f28e2b' }}>
              React.js
            </li>
            <li className={styles.techItem} style={{ color: '#e15759' }}>
              Next.js
            </li>
            <li className={styles.techItem} style={{ color: '#9c755f' }}>
              Node.js
            </li>
            <li className={styles.techItem} style={{ color: '#59a14f' }}>
              Express.js
            </li>
            <li className={styles.techItem} style={{ color: '#af7aa1' }}>
              HTML
            </li>
            <li className={styles.techItem} style={{ color: '#9c755f' }}>
              CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}