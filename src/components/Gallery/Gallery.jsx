import React from 'react'
import './Gallery.css'

export const Gallery = ({ galleryItems }) => {


  return (
    <div className='container'>
            {galleryItems.map((item, index) => (
                <figure key={index} className="figure">
                <img src={item.img} alt={`Gallery ${index}`} className="gallery-item" />
                <figcaption>{item.caption}</figcaption>
                </figure>
            ))}
    </div>
  )

}

