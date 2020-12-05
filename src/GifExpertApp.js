
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = ( { defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['cats', 'programing']);
    const [categories, setCategories] = useState(defaultCategories);

    return (<> 
        <h1 id="title">Gifs search</h1>

        <AddCategory setCategories={setCategories}/>

        <ol>
            {
                categories.map((category, i) => 
                    <GiftGrid  key={category + i } category={category}/>
                )
            }
        </ol>
     </>);
};

// export default GifExpertApp;
