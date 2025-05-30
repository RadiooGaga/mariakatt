
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const ContactForm = () => {
  const formRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const content = form.content.value.trim();

    if (!name || !email || !subject || !content) {
      setErrorMessage('Faltan campos por rellenar');
      setSuccessMessage('');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Por favor, introduce un email válido.');
      setSuccessMessage('');
      return;
    }

    setIsLoading(true);
    setErrorMessage('Enviando...');
    setSuccessMessage('');

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, email, subject, content }
      );

      if (response.status === 200) {
        setErrorMessage('');
        setSuccessMessage('Mensaje enviado');
        form.reset();
      } else {
        throw new Error('Error en el envío del formulario');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Hubo un error en el envío.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      <form ref={formRef} className="contactForm" onSubmit={handleSubmit}>
        <h2 id="formTitle" data-i18n="formTitle">CONTACTO</h2>

        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder="tu nombre" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email@gmail.com" />

        <label htmlFor="subject" data-i18n="input-subject">Asunto</label>
        <input type="text" name="subject" placeholder="" />

        <label htmlFor="content" data-i18n="input-content">Tu mensaje</label>
        <textarea name="content" placeholder=""></textarea>

        <button type="submit" className="btn-enviar" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>

        {errorMessage && <p id="errorMessage">{errorMessage}</p>}
        {successMessage && <p id="successMessage">{successMessage}</p>}
      </form>
    </div>
  );
};