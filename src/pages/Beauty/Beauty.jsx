import React from 'react'
import '../../components/Gallery/Gallery.css'
import './Beauty.css'
import { micloudinary } from '../../utils/config';
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764062526/makeup/editorial/marina-ppp.ig_nwbpdo.jpg`, caption: "Marina - hair & makeup", className: 'beauty9', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742821852/makeup/beauty/90s_agmwll.webp`, caption: "", className: 'beauty2', color: "whitesmoke" }, 
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743066856/makeup/beauty/ss-model_ebvkw8.webp`, caption: "Book - hair & makeup",className: 'beauty3', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1745573122/makeup/beauty/beauty1_bzems7.webp`, caption: "Maquillaje de noche/fiesta", className: 'beauty1', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1764062534/makeup/editorial/mar-ppp-ig_oyrwfw.jpg`, caption: "Mar - hair & makeup", className: 'beauty10', color: "whitesmoke" },
  /*{ img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743066683/makeup/beauty/makeup_natural2_yuxndp.webp`, caption: "Maquillaje invitada", className: 'beauty4', color: "whitesmoke" },*/
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742833384/makeup/social/Screenshot_20230509_204509_g5gtp1.jpg`, caption: "Sara García - hair & makeup", className: 'beauty5', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743098838/makeup/beauty/Laia_Alemany_3_ucpgp5.webp`, caption: "Laia Alemany - hair & makeup", className: 'beauty6', color: "whitesmoke"},
  /*{ img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743074095/makeup/beauty/invitada1makeup_slyexz.webp`, caption: "Invitada - hair & makeup", className: 'beauty7', color: "whitesmoke" },*/
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742832832/makeup/social/makeup_natural_3_copia_yalpe9.webp`, caption: "Invitada - hair & makeup", className: 'beauty8', color: "whitesmoke" },
];


export const Beauty = () => {
  return (
    <section className='gallerySection'>
      <Gallery galleryItems={galleryItems} className={'beauty'}/>
    </section>
  )
}
