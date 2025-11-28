import { useState } from 'react'
import shirt from '../../../assets/images/home/red-sox.jpg';
import ariat from '../../../assets/images/home/icons/ariat-removebg.png';
import styles from './Ariat.module.css';

function Ariat() {
    const [count, setCount] = useState(0);
  
    return (
  
      <>
    <div className={styles.title}>
        <img src={ariat} alt="Ariat Logo" />
    </div>
    <div className={styles.logo}>
        <img src={ariat} alt="Ariat Logo" />
    </div>
    <div className={styles.welcome}>
        <h1>Encuentra lo mejor de tu marca favorita</h1>    
        <p>Articulos exclusivos al mejor precio y con las mejores ofertas en el mercado</p>
    </div>  

    <div className={styles.mlb}>
      <h2>Grandes Ligas</h2>
      <div className={styles.line}></div>
        <div className={styles.mlbContent}>
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
            
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>    
        </div>
    </div> 

        <div className={styles.lmb}>
          <h2>Liga Mexicana de Beisbol</h2>
          <div className={styles.line}></div>
          <div className={styles.mlbContent}>
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
            
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1rem'}}>$750</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
            <button>Comprar</button>
          </div>    
        </div>
    
        </div>

    </>

    ); 
}

export default Ariat;