import React from 'react'
import './Hair.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998706/makeup/hair/onda-suave_woaeam.webp`, caption: "ondas suaves", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998708/makeup/hair/peinado-graduacion_g9uub0.jpg`, caption: "recogido para graduacion",  color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998707/makeup/hair/peinado_trenzado_lcpmr9.jpg`, caption: "rope braids", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/recogido-graduacion_xskytd.webp`, caption: "", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/bob_es1osh.jpg`, caption: "",  color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/decoymatiz_ow2nzc.webp`, caption: "decoloración y matiz", className: 'deco', color: "whitesmoke"}
];

export const Hair = () => {

  console.log('me carga hair')

  return (
    <section className='hairSection'>
      <Gallery galleryItems={galleryItems} className={'hair'}/>
    </section>
  )
}
