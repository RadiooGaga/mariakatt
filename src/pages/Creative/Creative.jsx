import React from 'react'
import './Creative.css'

import { Gallery } from '../../components/Gallery/Gallery';
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';


const galleryItems = [
    { img: "/assets/creative/fire2.webp", caption: "", className: "creative2", color: "whitesmoke" },
    { img: "/assets/creative/BEAUTY PICTORICO 2.webp", caption: "", className: "creative1", color: "whitesmoke" },
    { img: "/assets/creative/tokio.webp", caption: "", color: "whitesmoke"},
    { img: "/assets/creative/hielo.webp", caption: "", color: "grey"},
    { img: "/assets/creative/JOHN GALIANO.webp", caption: "",  color: "whitesmoke"},
    { img: "/assets/creative/insp is she hungry.webp", caption: "", color: "whitesmoke"}
];


export const Creative = () => {

  return (
    <section className='creativeSection'>
        <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
        <Gallery galleryItems={galleryItems} />
    </section>
  )
}


