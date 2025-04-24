import React from 'react'
import './Editorial.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490171/makeup/editorial/editorial1_t3mgmf.webp`, caption: "Saako design - hair&makeup", className: "editorial1", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490335/makeup/editorial/editorial2_po1ukv.webp`, caption: "Florenz Collection - hair&makeup", className: "editorial2", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490502/makeup/editorial/editorial3_n4bho5.webp`, caption: "Brianda Fitz-James - hair&makeup para Cucareliquia",className: "editorial3", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745489985/makeup/editorial/editorial4_s9asnu.webp`, caption: "El País Semanal - hair&makeup", className: "editorial4", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490627/makeup/editorial/editorial5_l4wasz.webp`, caption: "Florenz Collection - hair&makeup", className: "editorial5", color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745490839/makeup/editorial/editorial6_kqufpo.webp`, caption: "El País Semanal - hair&makeup", className: "editorial6", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745489580/makeup/editorial/editorial7_qorapv.webp`, caption: "Florenz Collection - makeup", className: "editorial7", color: "whitesmoke"}


];

export const Editorial = () => {

  console.log('me carga editorial')

  return (
    <section className='editorialSection'>
      <Gallery galleryItems={galleryItems} className={'editorial'}/>
    </section>
  )
}

