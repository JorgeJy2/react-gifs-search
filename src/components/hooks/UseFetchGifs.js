import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

     useEffect(()=>  {
         getGifs(category)
             .then(data => setstate(
                {
                    data,
                    loading: false
                }));
     }, [category]);

    return state;
} 
