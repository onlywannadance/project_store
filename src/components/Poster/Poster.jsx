import React from 'react'

import styles from '../../styles/home.module.css';
import backgroundImage from '../../images/computer.png';

const Poster = () => {

  const { home, title, product, text, subtitle, head, button, image } = styles;

  return (
    <section className={home}>
        <div className={title}>BIG SALE 15%</div>
        <div className={product}>
            <div className={text}>
                <div className={subtitle}>The bestseller of 2022</div>
                <h1 className={head}>LENOVO ARMY with NVIDIA 4090TI</h1>
                <button className={button}>shop now</button>
            </div>
            <div className={image}>
                <img src={backgroundImage} alt="computer" />
            </div>
        </div>
    </section>
  )
}

export default Poster;