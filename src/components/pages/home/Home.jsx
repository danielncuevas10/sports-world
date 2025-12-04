import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import background from '../../../assets/images/home/yankees.png';
import mlb from '../../../assets/images/home/icons/mlb.png';
import lmb from '../../../assets/images/home/icons/lmb.png';
import harley from '../../../assets/images/home/icons/harley.png';
import f1 from '../../../assets/images/home/icons/f1.png';
import ariat from '../../../assets/images/home/icons/ariat.png';
import monster from '../../../assets/images/home/icons/monster.png';
import cano from '../../../assets/images/home/cano.jpg';
import tatis from '../../../assets/images/home/tatis.jpg';
import redsox from '../../../assets/images/home/red-sox.jpg';
import house from '../../../assets/images/home/icons2/house.png';
import available from '../../../assets/images/home/icons2/available.png';
import folders from '../../../assets/images/home/icons2/folders.png';
import purchase from '../../../assets/images/home/icons2/purchase.jpg';
import quality from '../../../assets/images/home/icons2/quality.jpg';
import shipping from '../../../assets/images/home/icons2/shipping.jpg';
import styles from './Home.module.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className={styles.heroContainer}>     
      <img src={background} alt="Baseball Hero" className={styles.background} />
      <p>El mejor lugar para obtener tus mejores productos</p>
    </div>

    <div className={styles.sportsContainer}>
      <img src={mlb} alt="Baseball Hero" className={styles.icons} />
      <img src={lmb} alt="Baseball Hero" className={styles.icons} />
      <img src={harley} alt="Baseball Hero" className={styles.icons} />
      <img src={f1} alt="Baseball Hero" className={styles.icons} />
      <img src={ariat} alt="Baseball Hero" className={styles.icons} />
      <img src={monster} alt="Baseball Hero" className={styles.icons} />
    </div> 

    <div className={styles.collection1}>
      <h2>Colecciones de Beisbol</h2>
      <div className={styles.collections}>
        <div className={styles.item}>
          <img src={tatis} alt="Baseball Cano" />
          <p>Premium Jerseys Grandes Ligas</p>
            <Link to="/baseball#mlb-section">
              <button>Ver Coleccion</button>
            </Link>
        </div>
        <div className={styles.item}>
          <img src={cano} alt="Baseball Cano" />
          <p>Premium Jerseys Liga Mexicana</p>
            <Link to="/baseball#lmb-section">
              <button>Ver Coleccion</button>
            </Link>
        </div>
        
      </div>
    </div>

    <div className={styles.outlet}>
      <h2>Outlet: Rebajas de hasta 40%</h2>
        <div className={styles.collections}>
          <div className={styles.item}>
            <img src={redsox} alt="Baseball Cano" />
            <p style={{color:'red', fontSize:'1.2rem', fontWeight:'500'}}>$400</p>
            <p style={{fontSize:'.8rem'}}>$750 Precio original</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
          </div>
          <div className={styles.item}>
            <img src={redsox} alt="Baseball Cano" />
            <p style={{color:'red', fontSize:'1.2rem', fontWeight:'500'}}>$400</p>
            <p style={{fontSize:'.8rem'}}>$750 Precio original</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
          </div>
          <div className={styles.item}>
            <img src={redsox} alt="Baseball Cano" />
            <p style={{color:'red', fontSize:'1.2rem', fontWeight:'500'}}>$400</p>
            <p style={{fontSize:'.8rem'}}>$750 Precio original</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
          </div>
          <div className={styles.item}>
            <img src={redsox} alt="Baseball Cano" />
            <p style={{color:'red', fontSize:'1.2rem', fontWeight:'500'}}>$400</p>
            <p style={{fontSize:'.8rem'}}>$750 Precio original</p>
            <p>Nueva Playera Red Sox temporada 2025</p>
          </div>
      </div>
    </div>

    <div className={styles.about}>
      <div className={styles.left}>
          <h2>Acerca de Nosotros</h2>
          <p>Tu camino hacia<br></br> <span style={{color:'gray'}}>los mejores productos</span><br></br>Deportivos del Mundo</p>
      </div>
      <div className={styles.right}>
        <div className={styles.righticons}>
            <h2>2500+</h2>
            <img src={house} alt="Available picture" className={styles.icons2} />
            <p>Articulos vendidos</p>
        </div>   
        <div className={styles.righticons}>
            <h2>150+</h2>
            <img src={available} alt="Available picture" className={styles.icons2} />
            <p>Productos Disponibles</p>
        </div>  
        <div className={styles.righticons}>
            <h2>30+</h2>
            <img src={folders} alt="Available picture" className={styles.icons2} />
            <p>Diferentes Categorias </p>
        </div>  
      </div>
    </div>

    <div className={styles.service}>
      <h2>Sports World a tu servicio</h2>
      <div className={styles.service2}>
          <div className={styles.righticons}>
                <h2>Calidad <br></br>Premium</h2>
                <img src={quality} alt="Available picture" className={styles.icons2} />
                <p>Nuestros estandares de calidad son los mas altos con los mejores productos.</p>
            </div>  
            <div className={styles.righticons}>
                <h2>Envio gratis en Mexico</h2>
                <img src={shipping} alt="Available picture" className={styles.icons3} />
                <p>Nosotros enviamos tu compra a todo Mexico sin cargos extra.</p>
            </div>  
            <div className={styles.righticons}>
                <h2>Compra Segura </h2>
                <img src={purchase} alt="Available picture" className={styles.icons2} />
                <p>Tus compras son rapidas y seguras por medio de Mercado Pago.</p>
            </div>  
          </div>
    </div>

    </>
    
  );
}

export default Home;

