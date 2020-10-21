
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['cats', 'programing']);

    return (<> 
    <h1 id="title">Gifs search</h1>

    <AddCategory setCategories={setCategories}/>
    {/* <hr/> */}
    <ol>
        {
            categories.map((category, i) => <GiftGrid  key={category + i } category={category}/>)
        }
    </ol>
     </>);
};

export default GifExpertApp;
