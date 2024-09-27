import React, { useEffect, useState, memo} from 'react';
import './NonStopGallery.css';


export const NonStopGallery = memo(({ carrouselItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = carrouselItems.length -1;


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % lastIndex ); 
        }, 3000); // Cambiar cada 3 segundos

        return () => clearInterval(interval);
    }, [lastIndex]);


/*
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1) % lastIndex);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + lastIndex) % lastIndex);
    };
*/
   
    return (
        <div className='carrousel-container'>
            <div className='carrousel'>
                {carrouselItems.map((item, index) => (
                    <div
                        key={index}
                        className='carrousel-card'
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                        <img src={item.img} alt={`carrousel-img-${index}`} />
                    </div>
                ))}
            </div>
            {/*  <button className='carousel-button prev-button' onClick={prevImage}>
                &#9664;
            </button>
            <button className='carousel-button next-button' onClick={nextImage}>
                &#9654;
            </button> */}
        </div>
    );
});


