import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from './hooks/UseFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export default function GiftGrid({category}) {

    const {data: images,loading} = useFetchGifs(category);   
    
    return (
        <>
        <p className="category">{category}</p>
        {loading && <p>Loading....</p>}
        <div className="card-grid">
                {
                    images?.map((img) => (
                        <GiftGridItem 
                            key={img.id}
                            {...img}
                            />
                    ))
                }
        </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
};
