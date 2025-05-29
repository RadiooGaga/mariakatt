import React  from 'react'
import './Bio.css'
import { NonStopGallery } from '../../components/NonStopGallery/NonStopGallery'
import { micloudinary } from '../../utils/config'
import { Header } from '../../components/Header/Header';

const carrouselItems = [
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444204/makeup/celebrities/Javier-Botet-y-Patricia-Vazquez_iielu8.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746443458/makeup/celebrities/Julia%CC%81n-Lopez_kl0ipr.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746443689/makeup/celebrities/Aria-Bedmar_atznxp.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746443800/makeup/celebrities/Angy-Fernandez_rdrjhq.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444011/makeup/celebrities/Goyo-Jimenez_njmemv.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444352/makeup/celebrities/Cristina-Brondo_vgwqli.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444484/makeup/celebrities/Carlos-Manuel-Diaz_g1tawb.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444724/makeup/celebrities/Chacha-Huang_oaszkj.webp`},
  {img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1746444974/makeup/celebrities/Mad-Max-Payne_vvegx3.webp`}
];


export const Bio = () => {

  return (
    <>
    <Header />
    <section className='bioSection'>
      
      <div className='introBioDiv'>
        {/*<h2 className='bioH2'>BIO</h2>*/}
        <blockquote>
        “Muchas veces se asocia el maquillaje solo con la belleza, pero en realidad es mucho más. Es arte, es cultura y tiene la capacidad de contar historias a través de las personas. No siempre son historias bonitas, y eso fue precisamente lo que me atrapó desde pequeña. 
        <br />
        Un cambio de look puede significar muchas cosas: un nuevo comienzo, una forma de cuidarse, de subir la autoestima o simplemente de sentirse diferente un día especial. Hay quien no puede vivir sin maquillarse y quien no lo necesita en absoluto.
        <br />
        En el caso de actores y actrices, esa transformación forma parte de su trabajo. El maquillaje les ayuda a convertirse en el personaje que interpretan, a defender una historia que no es la suya, pero que deben hacer suya por completo.
        <br />
        Porque al final, nuestra imagen siempre cuenta algo. Sea mucho o poco, siempre dice algo de nosotros. Y cuando alguien que ha pasado por mis manos se mira al espejo, sonríe y se reconoce en lo que ve —sea en su día a día o en un escenario—, entonces sé que he hecho bien mi trabajo.”
        </blockquote>
      </div>

      <div className='bioPictureDiv'>
        <img className='bioPic' src="/assets/pics/bannerBig.webp" alt="bioPic" />
      </div>

      <div className='biographyDiv'>
        <p className='bioParagraph'>Con una trayectoria de casi 20 años, inicio mi carrera trabajando en salones de peluquería de señora y caballero en <strong>Gijón</strong>, mi ciudad natal, y en <strong>Fuerteventura</strong>. Durante esos primeros años, comienzo a colaborar en sesiones fotográficas como maquilladora, peluquera y modelo.
        <br />
        <br />
        <img src="/assets/pics/premios-fugaz.webp" alt="MFW" className='mob' />
        En 2009, me traslado a <strong>Madrid</strong> para estudiar <strong>maquillaje de caracterización de personajes y modelado de prótesis</strong> en las escuelas <strong>Truhko Makeup</strong> y <strong>Harpo</strong>. A partir de entonces, he compaginado de manera continua el maquillaje y la peluquería social en salones de belleza, eventos y novias, con trabajos en el ámbito audiovisual. 
        En 2011, me incorporo a <strong>New Young Creatives</strong>, una división dentro de la agencia de moda editorial <strong>Talents</strong> dedicada a jóvenes maquilladores, donde trabajo en editoriales para <strong>Vogue España, El País Semanal, GQ, Glamour, Amazon BuyVip y Madrid Fashion Week.</strong> En esta misma agencia, asisto a maquilladores de renombre como <strong>Jordi Fontanals, Daniel Céspedes y José Luis Ruzafa</strong>.
        <br />
        <br />
        <br />
        Continúo más adelante trabajando para proyectos de publicidad y transmedia para productoras como <strong>El Cañonazo, Doctor Cerebrus, Monsterkid Productions</strong> o <strong>Sr. Gordo Producciones</strong>, para marcas como <strong>Coca-Cola, Hendrix Gin, ING Direct, Sony, Audi, Doritos, Lays, NH Hoteles, Martini, Canal Odisea</strong>…etc.
        Ya inmersa en el mundo de los rodajes publicitarios, conozco al director de cine <strong>Guillermo de Oliveira</strong> y comienzo a colaborar con él y el equipo de <strong>Zapruder Pictures</strong> en cortometrajes como <em>Red Dead Redemption: Seth's Gold, Mad Max Payne, Modern Warfare: Sunrise o Sauerdogs</em>.
        <br />
        <br />
        En 2018, me traslado a <strong>Granada</strong>, donde estudio <strong>Técnico de Sonido</strong> en la escuela y productora de imagen y sonido <strong>Curva Polar</strong>. Durante este período, participo en el rodaje de varios cortometrajes, donde además de caracterizar a los personajes, aplico mis nuevos conocimientos en postproducción de sonido.
        <br />
        <br />
        Entre 2019 y 2022, imparto formación en modalidad online, creando material didáctico, clases en directo y realizando vídeos demostrativos en formato microlearning, donde enseño diversas técnicas de maquillaje para la creación de efectos, épocas y personajes.
        <br />
        <br />
        <br />
        En 2021 y 2022, obtengo <strong> 2 nominaciones a Mejor Maquillaje y Peluquería</strong> en los <strong>Premios Lorca</strong> por <em>El Último Vaso</em> y en los <strong>Premios Fugaz</strong> por <em>Sauerdogs</em>, respectivamente.
        <br />
        <br />
        Actualmente vivo en Málaga.
        </p>
      </div> 

      <div className='studiesDiv'>
          <h3 className='bioH3'>FORMACION</h3>
          <ul className='studiesList'>
            <li><strong>Stan Winston School</strong> Character of arts - Online courses (2020/2023)</li>
            <li><strong>Mac Cosmetics</strong> Workshops Madrid (2018)</li>
            <li><strong>Wella Academy</strong> - Varias Técnicas: balayage, rubios, corrección de color, pastel colors, ombré, wellaplex... (Madrid)</li>
            <li><strong>FX, Escultura, moldes y prótesis</strong> - Escuela Harpo - Madrid (2015)</li>
            <li><strong>Tony & Guy</strong> - Creative Cut & Color Valencia (2010)</li>
            <li>Maquillaje de<strong> Caracterización </strong> para cine y espectáculos Escuela Truhko - Madrid (2009/2010)</li>
            <li><strong>Imagen personal</strong> por la OMAT y HABIA (Hairdressing & Beauty industry Authority) Gijón (2004/2006)</li>
          </ul>
      </div>
      <NonStopGallery carrouselItems={carrouselItems} />
    </section>
    </>
  )
}
