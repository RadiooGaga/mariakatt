import React, { useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate('/')
    }

  return (
    <section className='contactSection'>
      <h2 className='warning'>ESTA WEB ESTA EN CONSTRUCCION, PERO PUEDES ENVIARME TU MENSAJE A ESTE MAIL </h2>
      <h3 className='mail'>mariahkatt@gmail.com</h3>
      <span>🫠</span>
      <h2 className='volver' onClick={handleGoBack}>VOLVER</h2>
    </section>
  );
}
