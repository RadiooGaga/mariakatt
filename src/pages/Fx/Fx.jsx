import React, {useState} from 'react'
import './Fx.css'
import { useNavigate } from 'react-router-dom';
import { micloudinary } from '../../utils/config'
import { Gallery } from '../../components/Gallery/Gallery';
import { Warning } from '../../components/Warning/Warning';


const galleryItems = [

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743072319/makeup/fx/halloween2020_cqdw6j.webp`, caption: "Posesión - prótesis de silicona y dentadura", className: 'posesion', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743068826/makeup/fx/indice_ta6d8b.webp`, caption: "Reproducción dedo índice en silicona y maquillaje hiperrealista",className: 'dedo', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743071015/makeup/fx/cicatriz-quemadura_rk1zo0.webp`, caption: "Cicatriz queloide por quemadura - prótesis planas ", className: 'fran', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743081186/makeup/fx/ojo_zlmjv9.webp`, caption: "", className: 'ojo', color: "whitesmoke" },

  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743078891/makeup/fx/Victor-Castllo-euv_k5r5es.webp`, caption: '"El último vaso"',  color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743079011/makeup/fx/accidente_oarecw.webp`, caption: '"El último vaso"',className: 'accidente2',   color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743411254/makeup/fx/fetos_qod9jo.webp`, caption: 'Fetos',className: 'fetos', color: "whitesmoke" },
  { img: `https://res.cloudinary.com/${micloudinary}/image/upload/v1743412735/makeup/fx/javier-botet_pihgju.webp`, caption: 'Javier Botet y Patricia Vazquez para "No enciendas la luz" (postproduccion)', className: 'botet', color: "whitesmoke" }


];

export const Fx = () => {
  console.log('me carga FX')

  const [ seeContent , setSeeContent ] = useState(false)
  const navigate = useNavigate(); 

  const handleConfirm = () => {
    setSeeContent(true);
    console.log('El usuario aceptó ver el contenido');
  };

  const handleCancel = () => {
    console.log('El usuario rechazó ver el contenido');
    navigate('/otra-ruta'); // Cambia '/otra-ruta' por la página a la que quieres redirigir
  };


  return (
    <>
    <section className='fxSection'>
      <Gallery galleryItems={galleryItems} className={'fx'}/>
    </section>
    {!seeContent && <Warning onConfirm={handleConfirm} onCancel={handleCancel} />}
    </>
  )
}