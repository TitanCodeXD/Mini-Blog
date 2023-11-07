import React from 'react'

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

//CSS
import styles from './Post.module.css'

const Post = () => {
    const { id } = useParams();
    const { document: post, loading} = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
    {loading && <p>Carregando post...</p>}
    {post && (
      <>
        <h1>{post.title}</h1>
        <img src = {post.image} alt = {post.title}></img>
        <p>{post.body}</p>
        <h4>Postado por: {post.createdBy}</h4>
        <h3>Este post trata sobre:</h3>
        <div className = {styles.tags}>
        {post.tagsArray.map((tag) => (
            <p key = {tag}><span>#</span>{tag}</p>
        ))}
        </div>
      </>
    )}
  </div>
  )
}

export default Post