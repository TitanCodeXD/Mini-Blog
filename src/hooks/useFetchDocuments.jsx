//React Imports
import { useState, useEffect } from "react";

//Firebase
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";

export const useFetchDocuments = (docColletion, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //Memory leak

    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docColletion)

            try {
                let q;

                //Busca

                //Dashboard

                q = await query(collectionRef, orderBy('createAt','desc')) ;

                await onSnapshot(q, (QuerySnapshot) => {

                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({
                            id:doc.id,
                            ...doc.data(),
                        }))
                    )
                });

                setLoading(false);

            } catch (error) {
                
                console.log(error);
                setError(error.message);

                setLoading(false);

            }

        }

        loadData();
    }, [docColletion, search, uid, ])

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {documents, loading, error};

}