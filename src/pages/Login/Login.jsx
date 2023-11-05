//Firebase
import { db } from '../../firebase/config';

//Imports React
import React from 'react'
import { useState, useEffect } from 'react';

//Hooks
import { useAuthentication } from '../../hooks/useAuthentication';

//CSS
import styles from './Login.module.css';


const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const {createUser, error: authError, loading } = useAuthentication();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      setError("")
  
      const user = {
        email,
        password,
      }
  
      const res = await createUser(user)
      
    }
  
    useEffect (() => {
  
      if (authError){
        setError(authError)
      }
  
    }, [authError]);


  return (
    <div className = {styles.login}>
         <h1>Entrar</h1>
       <p>Faça o Login para poder utilizar o sistema</p>
       <form onSubmit={handleSubmit}>

        <label>
          <span>E-mail:</span>
          <input 
          type = "email" 
          name = "email" 
          required placeholder = 'E-mail do usuário'
          value = {email}
          onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <label>
          <span>Senha:</span>
          <input 
          type = "password" 
          name = "password" 
          required placeholder = 'Insira sua Senha'
          value = {password}
          onChange={(e) => setPassword(e.target.value)}></input>
        </label>

        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
       </form>
    </div>
  )
}

export default Login