import React from 'react'
import './Editorial.css'
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    { img: "/assets/editorial/SAAKO 1 SS14.webp", caption: "Saako design", color: "whitesmoke" },
    { img: "/assets/editorial/4694.webp", caption: "Florenz Collection", className: "florenz-girl", color: "whitesmoke" },
    { img: "/assets/editorial/Brianda1.webp", caption: "Brianda Fitz-James para Cucareliquia",className: "brianda", color: "grey"},
    { img: "/assets/editorial/EPS_STREETSTYLE 161312ok-002.webp", caption: "El País Semanal", className: "eps", color: "whitesmoke"},
    { img: "/assets/editorial/4932.webp", caption: "Florenz Collection", className: "florenz-boy", color: "whitesmoke"  },
    { img: "/assets/editorial/EPS_STREETSTYLE 161767ok-011.webp", caption: "El País Semanal", className: "eps", color: "whitesmoke"},
    { img: "/assets/editorial/_MG_6853.webp", caption: "Florenz Collection", className: "florenz-boy", color: "whitesmoke"}
];


export const Editorial = () => {

  return (
    <section className='editorialSection'>
        <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
        <Gallery galleryItems={galleryItems} />

    </section>
  )
}

