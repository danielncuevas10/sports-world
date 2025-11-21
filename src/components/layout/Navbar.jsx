import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to ='/' className={styles.link}>Home</Link>
      <Link to ='/baseball' className={styles.link}>Baseball</Link>
      <Link to ='/outlet' className={styles.link}>Outlet</Link>
      <Link to ='/contact' className={styles.link}>Contact</Link>
    </nav>
  );
}
