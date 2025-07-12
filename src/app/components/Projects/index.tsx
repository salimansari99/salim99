'use client';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section className={styles.projectsContainer}>
            <h2 className={styles.title}>Experience</h2>
            <ul className={styles.projectsList}>
                <li className={styles.projectItem}>
                    <div className={styles.projectTop}>
                        {/* <img className={styles.suitcaseIc} src="/images/briefcase.png" alt="" /> */}
                        <h4 className={styles.projectName}>The Thought Waves</h4>
                    </div>
                    <p className={styles.projectDesc}>
                        Thought Waves – A Modern Blogging Platform for Insightful Minds
                    </p>
                    <ul className={styles.descList}>
                        <li>✍️ Showcases well-researched articles on AI, technology, travel, and creativity.</li>
                        <li>📱 Optimized for all devices with a clean and engaging UI.</li>
                        <li>🧩 Features include blog listings, individual post pages, and popular posts section.</li>
                    </ul>
                    <ul className={styles.technologies}>
                        <li className={styles.techItem}>ReactJS</li>
                        <li className={styles.techItem}>NextJS</li>
                        <li className={styles.techItem}>TypeScript</li>
                    </ul>
                    <div className={styles.demo}>
                        <img className={styles.linkIc} src="/images/link.png" alt="Link" />
                        <a href="https://thought-waves.vercel.app/" className={styles.demoLink}>Demo</a>
                    </div>
                </li>
            </ul>
        </section>
    );
}