import styles from './Hero.module.css';
import background from '../../assets/images/baseball/home/yankees.png';

export default function Hero() {
  return (
    <div>
        <img src={background} alt="Baseball Hero" className={styles.heroBackground} />
    </div>
  );
}
