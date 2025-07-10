'use client';
export default function Projects() {
    return (
        <>
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