//Imports React
import React from 'react'

//CSS
import styles from './Footer.module.css';

const Footer = () => {

  return (
    <footer className = {styles.footer}>
        <h3>Escreva o que você tem interesse!</h3>
        <p>Made by <a href = "https://portfolio-wesley-santos.netlify.app" target="_blank">Wesley Santos</a>. Mini Blog &copy; 2023</p>
    </footer>
  )
}

export default Footer