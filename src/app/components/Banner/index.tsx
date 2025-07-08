'use client';

export default function Banner () {
    return (
        <>
        <section className="home-page">
            <div className="img-container">

            <img src="/images/my-pic.jpeg" alt="me" className="my-pic" />
            </div>
            <h1 className="ttl">Hi, I'm Salim Ansari</h1>
            <p className="desg">Software Engineer</p>
            <ul className="skill-list">
                <li className="skill-item">NextJS</li>
                <li className="skill-item">ReactJS</li>
                <li className="skill-item">NodeJS</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">HTML</li>
                <li className="skill-item">CSS</li>
            </ul>
            <button className="kn-mr">Know More &rarr;</button>
        </section>
        <style jsx>{`
         .home-page {height: 800px;display: flex; flex-direction: column; justify-content: center; align-items: center; background: #ccc;}
            .img-container {width: 250px; margin: 24px auto; }
            .my-pic {width: 220px; height: 220px; border-radius: 100%;background-position: center; 
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;
  }
  .ttl {font-size: 40px; font-weight: bold; margin-bottom: 28px; }
  .desg {font-size: 32px; font-weight: bold; margin-bottom: 28px;}
  .skill-list {display: flex; gap: 8px; margin-bottom: 28px; position: relative;}
  .skill-item {font-size: 18px; padding: 12px;}
  .skill-item:not(:last-child)::after {content: "|"; position: absolute; margin-left: 12px;}
  .kn-mr {font-size: 18px;margin-bottom: 28px; border: 2px solid #000; border-radius: 8px; padding: 12px 24px;}
        `}</style>
        </>
    );
}