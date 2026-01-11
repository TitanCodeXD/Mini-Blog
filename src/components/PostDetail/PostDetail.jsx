//React imports
import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import styles from './PostDetail.module.css';

const PostDetail = ({ post }) => {
    const formattedDate = post.createdAt?.toDate().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className={styles.post_detail}>
            <img src={post.image} alt={post.title}></img>
            <h2>{post.title}</h2>

            <p className={styles.createdby}>
                {post.createdBy} - {formattedDate}
            </p>

            <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ler
            </Link>
            <hr className={styles.post_divider} />
        </div>
    );
};

export default PostDetail;
