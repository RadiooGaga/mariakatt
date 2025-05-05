import React from 'react'
import './Hair.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998706/makeup/hair/onda-suave_woaeam.webp`, caption: "ondas suaves",className: 'pelo', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998708/makeup/hair/peinado-graduacion_g9uub0.jpg`, caption: "recogido para graduacion", className: 'pelo',  color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998707/makeup/hair/peinado_trenzado_lcpmr9.jpg`, caption: "rope braids", className: 'braids', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/recogido-graduacion_xskytd.webp`, caption: "",className: 'pelo',  color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/bob_es1osh.jpg`, caption: "", className: 'pelo',  color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/babylights_davcrh.webp`, caption: "babylights", className: 'pelo',  color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743176635/makeup/hair/deco_ndl4du.webp`, caption: "", className: 'deco', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/ocean_instamatic_jtd5c8.jpg`, caption: "instamatic - blue ocean", className: 'instamatic', color: "whitesmoke"}

];

export const Hair = () => {

  console.log('me carga hair')

  return (
    <section className='hairSection'>
      <Gallery galleryItems={galleryItems} className={'hair'} />
    </section>
  )
}
