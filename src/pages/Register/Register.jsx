//Imports React
import React from 'react'
import { useState, useEffect } from 'react';

//CSS
import styles from './Register.module.css';

const Register = () => {

  return (

    <div>
       <h1>Cadastre-se para postar!</h1>
       <p>Crie seu usuário e compartilhe suas histórias</p>
       <form>
        <label>
          <span>Nome:</span>
          <input 
          type = "text" 
          name = "displayName" 
          required placeholder = 'Nome do usuário'></input>
        </label>

        <label>
          <span>E-mail:</span>
          <input 
          type = "email" 
          name = "email" 
          required placeholder = 'E-mail do usuário'></input>
        </label>

        <label>
          <span>Senha:</span>
          <input 
          type = "password" 
          name = "password" 
          required placeholder = 'Insira sua Senha'></input>
        </label>

        <label>
          <span>Confirmação de Senha:</span>
          <input 
          type = "password" 
          name = "confirmPassword" 
          required placeholder = 'Confirme sua Senha'></input>
        </label>

        <button className='btn'>Cadastrar</button>
       </form>
    </div>
  )
}

export default Register