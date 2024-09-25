import React from 'react'
import './Gallery.css'

export const Gallery = ({ galleryItems }) => {


  return (
    <div className='container'>
            {galleryItems.map((item, index) => (
                <figure key={index} className="figure">
                <img src={item.img} 
                alt={`Gallery ${index}`} 
                className={`gallery-item ${item.className || ''}`} />
                <figcaption className="figcaption" style={{ color: item.color }}>{item.caption}</figcaption>
                </figure>
                
            ))}
    </div>
  )

}

