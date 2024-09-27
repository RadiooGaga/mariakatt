import React, { useEffect, useRef, useState } from 'react';
import './NonStopGallery.css'




export const NonStopGallery = ({ carrouselItems }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const carrouselRef = useRef();
    const lastIndex = carrouselItems.length -1;

    console.log(currentIndex)
    console.log( "posicion", lastIndex)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1 ) % lastIndex);
            
        }, 3000); // Cambiar cada 3 segundos

        return () => clearInterval(interval); 

    }, [lastIndex]);


    return (
        <div className='carrousel-container'>
            <div className='carrousel' >
                {carrouselItems.map((item, index) => (
                    <div key={index} className='carrousel-card'  style={{ transform: `translateX(${-currentIndex * 100}%)` }} ref={carrouselRef}>
                    <img src={item.img} alt={`carrousel-img-${index}`} />
                    </div>
                      
                ))}
            </div>
            
        </div>
        
    );
};


