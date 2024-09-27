import React, { useState, useEffect, memo } from 'react';
import './Gallery.css';


// GALERÍA (GENÉRICO)

export const Gallery = memo(({ galleryItems }) => {
  
    const [activeIndex, setActiveIndex] = useState(null); // Estado para manejar la imagen activa
    const [images, setImages] = useState([]); // Estado para las imágenes cargadas
    const [loading, setLoading] = useState(true); // Estado para la carga
    const [error, setError] = useState(null); // Estado para errores

    // CARGA DE IMÁGENES
    useEffect(() => {
        setLoading(true); // Iniciar carga
        console.log("Gallery mounted or updated", galleryItems);
  
        try {
          // Asignar las imágenes recibidas de Cloudinary
          setImages(galleryItems);
          setLoading(false); // Finaliza la carga
        } catch (err) {
          console.error(err);
          setError('Error loading images'); // Manejo de errores
          setLoading(false);
        }
  
        return () => {
          console.log("Cleaning up");
        };
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
      return <div>Loading...</div>;
    if (error) return <div>Error{error}</div>;


return (
    <div className='container'>
        {galleryItems.map((item, index) => (
            <figure
                key={index}
                className={`figure ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
            >
                {loading ? ( // Mostrar placeholder mientras carga
                    <div className="image-placeholder">Loading...</div>
                ) : (
                    <img
                        src={item.img}
                        alt={`Gallery ${index}`}
                        className={`gallery-item ${item.className || ''}`}
                    />
                )}
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
