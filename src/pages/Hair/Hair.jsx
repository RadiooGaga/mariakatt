import React from 'react'
import '../../components/Gallery/Gallery.css'
import './Hair.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';


const galleryItems = [
    
  
  { video: `https://res.cloudinary.com/${micloudinary}/video/upload/v1756404918/supertrenza_rn69zk.mp4`, caption: 'Supertrenza',className: 'trenza-rapunzel', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998706/makeup/hair/onda-suave_woaeam.webp`, caption: "ondas suaves",className: 'pelo1', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998708/makeup/hair/peinado-graduacion_g9uub0.jpg`, caption: "recogido para graduacion", className: 'pelo2',  color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998707/makeup/hair/peinado_trenzado_lcpmr9.jpg`, caption: "rope braids", className: 'pelo3', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756398444/makeup/hair/geisha_mdcmyo.webp`, caption: "peinado geisha", className: 'geisha', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/recogido-graduacion_xskytd.webp`, caption: "recogido de graduación",className: 'pelo4',  color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756398445/makeup/hair/dracula-BS_v1q3hl.jpg`, caption: "Bram Stoker Drácula-peinado", className: 'dracula',  color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/bob_es1osh.jpg`, caption: "bob", className: 'pelo5',  color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/babylights_davcrh.webp`, caption: "babylights", className: 'pelo6',  color: "whitesmoke"  },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743176635/makeup/hair/deco_ndl4du.webp`, caption: "bleach", className: 'pelo7', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/ocean_instamatic_jtd5c8.jpg`, caption: "instamatic - blue ocean", className: 'pelo8', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998706/makeup/hair/peinado-graduacion2_kdeejl.jpg`, caption: "peinado graduación", className: 'pelo9', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998706/makeup/hair/recogido-invitada_fwpd2t.webp`, caption: "peinado invitada", className: 'pelo10', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998705/makeup/hair/balayage_rtec7x.jpg`, caption: "balayage", className: 'pelo11', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756397453/makeup/hair/circo-horrores-pelucas_s9fe6n.webp`, caption: "circo de los horrores", className: 'pelo13', color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998707/makeup/hair/mecha-bitono_tg4znn.jpg`, caption: "circo de los horrores", className: 'pelo13', color: "whitesmoke"},
];

export const Hair = () => {
  return (
    <section className='hairSection'>
      <Gallery galleryItems={galleryItems} className={'hair'} />
    </section>
  )
}
