import React from 'react'
import './Editorial.css'

import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4" },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4"  },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4" },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4" },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4" },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4"  },
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Imagen 4" }
];


export const Editorial = () => {

  return (
    <section className='editorialSection'>
        <h2 className='editorialH2'>EDITORIAL</h2>
        <Gallery galleryItems={galleryItems} />

    </section>
  )
}

