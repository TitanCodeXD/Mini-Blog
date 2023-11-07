//React Imports
import { Link } from "react-router-dom";

//Hooks

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";


//CSS
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.id;


  //Posts do usuário
  const posts = []

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
           <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>) : (
        <div>
          s
        </div>)}
    </div>
  )
}

export default Dashboard