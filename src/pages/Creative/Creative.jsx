import React from 'react'
import './Creative.css'
import { micloudinary } from '../../utils/config';
import { Gallery } from '../../components/Gallery/Gallery';

const galleryItems = [ 
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745491900/makeup/creative/creativo1_djf53a.webp`, caption: 'picasso - "El rostro No1"', className: "creativo1", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745492161/makeup/creative/creativo2_og02a5.webp`, caption: "", className: "creativo2", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745492367/makeup/creative/creativo3_rsse6x.webp`, caption: "", className: "creativo3", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745493115/makeup/creative/creativo4_opbnkk.webp`, caption: "", className: 'creativo4', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745493269/makeup/creative/creativo5_w8otvn.webp`, caption: "", className: 'creativo5', color: "grey"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745493432/makeup/creative/creativo6_xwb7r6.webp`, caption: "john galiano",className: 'creativo6', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745493689/makeup/creative/creativo7_igornu.webp`, caption: "inspo: is she hungry", className: 'creativo7',color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745493990/makeup/creative/creativo8_wsonqc.webp`, caption: "", className: 'creativo8', color: "whitesmoke"},
   { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756404109/makeup/hair/zombieboy_oqo0vt.webp`, caption: "", className: 'creativo9', color: "whitesmoke"}

];


export const Creative = () => {
  return (
    <section className='creativeSection'>
      <Gallery galleryItems={galleryItems} className={'creative'}/>
    </section>
  )
}


