import React from 'react'
import './Beauty.css'
import { micloudinary } from '../../utils/config';
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727369953/makeup/beauty/fiesta_noche_2_r3fpqm.webp`, caption: "Maquillaje de noche/fiesta", className: 'night', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742821852/makeup/beauty/90s_agmwll.webp`, caption: "", className: 'nineties', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743066856/makeup/beauty/ss-model_ebvkw8.webp`, caption: "Book - hair & makeup",className: 'book', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743066683/makeup/beauty/makeup_natural2_yuxndp.webp`, caption: "Maquillaje invitada", className: 'invitada1', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742833384/makeup/social/Screenshot_20230509_204509_g5gtp1.jpg`, caption: "Sara García - hair & makeup", className: 'sara', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743098838/makeup/beauty/Laia_Alemany_3_ucpgp5.webp`, caption: "Laia Alemany - hair & makeup", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743074095/makeup/beauty/invitada1makeup_slyexz.webp`, caption: "Invitada -hair & makeup", className: 'invitada2', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742832832/makeup/social/makeup_natural_3_copia_yalpe9.webp`, caption: "Invitada - hair & makeup", className: 'invitada3', color: "whitesmoke" },

];


export const Beauty = () => {
  console.log('me carga beauty')
  return (
    <section className='beautySection'>
      <Gallery galleryItems={galleryItems} className={'beauty'}/>
    </section>
  )
}
