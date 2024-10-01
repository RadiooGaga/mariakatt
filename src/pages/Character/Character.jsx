import React from 'react'
import './Character.css'
import { micloudinary } from '../../utils/config'
import { MenuLinks } from '../../components/MenuLinks/MenuLinks';
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/Hans-Sauerdogs_mguqhm.webp`, caption: "Hans de 'Sauerdogs -> Recreación de dermatitis actínica y eritema", className: "character1", color: "whitesmoke" },
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Sauerdogs_Final_-_Bill_y_Hans_vuycnv.webp`, caption: "Bill de 'Sauerdogs' -> Recreación de queratosis actínica ", className: "creative1", color: "whitesmoke" },
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Captura_de_pantalla_2022-10-17_a_las_20.05.49_na1v04.png`, caption: "Max Payne", className: "character2", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/Captura_de_pantalla_2022-10-17_a_las_19.54.19_wub582.png`, caption: "Seth Briars - Red Dead Redemption",className: "character2",  color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/sombras_wfbwew.webp`, caption: "Sombras del pasado", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Captura_de_pantalla_2024-09-25_a_las_19.51.02_k7fpkq.png`, caption: "John Marston - Red Dead Redemption", color: "whitesmoke"}
];


export const Character = () => {
    console.log("me cargo yo tb character")
    
    return (
        <section className='characterSection'>
            <MenuLinks classNameNav="menuCustomLinks" className="customLinks"/>
            <Gallery galleryItems={galleryItems} />
    
        </section>
      )
}
