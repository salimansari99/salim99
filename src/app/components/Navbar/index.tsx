'use client';
import Link from "next/link";
import React, {useState} from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <nav className="navbar">
            <div className="left-item">
                <a href="/"><span className="logo">S</span>Salim Ansari</a>
            </div>
            <div className="hmbgr" onClick={toggleNav}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className={`nav-list ${isOpen ? "open" : ""}`} onClick={toggleNav}>
                <li className="nav-item close-btn">X</li>
                <li className="nav-item"><Link href="/">Home</Link></li>
                <li className="nav-item"><Link href="/about">About</Link></li>
                <li className="nav-item"><Link href="/experience">Experience</Link></li>
                <li className="nav-item"><Link href="/projects">Projects</Link></li>
                <li className="nav-item"><Link href="/contact">Contact</Link></li>
            </ul>
            {/* <div className=""></div> */}
        </nav>
        <style jsx>{`
        .navbar {display: flex;justify-content: space-between; align-items: center; height: 96px; background: #ccc; position: relative;padding: 0 32px;
        border-bottom: 1px solid #000;}
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
        .close-btn {display: none;}
        .nav-item {color: rgb(0 0 0 / 65%);font-size: 24px; font-weight: 500; padding: 12px;position: relative;}
        .nav-item:hover {color: #000; cursor: pointer;}
        .nav-item:not(:last-child)::after{content: '|';position: relative;margin-left: 12px;}
        .hmbgr {display: none;}
        .line {width: 24px; height: 4px; background: #000;display: block; margin-bottom: 5px;}

        @media (max-width: 768px) {
        .nav-list {display: block;
    width: 70%;
    height: auto;
    background: #404040;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    padding: 20px;
    overflow-y: auto;
    z-index: 99;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.4s ease, opacity 0.4s ease;}
        .nav-list.open {
        display: block;
        width: 70%;
        height: auto;
        background: #404040;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
    padding: 20px;
    transition: all 1.5s;
    overflow-y: auto;
    z-index: 99;
    transform: translateX(0);
    opacity: 1;
        }
         .close-btn {display: block; text-align: left; font-weight: bold; font-size: 24px;}
        .hmbgr {display: block;}
        .nav-item {color: #fff;}

        .nav-item:not(:last-child)::after{content: '';position: relative;margin-left: 12px;}
        .nav-item:not(:first-child){border-bottom: 1px solid #fff;}
        }
        `}</style>
        </>
    );
}