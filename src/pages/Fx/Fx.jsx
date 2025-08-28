import React, {useState, useEffect, useRef} from 'react'
import './Fx.css'
import { useNavigate } from 'react-router-dom';
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';
import { Warning } from '../../components/Warning/Warning';


const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743412735/makeup/fx/javier-botet_pihgju.webp`, caption: 'Javier Botet y Patricia Vazquez para "No enciendas la luz" (postproduccion)', className: 'botet', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743072319/makeup/fx/halloween2020_cqdw6j.webp`, caption: "Posesión - prótesis de silicona y dentadura", className: 'posesion', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743068826/makeup/fx/indice_ta6d8b.webp`, caption: "Reproducción dedo índice en silicona y maquillaje hiperrealista",className: 'dedo', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756404600/cirugia-mano_ouxwgw.webp`,caption: "cirugía", className: 'cirugia', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756405268/InShot_20240731_002756524_ikjiwi.jpg`,caption: "No enciendas la luz", className: 'rodaje', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743071015/makeup/fx/cicatriz-quemadura_rk1zo0.webp`, caption: "Cicatriz queloide por quemadura - prótesis planas ", className: 'fran', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756404604/ACNE%CC%81_SEVERO_FOTO_copia_vtaykq.jpg`, caption: "Acné pápulo pustuloso", className: 'acne', color: "whitesmoke" },
   { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743411254/makeup/fx/fetos_qod9jo.webp`, caption: 'Fetos',className: 'fetos', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756404601/euv-accidente_copia_yqf1hl.jpg`, caption: "Accidente de coche ", className: 'rodaje euv', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756404603/hematoma1_copia_wrvdaa.jpg`, caption: "Hematoma", className: 'hematoma', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743081186/makeup/fx/ojo_zlmjv9.webp`, caption: "ojo", className: 'ojo', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1756400869/makeup/hair/palma-mano_aa3wnm.webp`, caption: "herida abierta", className: 'herida-abierta', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743078891/makeup/fx/Victor-Castllo-euv_k5r5es.webp`, caption: '"El último vaso"',  color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743079011/makeup/fx/accidente_oarecw.webp`, caption: '"El último vaso"',className: 'accidente2',   color: "whitesmoke" },
 
  //{ video: `https://res.cloudinary.com/${micloudinary}/video/upload/v1756402171/VID-20171031-WA0028_copia_jxqgok.mp4`, caption: 'Exorcist',className: 'exorcista', color: "whitesmoke" }

];

export const Fx = () => {

  const [ seeContent , setSeeContent ] = useState(false);
  const [ isScrollBlocked, setIsScrollBlocked ] = useState(true);
  const navigate = useNavigate(); 
  const fxSectionRef = useRef(null);

  useEffect(() => {
    const section = fxSectionRef.current;
      if (section) {
        if (isScrollBlocked) {
        section.classList.add('no-scroll');
      } else {
        section.classList.remove('no-scroll');
      }
    }
  }, [isScrollBlocked]);

  const handleConfirm = () => {
    setSeeContent(true);
    setIsScrollBlocked(false);
    console.log('El usuario aceptó ver el contenido');
  };

  const handleCancel = () => {
    console.log('El usuario rechazó ver el contenido');
    navigate('/bio'); // Cambia '/otra-ruta' por la página a la que quieres redirigir
  };




  return (
    <>
    <section className='fxSection' ref={fxSectionRef}>
      <Gallery galleryItems={galleryItems} className={'fx'}/>
    </section>
    {!seeContent && isScrollBlocked &&
      <Warning onConfirm={handleConfirm} onCancel={handleCancel} 
    />}
    </>
  )
}