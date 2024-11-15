"use client";
// src/app/seccion1/page.tsx
import Image from 'next/image';
import styles from './home.module.css';
//assets
import logo from "../../../public/images/logo.svg"
import menu from "../../../public/images/menu.svg"
import arreglo from "../../../public/images/arregloHome.svg"
import tortuga from "../../../public/images/tortuga.png"
import planta from "../../../public/images/planta.png"
import galleta from "../../../public/images/galletahome.png"
import { useState } from 'react';

export default function Seccion1() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

  return (
    <div className={styles.body}>
        <div className={styles.headerContainer}>
            <div >
                <Image src={logo}alt="Next.js Logo" width={220} height={38} />
            </div> 
            <div className={styles.menuButton} onClick={toggleMenu}>
          <Image src={menu} alt="Menu Icon" width={40} height={40} />
            </div>
        </div>

        {/* Menú Desplegable */}
        <div className={`${styles.menu} ${menuVisible ? styles.menuVisible : ''}`}>
            <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className={styles.content}>
            <div className={styles.textcontent}>
                <h1 className={styles.title}>sabor + nutricion</h1>
                <p className={styles.p}> Toda la <span className={styles.span}>energia</span> que necesitas para disfrutar tu dia. <br /> Ya sea que estés comenzando tu mañana  tomando un <br />
                descanso  o preparándote para una aventura <br />
                nuestras galletas son la <span className={styles.span}>opción perfecta.</span>
                </p>
                <a className={styles.button} href="#">Nuestros Productos</a>
            </div>
            <div className={styles.productcontent}>
                <div className={styles.videocontent}>
                    <video className={styles.video} autoPlay loop muted>
                        <source src="/videos/videoHome.mp4" type="video/mp4" />
                    </video>
                    
                    <div className={styles.galleta}>
                        <Image src={galleta}alt="Next.js Logo" width={200} height={200} />
                    </div>
                    <h2 className={styles.subtitle}>Gran Tortuga</h2>
                </div>
                <p className={styles.producttext}>Mas de 15g de proteina! 💪🤯 <br /> <a className={styles.detallelink} href="#">Detalle nutricional</a> </p>
            </div>
            
        </div>
        <div className={styles.arreglo}>
            <Image src={arreglo}alt="Next.js Logo" width={700} height={700} />
        </div>
        <div className={styles.tortuga}>
            <Image src={tortuga}alt="Next.js Logo" width={475} height={700} />
        </div>
        <div className={styles.planta}>
            <Image src={planta}alt="Next.js Logo" width={200} height={200} />
        </div>
    </div>
  );
}
