import { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import diablos from '../../../assets/images/home/teams/diablos.png';
import mlb from '../../../assets/images/home/icons/mlb.png';
import dodgers from '../../../assets/images/home/teams/dodgers.png';
import mexico from '../../../assets/images/home/teams/mexico.png';
import padres from '../../../assets/images/home/teams/padres.png';
import redsox from '../../../assets/images/home/teams/red-sox.png';
import yankees from '../../../assets/images/home/teams/yankeeslogo.png';
import shirt from '../../../assets/images/home/red-sox.jpg';

import styles from './BaseballPage.module.css';

function BaseballPage() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // fallback if content isn’t rendered yet
    const t = setTimeout(() => {
      const retry = document.getElementById(id);
      retry?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => clearTimeout(t);
  }, [location]);


  return (

    <>
    <div className={styles.title}>
        <img src={mlb} alt="Ariat Logo" />
    </div>
    <div className={styles.logo}>
        <img src={mlb} alt="Ariat Logo" />
    </div>
    <div className={styles.welcome}>
        <h1>Encuentra lo mejor de tu marca favorita</h1>    
        <p>Articulos exclusivos al mejor precio y con las mejores ofertas en el mercado</p>
    </div>  

    <div className={styles.sportsContainer}>
      <img src={dodgers} alt="Baseball Hero" className={styles.icons} />
      <img src={yankees} alt="Baseball Hero" className={styles.icons} />
      <img src={redsox} alt="Baseball Hero" className={styles.icons} />
      <img src={padres} alt="Baseball Hero" className={styles.icons} />
      <img src={mexico} alt="Baseball Hero" className={styles.icons} />
      <img src={diablos} alt="Baseball Hero" className={styles.icons} />
    </div>    

    <div id="mlb-section" className={styles.mlb}>
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

    <div id="lmb-section" className={styles.lmb}>
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

