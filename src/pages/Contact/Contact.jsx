import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactForm } from '../../components/Form/Form'
import './Contact.css'

export const Contact = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate('/')
    }

  return (
    <section className='contactSection'>
      <ContactForm />
      <h2 className='volver' onClick={handleGoBack}>VOLVER</h2>
    </section>
  );
}
