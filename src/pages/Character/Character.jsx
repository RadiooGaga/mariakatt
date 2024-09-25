import React from 'react'
import './Character.css'

import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';

const galleryItems = [
    { img: "/assets/creative/fire2.webp", caption: "", className: "creative2", color: "whitesmoke" },
    { img: "/assets/creative/BEAUTY PICTORICO 2.webp", caption: "", className: "creative1", color: "whitesmoke" },
    { img: "/assets/creative/tokio.webp", caption: "", color: "whitesmoke"},
    { img: "/assets/creative/hielo.webp", caption: "", color: "grey"},
    { img: "/assets/creative/JOHN GALIANO.webp", caption: "",  color: "whitesmoke"},
    { img: "/assets/creative/insp is she hungry.webp", caption: "", color: "whitesmoke"}
];


export const Character = () => {
    return (
        <section className='characterSection'>
            <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
            <Gallery galleryItems={galleryItems} />
    
        </section>
      )
}
