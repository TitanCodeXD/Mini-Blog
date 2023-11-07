//React Imports
import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

//Context
import { useAuthValue } from '../../context/AuthContext';

//Hooks

import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

//CSS
import styles from './EditPost.module.css';

const EditPost = () => {
    const {id} = useParams();
    const {document: post} = useFetchDocument("posts", id);


  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if(post){
    setTitle(post.title)
    setBody(post.body)
    setImage(post.image)

    const textTags = post.tagsArray.join(", ");
    setTags(textTags);

    }
},[post])

  const {user} = useAuthValue();

  const {updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //Validate image URL

    try {
      
      new URL(image);

    } catch (error) {
      
      return setFormError("A imagem precisa ser uma URL");

    }

    //Criar array de Tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());



    //Checar todos os valores

    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos!")
    }

    if(formError) {
      return;
    }
    
    const data = {

            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
    }

    updateDocument(id, data);

    // Redirect Home Pages
    navigate("/");

    }


  return (
    <div className = {styles.edit_post}>
        {post && 
        (<>
        <h2>Editando Post: {post.title}</h2>
        <p>Altere os dados do post como desejar</p>
        <form onSubmit={handleSubmit}>

        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <p className = {styles.preview_title}>Ver preview da imagem atual:</p>
        <img className = {styles.image_preview} src = {post.image} alt = {post.title}></img>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        {!response.loading && <button className='btn'>Editar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}

        </form>
        </>)}
    </div>
  )
}

export default EditPost