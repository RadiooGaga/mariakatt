import React  from 'react'
import './Bio.css'
import { NonStopGallery } from '../../components/NonStopGallery/NonStopGallery'
import { Header } from '../../components/Header/Header';

const carrouselItems = [
  {img: "https://plus.unsplash.com/premium_photo-1664451177155-8247ae799c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwfGVufDB8fDB8fHww"},
  {img: "https://images.unsplash.com/photo-1551392505-f4056032826e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D"},
  {img: "https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {img: "https://images.unsplash.com/photo-1606876430311-6b09172238b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {img: "https://images.unsplash.com/photo-1630084775816-7abb7383ded5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {img: "https://plus.unsplash.com/premium_photo-1703343320111-53f45b907410?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {img: "https://images.unsplash.com/photo-1570088727237-68500d217455?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

];


export const Bio = () => {

  return (
    <>
    <Header />
    <section className='bioSection'>
      
      <div className='introBioDiv'>
        {/*<h2 className='bioH2'>BIO</h2>*/}
        <blockquote>
        “El maquillaje suele asociarse al mundo de la belleza, pero es mucho más que eso. El maquillaje es arte y es cultura, y tiene el poder de transformar a las personas en historias que contar. A veces, no necesariamente bonitas. Eso fue lo que realmente me enganchó de este oficio desde que era niña. 
        <br />
        Un cambio de look puede significar un nuevo comienzo. Puedes usarlo simplemente por mantener y cuidar tu imagen, para mejorar la autoestima o para sentirte mejor o diferente en un día especial. Puedes no poder vivir sin maquillaje o no maquillarte en absoluto.
        En un actor o actriz esa transformación también forma parte de su día a día. Y también, a través del maquillaje se convierten en ese personaje que cuenta una historia y una realidad que, aunque no es la suya, debe defenderla como tal.
        <br />
        Con esto me refiero a que <strong className='clave'>nuestra imagen siempre tiene una historia detrás</strong>. En mayor o menor medida forma parte de nosotros; como espectador o como protagonista.
        <br />
        Cuando quien ha pasado por mis manos se mira satisfecho al espejo y puede enfrentar su papel, es que he hecho bien mi trabajo.“
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
