import React from 'react'
import { Link } from 'react-router-dom';
 
import styles from '../../styles/footer.module.css';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import SPRITE from '../../images/sprite.svg';



const Footer = () => {

    const {footer, logo, rights, socials} = styles;

  return (
    <section class={footer}>
        <div className={logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="logo" />
            </Link>
        </div>

        <div className={rights}>
            Developed by {""} 
            <a href="#SOMEREFTOGITHUB" target="_blank" rel="noreferrer">
                OnlyWannaDance   
            </a>
        </div>

        <div className={socials}>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${SPRITE}#instagram`}/>
                </svg>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${SPRITE}#facebook`}/>
                </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${SPRITE}#youtube`}/>
                </svg>
            </a>

        </div>
    </section>
  )
}

export default Footer