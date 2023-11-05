//Imports React
import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../img/blog-image2.png";

//CSS
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <nav className = {styles.navbar}>
    <NavLink to = "/" className = {styles.brand}>Mini <span>Blog</span> <img src = {Logo} alt = "Logo Mini Blog" height="30px" width="30px"></img></NavLink>
    <ul className = {styles.links_list}>
        <li>
            <NavLink to = "/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>

        <li>
            <NavLink to = "/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar