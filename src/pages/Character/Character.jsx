import React from 'react'
import './Character.css'

import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';

const galleryItems = [
    { img: "/assets/character/Hans-Sauerdogs.webp", caption: "Hans de 'Sauerdogs -> Recreación de dermatitis actínica y eritema", className: "character1", color: "whitesmoke" },
    { img: "/assets/character/Sauerdogs Final - Bill y Hans.webp", caption: "Bill de 'Sauerdogs' -> Recreación de queratosis actínica ", className: "creative1", color: "whitesmoke" },
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
