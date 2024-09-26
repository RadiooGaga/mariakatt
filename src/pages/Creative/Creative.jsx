import React from 'react'
import './Creative.css'

import { Gallery } from '../../components/Gallery/Gallery';
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';


const galleryItems = [
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366468/makeup/creative/fire2_aauf7r.webp", caption: "", className: "creative2", color: "whitesmoke" },
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366467/makeup/creative/BEAUTY_PICTORICO_2_koobhd.webp", caption: "", className: "creative1", color: "whitesmoke" },
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366466/makeup/creative/tokio_ync8xu.webp", caption: "", color: "whitesmoke"},
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366467/makeup/creative/hielo_igsu2r.webp", caption: "", color: "grey"},
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366466/makeup/creative/JOHN_GALIANO_ndsnmy.webp", caption: "",  color: "whitesmoke"},
    { img: "https://res.cloudinary.com/drm9ygf0u/image/upload/v1727366467/makeup/creative/insp_is_she_hungry_eowkdm.webp", caption: "", color: "whitesmoke"}
    
];


export const Creative = () => {

  return (
    <section className='creativeSection'>
        <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
        <Gallery galleryItems={galleryItems} />
    </section>
  )
}


