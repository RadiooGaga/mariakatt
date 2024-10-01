import React, {memo} from 'react'
import './Editorial.css'
import { micloudinary } from '../../utils/config'
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';

const galleryItems = [
    
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366467/makeup/editorial/SAAKO_1_SS14_d87dtp.webp`, caption: "Saako design", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/editorial/4694_guh3os.webp`, caption: "Florenz Collection", className: "florenz-girl", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366467/makeup/editorial/Brianda1_wi4u33.webp`, caption: "Brianda Fitz-James para Cucareliquia",className: "brianda", color: "grey"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/editorial/EPS_STREETSTYLE_161312ok-002_eb9eqp.webp`, caption: "El País Semanal", className: "eps", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/editorial/4932_wxi67k.webp`, caption: "Florenz Collection", className: "florenz-boy", color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/editorial/EPS_STREETSTYLE_161767ok-011_d2uadi.webp`, caption: "El País Semanal", className: "eps", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/editorial/_MG_6853_svyn0h.webp`, caption: "Florenz Collection", className: "florenz-boy", color: "whitesmoke"}
];

export const Editorial = memo(() => {

  return (
    <section className='editorialSection'>
        <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
        <Gallery galleryItems={galleryItems} />

    </section>
  )
})

