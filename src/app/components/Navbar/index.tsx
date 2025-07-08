'use client';

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="left-item">
                <span className="logo">S</span>Salim Ansari
            </div>
            <ul className="nav-list">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/experience">Experience</a></li>
                <li className="nav-item"><a href="/projects">Projects</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
            {/* <div className=""></div> */}
        </nav>
        <style jsx>{`
        .navbar {display: flex;justify-content: space-between; align-items: center; height: 96px; background: #ccc; position: relative;padding: 0 32px;}
        .left-item {text-align: center;
    font-size: 32px;
    font-weight: bold;}
        .logo {color: #fff;
    background: #000;
    width: 48px;
    height: 48px;
    font-size: 32px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    margin-right: 12px;}
        .nav-list {display: flex; justify-content: center; align-items: center;}
        .nav-item {color: rgb(0 0 0 / 65%);font-size: 18px; font-weight: 500; padding: 12px;position: relative;}
        .nav-item:hover {color: #000; cursor: pointer;}
        .nav-item:not(:last-child)::after{content: '|';position: relative;margin-left: 12px;}
        `}</style>
        </>
    );
}