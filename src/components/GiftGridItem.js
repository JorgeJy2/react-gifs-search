
import React from 'react'

export const GiftGridItem = ( {id, url,title} ) => {
    console.log(id );
    return (
        <div className="card animate__animated animate__fadeInDown">
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}
