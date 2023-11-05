//Imports React
import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../img/blog-image2.png";

//CSS
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <nav>
    <NavLink to = "/">Mini <pan>Blog</pan> <img src = {Logo} alt = "Logo Mini Blog" height="30px" width="30px"></img></NavLink>
    <ul>
        <li>
            <NavLink to = "/">Home</NavLink>
        </li>

        <li>
            <NavLink to = "/about">Sobre</NavLink>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar