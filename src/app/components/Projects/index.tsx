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
                        <h4 className={styles.projectName}>TodoPilot</h4>
                    </div>
                    <p className={styles.projectDesc}>
                        TodoPilot – Your personal productivity co-pilot.
                    </p>
                    <ul className={styles.descList}>
                        <li>✅ Full CRUD Functionality – Seamlessly create, read, update, and delete tasks with an intuitive interface.</li>
                        <li>📱 Responsive & Minimal UI – Optimized for all devices to provide a smooth user experience across platforms.</li>
                        <li>⚙️ Tech-Driven Productivity – Built using modern technologies like React, Next.js, and TypeScript for efficiency and scalability.</li>
                    </ul>
                    <ul className={styles.technologies}>
                        <li className={styles.techItem}>ReactJS</li>
                        <li className={styles.techItem}>NextJS</li>
                        <li className={styles.techItem}>JavaScript</li>
                        <li className={styles.techItem}>Context API</li>
                    </ul>
                    <div className={styles.demo}>
                        <img className={styles.linkIc} src="/images/link.png" alt="Link" />
                        <a href="https://todo-pilot.vercel.app/" className={styles.demoLink}>Demo</a>
                    </div>
                </li>
                <li className={styles.projectItem}>
                    <div className={styles.projectTop}>
                        {/* <img className={styles.suitcaseIc} src="/images/briefcase.png" alt="" /> */}
                        <h4 className={styles.projectName}>The InsightPress</h4>
                    </div>
                    <p className={styles.projectDesc}>
                        The InsightPress – A Modern Media Website for News and Articles.
                    </p>
                    <ul className={styles.descList}>
                        <li>Built a responsive and user-friendly news platform using React/Next.js with modern UI components for browsing articles by categories.</li>
                        <li>Implemented user authentication and subscription flows (login, signup, and membership features) to enhance personalization and access control.</li>
                        <li>Designed and optimized article listing, search, and category-based filtering for seamless content discovery and improved user experience across devices.</li>
                    </ul>
                    <ul className={styles.technologies}>
                        <li className={styles.techItem}>ReactJS</li>
                        <li className={styles.techItem}>NextJS</li>
                        <li className={styles.techItem}>JavaScript</li>
                        <li className={styles.techItem}>Context API</li>
                    </ul>
                    <div className={styles.demo}>
                        <img className={styles.linkIc} src="/images/link.png" alt="Link" />
                        <a href="https://insightpress-media-frontend.vercel.app/" className={styles.demoLink}>Demo</a>
                    </div>
                </li>
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
                <li className={styles.projectItem}>
                    <div className={styles.projectTop}>
                        {/* <img className={styles.suitcaseIc} src="/images/briefcase.png" alt="" /> */}
                        <h4 className={styles.projectName}>Byte Space</h4>
                    </div>
                    <p className={styles.projectDesc}>
                        ByteSpace – bite-sized yet impactful tech content.
                    </p>
                    <ul className={styles.descList}>
                        <li>✍️ Integrated secure login/signup using Google OAuth for a seamless and quick onboarding experience.</li>
                        <li>📱 	Includes an interactive contact form and links to social media profiles.</li>
                        <li>🧩 Modular page structure for easy addition of new sections like community discussions or podcast episodes in the future.</li>
                    </ul>
                    <ul className={styles.technologies}>
                        <li className={styles.techItem}> Next.js (React Framework)</li>
                        <li className={styles.techItem}>NextAuth.js with Google OAuth</li>
                        <li className={styles.techItem}>Zustand (State Management Library)</li>
                    </ul>
                    <div className={styles.demo}>
                        <img className={styles.linkIc} src="/images/link.png" alt="Link" />
                        <a href="https://bytespace-omega.vercel.app/" className={styles.demoLink}>Demo</a>
                    </div>
                </li>
            </ul>
        </section>
    );
}