//React Imports
import { Link } from "react-router-dom";

//Hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";


//CSS
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.id;


  //Posts do usuário
  const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid);

  //Deletar posts

  const { deleteDocument } = useDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
           <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>)}

        {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title} <img src = {post.image} alt = {post.title}></img></p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => {if(window.confirm('Deseja deletar esse post?')) deleteDocument(post.id)}}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard