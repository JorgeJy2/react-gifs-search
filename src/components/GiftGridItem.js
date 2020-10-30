
import React from 'react'

export const GiftGridItem = ( {url,title} ) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}

