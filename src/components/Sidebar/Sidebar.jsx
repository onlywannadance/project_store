import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/sidebar.module.css';

const Sidebar = () => {

const {sidebar, title, menu, footer, link, active} = styles;
const { list } = useSelector(({categories}) => categories);

  return (
    <section className={sidebar}>
       <div className={title}>Categories</div>

       <nav>
            <ul className={menu}>
                {list.map(({id, name}) => (
                    <li>
                        <NavLink className={ ({isActive}) => `${link} ${isActive ? active : ''}` } to={`/categories/${id}`}>{name}</NavLink>
                    </li> 
                ))}
            </ul>
       </nav>

        <div className={footer}>
            <a href="/help" target="_blank" className={link}>
                Help
            </a>
            <a href="/terms" target="_blank" className={link} style={{textDecoration: "underline"}}>
                Terms & Conditions
            </a>
        </div>
    </section>
  )
}

export default Sidebar