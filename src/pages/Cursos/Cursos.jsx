import React from 'react'
import './Cursos.css'
import { useNavigate } from 'react-router-dom'

export const Cursos = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate('/')
    }

  return (
    <section className='educationSection'>
      <h2 className='warning'>ZONA EN CONSTRUCCIoN 🚧 </h2>
      <span>🫠</span>
      <h2 className='volver' onClick={handleGoBack}>VOLVER</h2>
    </section>
  );
}

