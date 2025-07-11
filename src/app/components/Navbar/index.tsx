'use client';
import Link from "next/link";
import React, { useState } from "react";
import styles from './navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftItem}>
        <a href="/"><span className={styles.logo}>S</span>Salim Ansari</a>
      </div>
      <div className={styles.hmbgr} onClick={toggleNav}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <ul
        className={`${styles.navList} ${isOpen ? styles.open : ""}`}
        onClick={toggleNav}
      >
        <li className={`${styles.navItem} ${styles.closeBtn}`}>X</li>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/experience">Experience</Link></li>
        <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}