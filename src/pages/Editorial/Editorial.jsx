import React from 'react'
import '../../components/Gallery/Gallery.css'
import './Editorial.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490335/makeup/editorial/editorial2_po1ukv.webp`, caption: "Florenz Collection - hair&makeup", className: "editorial2", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764062521/makeup/editorial/marina-pp-ig_v7f7vy.jpg`, caption: "Market Editorial - hair&makeup", className: "editorial0", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764065600/makeup/editorial/EPS_STREETSTYLE_160855ok-001_compressed_qz9bzh.webp`, caption: "El País Semanal - hair&makeup", className: "editorial8", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764062974/makeup/editorial/Cucareliquia_Scarves_by_Brianda_Fitz-James_Stuart_7_copia_byedm7.jpg`, caption: "Brianda Fitz-James - hair&makeup para Cucareliquia",className: "editorial3", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764062905/makeup/editorial/EPS_STREETSTYLE_161203ok-005_compressed_ueopjx.webp`, caption: "El País Semanal - hair&makeup", className: "editorial4", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490839/makeup/editorial/editorial6_kqufpo.webp`, caption: "El País Semanal - hair&makeup", className: "editorial6", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490627/makeup/editorial/editorial5_l4wasz.webp`, caption: "Florenz Collection - hair&makeup", className: "editorial5", color: "whitesmoke"  },
  /*{ img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745489580/makeup/editorial/editorial7_qorapv.webp`, caption: "Florenz Collection - makeup", className: "editorial7", color: "whitesmoke"},*/
 { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490171/makeup/editorial/editorial1_t3mgmf.webp`, caption: "Saako design - hair&makeup", className: "editorial1", color: "whitesmoke" },
];

export const Editorial = () => {
  return (
    <section className='gallerySection'>
      <Gallery galleryItems={galleryItems} className={'editorial'}/>
    </section>
  )
}

