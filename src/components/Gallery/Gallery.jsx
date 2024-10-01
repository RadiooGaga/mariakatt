import React, { useState, useEffect } from 'react';
import './Gallery.css';


// GALERÍA (GENÉRICO)

export const Gallery = (({ galleryItems }) => {
  
    const [activeIndex, setActiveIndex] = useState(null); // Estado para manejar la imagen activa
    const [loading, setLoading] = useState(true); // Estado para la carga
    const [error, setError] = useState(null); // Estado para errores

    // CARGA DE IMÁGENES
    useEffect(() => {
        if (galleryItems && galleryItems.length > 0) {
            setLoading(false); // Finaliza la carga cuando se reciben las imágenes
        } else {
            setError('No se encontraron imágenes'); // Manejo de error si no hay imágenes
        }
    }, [galleryItems]);



    const handleImageClick = (index) => {
      console.log(index)
        setActiveIndex(index);
    };

    const handleClose = (e) => {
        e.stopPropagation(); // Evitar que el clic en la superposición cierre la imagen
        setActiveIndex(null); // Restablece el índice activo a null para cerrar la imagen
    };

    if (loading) 
      return <div className='loading'>Loading...</div>;
    if (error) return <div>Error{error}</div>;


return (
    <div className='container'>
        {galleryItems.map((item, index) => (
            <figure
                key={index}
                className={`figure ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
            >
            <img
                src={item.img}
                alt={`Gallery ${index}`}
                className={`gallery-item ${item.className || ''}`}
            />   
                <figcaption className="figcaption" style={{ color: item.color }}>
                    {item.caption}
                </figcaption>
            </figure>
        ))}
        {activeIndex !== null && (
            <div className="overlay" onClick={handleClose}></div>
        )}
    </div>
        );
});
