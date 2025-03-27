import React from 'react'
import './Character.css'
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';



const galleryItems = [
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/Hans-Sauerdogs_mguqhm.webp`, caption: "Hans de 'Sauerdogs -> Recreación de dermatitis actínica y eritema", className: "character1", color: "whitesmoke" },
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Sauerdogs_Final_-_Bill_y_Hans_vuycnv.webp`, caption: "Bill de 'Sauerdogs' -> Recreación de queratosis actínica ", className: "character2", color: "whitesmoke" },
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Captura_de_pantalla_2022-10-17_a_las_20.05.49_na1v04.png`, caption: "Max Payne - hair & makeup", className: "character3", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743069459/makeup/character/NigelWestDickens_fcyokw.webp`, caption: "Nigel West Dickens - Red Dead Redemption - hair & makeup", className: "character4", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/Captura_de_pantalla_2022-10-17_a_las_19.54.19_wub582.png`, caption: "Seth Briars - Red Dead Redemption",className: "character5",  color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366465/makeup/character/sombras_wfbwew.webp`, caption: "Sombras del pasado - hair & makeup prosthetics", className: "character6", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1727366466/makeup/character/Captura_de_pantalla_2024-09-25_a_las_19.51.02_k7fpkq.png`, caption: "John Marston - Red Dead Redemption",className: "character7", color: "whitesmoke"},
    { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1742998948/makeup/character/male%CC%81fica_1_oaakqm.jpg`, caption: "Maléfica", className: "character8", color: "whitesmoke"}
];


export const Character = () => {
    console.log("me carga character")
    
    return (
        <section className='characterSection'>
            <Gallery galleryItems={galleryItems} className={'character'} />
        </section>
      )
}
