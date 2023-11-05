//Imports React
import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // Cleanup
    // Deal with memory leak

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

}