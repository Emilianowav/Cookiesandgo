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

export default function Seccion1() {
  return (
    <div className={styles.body}>
        <div className={styles.headerContainer}>
            <div >
                <Image src={logo}alt="Next.js Logo" width={220} height={38} />
            </div>
            <div>
                <Image src={menu}alt="Next.js Logo" width={32} height={32} />
            </div>
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
            <div className={styles.videocontent}>
                <video className={styles.video} controls autoPlay loop muted>
                    <source src="/videos/videoHome.mp4" type="video/mp4" />
                </video>
                
                <div className={styles.galleta}>
                    <Image src={galleta}alt="Next.js Logo" width={200} height={200} />
                </div>
                <h2 className={styles.subtitle}>Gran Tortuga</h2>
            </div>
        </div>
        <div className={styles.arreglo}>
            <Image src={arreglo}alt="Next.js Logo" width={700} height={700} />
        </div>
        <div className={styles.tortuga}>
            <Image src={tortuga}alt="Next.js Logo" width={500} height={700} />
        </div>
        <div className={styles.planta}>
            <Image src={planta}alt="Next.js Logo" width={200} height={200} />
        </div>
    </div>
  );
}
