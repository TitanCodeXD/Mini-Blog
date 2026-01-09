import styles from './Search.module.css';

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import { useSearchParams } from 'react-router-dom';

// components
import PostDetail from '../../components/PostDetail/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {
    const query = useQuery();
    const search = query.get('q');

    const { documents: posts } = useFetchDocuments('posts', search);

    return (
        <div className={styles.search_container}>
            <h1>
                Resultados encontrados para: <spam>{search.toUpperCase()}</spam>
            </h1>
            <div className="post-list">
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts com a tag digitada...</p>
                        <Link to="/" className="btn btn-dark">
                            Voltar
                        </Link>
                    </>
                )}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
                {/*{posts && (<><p>Erro na busca, tente novamente mais tarde.</p>
        <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
        </>)}*/}
            </div>
        </div>
    );
};

export default Search;
