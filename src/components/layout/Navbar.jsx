import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import {useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(prev => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
    <button className={styles.hamburger} onClick={toggleMenu}>
      ☰
    </button>

    <nav className={`${styles.navphone} ${open ? styles.show : styles.hide}`}>
      <Link to ='/' className={styles.link} onClick={closeMenu}>Home</Link>
      <Link to ='/baseball' className={styles.link} onClick={closeMenu}>Baseball</Link>
      <Link to ='/ariat' className={styles.link} onClick={closeMenu}>Ariat</Link>
      <Link to ='/harley' className={styles.link} onClick={closeMenu}>Harley</Link>
      <Link to ='/outlet' className={styles.link} onClick={closeMenu}>Outlet</Link>
    </nav>

    <nav className={styles.navbar}>

      <Link to ='/' className={styles.link1}>SPORTS WORLD</Link>
      <Link to ='/' className={styles.link}>Home</Link>
      <Link to ='/baseball' className={styles.link}>Baseball</Link>
      <Link to ='/ariat' className={styles.link}>Ariat</Link>
      <Link to ='/harley' className={styles.link}>Harley</Link>
      <Link to ='/outlet' className={styles.link}>Outlet</Link>
    </nav>
    </>
    
  );
}
