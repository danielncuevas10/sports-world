import styles from './Footer.module.css';
import whats from './../../assets/images/home/whatsapp.png';
import email from './../../assets/images/home/email.png';
import phone from './../../assets/images/home/phone.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Contactános:</p>
        <div className={styles.socialMedia}>
          <a href="https://wa.me/522711791636" target="_blank" rel="noopener noreferrer">
            <img src={whats} className={styles.icons}/>
          </a>
          <a href="mailto:yourEmail@example.com">
            <img src={email} className={styles.icons} alt="email icon" />
          </a>
          <a href="tel:+522711791636">
            <img src={phone} className={styles.icons}/>
          </a>
        </div>
    </footer>
  );
}
