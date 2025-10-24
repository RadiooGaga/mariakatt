import React  from 'react'
import './Bio.css'
import { NonStopGallery } from '../../components/NonStopGallery/NonStopGallery'
import { micloudinary } from '../../utils/config'
import { Header } from '../../components/Header/Header';
import { carrouselItems } from '../../utils/carrouselItems.js';




export const Bio = () => {

  return (
    <>
    <Header />
    <section className='bioSection'>
      
      <div className='introBioDiv'>
        {/*<h2 className='bioH2'>BIO</h2>*/}
        <blockquote>
        “A menudo se asocia el maquillaje únicamente con la belleza, pero en realidad va mucho más allá. Es arte, es cultura y tiene el poder de contar historias a través de cada persona. No siempre son historias agradables, y precisamente eso fue lo que me fascinó desde niña.
        Un cambio de look puede tener muchos significados: un nuevo comienzo, una manera de cuidarse, de aumentar la autoestima o simplemente de sentirse diferente en un día especial. Hay personas que no conciben su vida sin maquillaje y otras que no lo necesitan en absoluto.
        <br /><br />
        Para actores y actrices, esta transformación es parte esencial de su trabajo. El maquillaje les permite encarnar a un personaje, dar vida a una historia que no es la suya, pero que deben hacer completamente propia.
        <br /><br />
        Al final, nuestra imagen siempre comunica algo. Sea mucho o poco, siempre transmite un mensaje sobre nosotros. Y cuando alguien que ha pasado por mis manos se mira al espejo, sonríe y se reconoce —ya sea en su día a día o en un escenario—, sé que he cumplido con mi propósito profesional y humano.”
        </blockquote>
      </div>

      <div className='bioPictureDiv'>
        <img className='bioPic' src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1748787151/makeup/pics/bannerBig_z1ob3c.webp`} alt="bioPic" />
      </div>

      <div className='biographyDiv'>
        <p className='bioParagraph'>Con una trayectoria de casi 20 años, inicio mi carrera trabajando en salones de peluquería de señora y caballero en <strong>Gijón</strong>, mi ciudad natal, y en <strong>Fuerteventura</strong>. Durante esos primeros años, comienzo a colaborar en sesiones fotográficas como maquilladora, peluquera y modelo.
        <br />
        <br />
        <img src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1748787152/makeup/pics/premios-fugaz_px3scn.webp`} alt="MFW" className='mob' />
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
        Me mudo a Málaga en 2022 y aquí, realizo estudios de programación web full stack durante 2 años.
        Actualmente vivo en Málaga y tanto el maquillaje y el hair art como la programación son mis actuales pasiones.
        Disfruto conviviendo con ambasy cada una ocupa su espacio en mi día a día, permitiendo expresarme y desarrollarme de formas distintas.
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
