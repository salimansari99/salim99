'use client';
export default function Experience() {
    return (
        <>
        <section className="exp-container">
             <h2 className="title">Experience</h2>
             <div className="experience-wrapper">
                <div className="exp-item">
                    <h4 className="desg">Software Development Engineer 1</h4>
                    <div className="comp-dur">
 <a href="https://www.nw18.com/" className="comp-name">
Network18 Media & Investments Limited</a>
                    <p className="time">June 2023 - Present</p>
                    </div>
                   
                    <ul className="key-res">
                        <li className="key-item">Developing dynamic, high-performance web interfaces using Next.js, React.js, JavaScript, and TypeScript, with a focus on performance, reusability, and maintainability.</li>
                        <li className="key-item">Building RESTful APIs and backend services using Node.js and Express.js, ensuring secure and efficient communication between client and server.</li>
                        <li className="key-item">Implementing responsive UI components with HTML5, CSS3, and modern CSS frameworks, optimizing for cross-browser compatibility and accessibility.</li>
                        <li className="key-item">Participating in code reviews, sprint planning, and agile ceremonies to ensure code quality and timely delivery.</li>
                        <li className="key-item">Collaborating with product, QA, and DevOps teams to release reliable features in production.</li>
                       

                    </ul>
                    <h4 className="subttl">Technologies</h4>
                    <ul className="technologies">
                        <li className="tech-item" style={{color: '#4e79a7'}}> JavaScript</li>
                        <li className="tech-item" style={{color: '#f28e2b'}}> React.js  </li>
                        <li className="tech-item" style={{color: '#e15759'}}> Next.js </li>
                        <li className="tech-item" style={{color: '#9c755f'}}> Node.js</li>
                        <li className="tech-item" style={{color: '#59a14f'}}> Express.js </li>
                        <li className="tech-item" style={{color: '#af7aa1'}}>  MongoDB </li>
                    </ul>
                </div>
             </div>
        </section>
        <style jsx>{`
        .exp-container {width: 45%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0 auto; gap: 10px; font-family: "Ubuntu", sans-serif;}
         .experience-wrapper {display: flex; gap: 10px;position: relative;}
        .experience-wrapper::before {content: ''; position: absolute; border-left: 5px solid #ccc;width: 5px;height: 90%;
    left: -28px;    border-radius: 100%;}
        .title {font-size: 32px; font-weight: bold; margin-block: 40px;}
       
        .exp-item {display: flex; gap: 10px;margin-bottom: 60px; flex-direction: column;}
        .desg {font-size: 28px; font-weight: bold; }
        .comp-dur {display: flex; gap: 40px; justify-content: flex-start; margin-bottom: 12px;}
        .comp-name {font-size: 18px; color: #007bff }
        .time {font-size: 18px;}
        .key-res {}
        .key-item {font-size: 18px; font-weight: 500; margin-bottom: 10px; padding-left: 15px; display: block; position: relative;}
        .key-item::before {content: "";
    background: #ca7070;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    margin-right: 10px;
    position: absolute;
    left: -4px;
    top: 6px;}
        .tech-item {font-size: 18px; font-weight: bold;display: inline-block; margin: 10px 20px 10px 0; background: #ddd; padding: 10px; border-radius: 16px;
        text-decoration: underline;}
        .subttl {font-size: 22px; font-weight: bold;}
        @media (max-width: 768px) {
        .exp-container  {width: 100%; padding: 10px;}
        .title {margin-block: 12px; }
        .desg {font-size: 24px;}
        }
        `}</style>
        </>
    );
}