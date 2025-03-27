import React from 'react'
import './Creative.css'
import { micloudinary } from '../../utils/config';
import { Gallery } from '../../components/Gallery/Gallery';

const galleryItems = [ 
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743073179/makeup/creative/picasso_djbfbq.jpg`, caption: 'picasso - "El rostro No1"', className: "vertical", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366468/makeup/creative/fire2_aauf7r.webp`, caption: "", className: "creative2", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366467/makeup/creative/BEAUTY_PICTORICO_2_koobhd.webp`, caption: "", className: "creative1", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/creative/tokio_ync8xu.webp`, caption: "", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366467/makeup/creative/hielo_igsu2r.webp`, caption: "", color: "grey"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/creative/JOHN_GALIANO_ndsnmy.webp`, caption: "",  color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366467/makeup/creative/insp_is_she_hungry_eowkdm.webp`, caption: "", color: "whitesmoke"},
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742836503/makeup/creative/IMPERDIBLE_mnqb5e.webp`, caption: "", color: "whitesmoke"}

];


export const Creative = () => {
  console.log('me carga creative')
  return (
    <section className='creativeSection'>
      <Gallery galleryItems={galleryItems} className={'creative'}/>
    </section>
  )
}


