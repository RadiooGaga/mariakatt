import React, { useState } from 'react';
import { useIsSmartphone } from '../../utils/hooks';
import { Header } from '../Header/Header';
import './Gallery.css';

export const Gallery = ({ galleryItems, className }) => {
  const [figcaption, setFigcaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const isSmartphone = useIsSmartphone();

  const handleImageClick = (index) => {
    //console.log(index)
    if (activeIndex === index) {
      setActiveIndex(null); // Si ya está activa, al hacer click otra vez se cierra
      setFigcaption(false)
    } else {
      const hasCaption = !!galleryItems[index].caption?.trim();
      setFigcaption(hasCaption);
      setActiveIndex(index);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  if (!galleryItems || galleryItems.length === 0) {
    return <div className="errorDiv">No hay imágenes disponibles.</div>;
  }

  return (
    <>
      <Header />
      <div className={`container ${isSmartphone ? 'container-smartPhone' : ''} ${className || ''}`}>
      {activeIndex !== null && isSmartphone && (
          <div className="overlay" onClick={handleClose}></div>
        )}
        {galleryItems.map((item, index) => (
          <figure
            key={`${item.img}-${index}`}
            className={`figure ${className || ''} ${activeIndex === index ? 'activePicture' : ''}`}
            onClick={() => handleImageClick(index)}
          >
         {item.video ? (
        <video
            className={`gallery-video ${item.className || ''}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={item.video} type="video/mp4" />
            Tu navegador no soporta la reproducción de vídeo.
          </video>
        ) : (
          <img
            src={item.img}
            alt={`Imagen ${index}`}
            className={`gallery-item ${item.className || ''}`}
          />
           )}
            {item.caption?.trim() && (
            <figcaption
              className={`figcaption ${
                isSmartphone && activeIndex === index ? 'visible' : ''
              }`}
              style={{ color: item.color }}
            >
              {item.caption}
            </figcaption>
          )}
      </figure>
        ))}
       
      </div>
    </>
  );
};