//Imports React
import React from 'react'
import { Link } from 'react-router-dom';

//CSS
import styles from './About.module.css';

const About = () => {
  return (
    <div className = {styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em um blog feito com React no frontend e Firebase no back-end.</p>
        <p>Feito por <a href = "https://portfolio-wesley-santos.netlify.app" target="_blank"><span>W</span>esley Santos</a> <br></br><br></br>Mini Blog &copy; 2023</p>
        <h3>Crie seu post!</h3>
        <Link to = "/posts/create" className = "btn">Criar Post</Link>
    </div>
  )
}

export default About