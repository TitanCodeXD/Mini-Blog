//Firebase
import { db } from '../../firebase/config';

//Imports React
import React from 'react'
import { useState, useEffect } from 'react';

//Hooks
import { useAuthentication } from '../../hooks/useAuthentication';


//CSS
import styles from './Register.module.css';

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }
    const res = await createUser(user)
    
  }

  useEffect (() => {

    if (authError){
      setError(authError)
    }

  }, [authError]);
  
  
  return (

    <div className={styles.register}>
       <h1>Cadastre-se para postar!</h1>
       <p>Crie seu usuário e compartilhe suas histórias</p>
       <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type = "text" 
          name = "displayName" 
          autoComplete='off'
          required placeholder = 'Nome do usuário'
          value = {displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          ></input>
        </label>

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

        <label>
          <span>Confirmação de Senha:</span>
          <input 
          type = "password" 
          name = "confirmPassword" 
          required placeholder = 'Confirme sua Senha'
          value = {confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}></input>
        </label>

        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
       </form>
    </div>
  )
}

export default Register