import React from 'react';

//Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

//CSS
import styles from './Post.module.css';

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument('posts', id);

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title}></img>
                    <div className={styles.scrollHint}>
                        <span>Continue para ler</span>
                        <div className={styles.arrow}></div>
                    </div>

                    <p>
                        {post.body
                            .split('\n')
                            .filter((p) => p.trim() !== '')
                            .map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                    </p>

                    <h4>
                        Postado por: <span>{post.createdBy}</span> –{' '}
                        {post.createdAt?.toDate().toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </h4>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Post;
