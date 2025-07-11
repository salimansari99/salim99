'use client';
export default function Projects() {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Yuji+Mai&display=swap"
        rel="stylesheet"
      />
        <section className="projects-container">
            <div className="coming-soon">
                Coming Soon...
            </div>
        </section>
        <style jsx>{`
        .projects-container {width: 100%;height: 70vh; margin: 24px auto; padding: 12px;}
        .coming-soon {display: flex; justify-content: center; align-items: center; font-size: 32px;}
        `}</style>
        </>
    );
}