import React, { useState, useEffect } from 'react';
import { useGallery } from '../../utils/galleryContext';
import { Header } from '../Header/Header';
import './Gallery.css';



// GALERÍA (GENÉRICO)

export const Gallery = (({ galleryItems, className }) => {

    const { getGalleryItems, setGalleryItems } = useGallery();
  
    const [activeIndex, setActiveIndex] = useState(null); // Estado para manejar la imagen activa
    const [loading, setLoading] = useState(true); // Estado para la carga
    const [isMobile, setIsMobile] = useState(false);
    const [error, setError] = useState(null); // Estado para errores

    // Manejo de cambio de tamaño de ventana para detectar mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        checkIsMobile(); // Llamar al inicio para establecer el estado correctamente
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);


    // CARGA DE IMÁGENES
    useEffect(() => {

        if (!galleryItems || galleryItems.length === 0) {
            setError('Ha habido un problema y no hay imágenes disponibles');
            setLoading(false)
            return 
        } 

        const storedItems = getGalleryItems(className);

        if (storedItems && storedItems.length > 0) {
            setGalleryItems(galleryItems, className); // ⚠️ Esto puede generar el bucle
        }

        setLoading(false);
        
    }, [galleryItems, className]); 



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
    if (error) {
        return <div className='errorDiv'>{error}</div>;
    } 


return (
    <>
    <Header />
    <div className={`container ${isMobile ? 'container-smartPhone' : ''}`}>
        {galleryItems.map((item, index) => (
            <figure
                key={index}
                className={`figure ${className || ''} ${activeIndex === index ? 'activePicture' : ''}`}
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
        {activeIndex !== null && isMobile && (
            <div className="overlay" onClick={handleClose}></div>
        )}
    </div>
    </>
      
    );
});