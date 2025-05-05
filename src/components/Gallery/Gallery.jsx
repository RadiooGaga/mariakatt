import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import './Gallery.css';

export const Gallery = ({ galleryItems, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(index);
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
      <div className={`container ${isMobile ? 'container-smartPhone' : ''}`}>
        {galleryItems.map((item, index) => (
          <figure
            key={`${item.img}-${index}`}
            className={`figure ${className || ''} ${activeIndex === index ? 'activePicture' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={item.img}
              alt={`Imagen ${index}`}
              className={`gallery-item ${item.className || ''}`}
            />
            <figcaption className="figcaption" style={{ color: item.color }}>
              {item.caption}
            </figcaption>
          </figure>
        ))}
        {activeIndex !== null && isMobile && (
          <div className="overlay" onClick={handleClose}></div>
        )}
      </div>
    </>
  );
};