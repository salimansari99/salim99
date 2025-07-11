'use client';
export default function About() {
  return (
    <>
      <section className="about-me">
        <h2 className="ttl">About Me</h2>

        <div className="about-desc">
          <p className="about-para">
            Hi, I’m <span className="highlight">Salim Ansari</span>, a Software Development Engineer (SDE1)  
             at   <span className="highlight">Network18 Media & Investment Limited</span>, where I build scalable,
            user-centric web applications that power one of India’s leading
            digital media networks.
          </p>
          <p className="about-para">
            With a span foundation in <span className="highlight">JavaScript, React.js, Node.js</span>, and
            modern web development practices, I specialize in delivering
            high-performance, accessible, and responsive interfaces that serve
            millions of users across platforms. I enjoy solving complex
            engineering problems, optimizing code for performance, and
            collaborating across teams to ship features that directly impact the
            digital media experience.
          </p>
          <p className="about-para">
            I’m particularly passionate about working at the intersection 
            of <span className="highlight">technology and content</span>, enabling fast, reliable delivery of news and
            media to users nationwide. Whether it’s building reusable UI
            components, improving API integrations, or enhancing frontend
            performance, I take pride in writing clean, maintainable code that
            drives business value.
          </p>
          <p className="about-para">
            Outside of work, I’m constantly learning — exploring new tools in
            the web ecosystem, contributing to side projects, and staying
            updated with emerging trends in tech and product design.
          </p>
          <p className="about-para nm">salim...&#9997;</p>
        </div>
      </section>
      <style jsx>{`
      .about-me {width: 50%; height: 600px; margin: 32px auto; padding: 12px;}
      .highlight {font-weight: bold;}

      .about-para {margin-bottom: 12px; font-weight: 500; font-size: 18px; font-family: "Ubuntu", sans-serif;}
      .nm {text-align: center; font-size: 24px; font-weight: bold; margin-block: 12px;font-family: cursive;}

      @media (max-width: 768px) {
       .about-me {width: 100%; height: auto; margin: 32px 0; padding: 12px;}
      }

      `}</style>
    </>
  );
}
