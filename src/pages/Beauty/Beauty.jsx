import React from 'react'
import './Beauty.css'
import { micloudinary } from '../../utils/config';
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727369953/makeup/beauty/fiesta_noche_2_r3fpqm.webp`, caption: "Maquillaje de fiesta", className: 'night', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742832832/makeup/social/makeup_natural_3_copia_yalpe9.webp`, caption: "Maquillaje de invitada", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742833227/makeup/social/model-ssm_pcwzat.webp`, caption: "Beauty editorial", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742833384/makeup/social/Screenshot_20230509_204509_g5gtp1.jpg`, caption: "Bride", className: 'sara', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742821852/makeup/beauty/90s_agmwll.webp`, caption: "90's", className: 'nineties', color: "whitesmoke" }

];


export const Beauty = () => {
  console.log('me carga beauty')
  return (
    <section className='beautySection'>
      <Gallery galleryItems={galleryItems} className={'beauty'}/>
    </section>
  )
}
