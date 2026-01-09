import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // evitar memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            if (cancelled) return;

            setLoading(true);
            setError(null);

            try {
                const collectionRef = collection(db, docCollection);

                let q;

                if (search) {
                    q = query(
                        collectionRef,
                        where('tagsArray', 'array-contains', search),
                        orderBy('createdAt', 'desc')
                    );
                } else if (uid) {
                    q = query(collectionRef, where('uid', '==', uid), orderBy('createdAt', 'desc'));
                } else {
                    q = query(collectionRef, orderBy('createdAt', 'desc'));
                }

                // 🔑 AQUI está a correção
                const querySnapshot = await getDocs(q);

                if (!cancelled) {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    );
                    setLoading(false);
                }
            } catch (err) {
                console.error('Firestore error:', err);

                if (!cancelled) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        loadData();
    }, [docCollection, search, uid]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};
