import { useState } from 'react'
import background from '../../../assets/images/home/yankees.png';
import diablos from '../../../assets/images/home/teams/diablos.png';
import dodgers from '../../../assets/images/home/teams/dodgers.png';
import mexico from '../../../assets/images/home/teams/mexico.png';
import padres from '../../../assets/images/home/teams/padres.png';
import redsox from '../../../assets/images/home/teams/red-sox.png';
import yankees from '../../../assets/images/home/teams/yankeeslogo.png';
import shirt from '../../../assets/images/home/red-sox.jpg';

import styles from './BaseballPage.module.css';

function BaseballPage() {
  const [count, setCount] = useState(0);

  return (

    <>
    <div className={styles.heroContainer}>     
      <img src={background} alt="Baseball Hero" className={styles.background} />
      <p>El mejor lugar para obtener tus mejores productos</p>
    </div>

    <div className={styles.sportsContainer}>
      <img src={dodgers} alt="Baseball Hero" className={styles.icons} />
      <img src={yankees} alt="Baseball Hero" className={styles.icons} />
      <img src={redsox} alt="Baseball Hero" className={styles.icons} />
      <img src={padres} alt="Baseball Hero" className={styles.icons} />
      <img src={mexico} alt="Baseball Hero" className={styles.icons} />
      <img src={diablos} alt="Baseball Hero" className={styles.icons} />
    </div>    

    <div className={styles.mlb}>
      <h2>Grandes Ligas</h2>
      <div className={styles.line}></div>
        <div className={styles.mlbContent}>
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
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
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>    
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>   
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div>  
          <div className={styles.item}>
            <img src={shirt} alt="Baseball Cano" />
            <p style={{fontSize:'1.5rem', fontWeight:'400'}}>$700</p>
            <p className={styles.description}>Nueva Playera Red Sox 2025</p>
            <button>Comprar</button>
          </div> 
               
          </div>


    </div>

    </>
  );
}

export default BaseballPage;

