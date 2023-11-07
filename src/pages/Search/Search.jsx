//React imports
import React from 'react'

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

//CSS
import styles from './Search.module.css';


const Search = () => {

    const query = useQuery();
    const search = query.get("q")

  return (

    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search