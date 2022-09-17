import { useState, useEffect } from 'react';

export default function useStateWithLocal(key, value) {
    const [state, setState] = useState(() => {
        const actualLocalValue = localStorage.getItem(key)
        if(actualLocalValue) {
            return JSON.parse(actualLocalValue)
        } else {
            return value
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState];
}