import React from 'react'
import { Link } from 'react-router-dom';
 
import styles from '../../styles/header.module.css';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.png';
import SPRITE from '../../images/sprite.svg';

const Header = () => {

  const {header, logo, input, info, user, avatar, username, form, icon, box, account, favourites, cart, count} = styles; 

  return (
    <div className={header}>
        <div className={logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="logo" />
            </Link>
        </div>

        <div className={info}>

            <div className={user}>
                <div className={avatar} style={{ backgroundImage: `url(${AVATAR})` }}></div>          
                <div className={username}>Guest</div>    
            </div>

            <form className={form}>

                <div className={icon}>
                    <svg className={icon}>
                        <use xlinkHref={`${SPRITE}#search`}/>
                    </svg>
                </div>
                <div className={input}>
                    <input 
                        type="search" 
                        name="search" 
                        placeholder='Search for anything...' 
                        autoComplete='off'
                        nChange={()=>{}}
                        value=""
                    />
                </div>

                {false && <div className={box}></div>}

            </form>
            
            <div className={account}>      
                <Link to={ROUTES.HOME} className={favourites}>
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${SPRITE}#heart`}/>
                    </svg>
                </Link>
                <Link to={ROUTES.CART} className={cart}>
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${SPRITE}#bag`}/>
                    </svg>
                    <span className={count}>2</span>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header