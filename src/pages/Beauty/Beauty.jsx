import React, {memo} from 'react'
import './Beauty.css'
import { micloudinary } from '../../utils/config';
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727369953/makeup/beauty/fiesta_noche_2_r3fpqm.webp`, caption: "Maquillaje de fiesta", color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727369953/makeup/beauty/fiesta_noche_2_r3fpqm.webp`, caption: "Maquillaje de fiesta", color: "whitesmoke" }
  /*
  { img: "", caption: "", className: "florenz-girl", color: "whitesmoke" },
  { img: "", caption: "",className: "brianda", color: "grey"},
  { img: "", caption: "", className: "eps", color: "whitesmoke"},
  { img: "", caption: "", className: "florenz-boy", color: "whitesmoke"  },
  { img: "", caption: "", className: "eps", color: "whitesmoke"},
  { img: "", caption: "", className: "florenz-boy", color: "whitesmoke"}*/
];


export const Beauty = memo(() => {
  console.log("me cargo")
  return (
    <section className='beautySection'>
        <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
        <Gallery galleryItems={galleryItems} />

    </section>
  )
})
