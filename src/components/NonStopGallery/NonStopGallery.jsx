import React, { useEffect, useState, memo} from 'react';
import './NonStopGallery.css';


export const NonStopGallery = memo(({ carrouselItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
     const [screenSize, setScreenSize] = useState('desktop');
    const lastIndex = carrouselItems.length ;

     // Detectar tipo de pantalla
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setScreenSize('mobile');
            } else if (width <= 1280) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

  useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let maxVisible = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3;
                return prevIndex === lastIndex - maxVisible ? 0 : prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [lastIndex, screenSize]);



    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % lastIndex);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + lastIndex) % lastIndex);
    };

   
    return (
        <div className='carrousel-container'>
            <div className='carrousel'>
                {carrouselItems.map((item, index) => (
                    <div
                        key={index}
                        className='carrousel-card'
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                        <img 
                        src={item.img} 
                        alt={`carrousel-img-${index}`}
                             className={item.class ? `carrousel-img ${item.class}` : 'carrousel-img'}
                    />
                    </div>
                ))}
            </div>
            <button className='carousel-button prev-button' onClick={prevImage}>
                &#9664;
            </button>
            <button className='carousel-button next-button' onClick={nextImage}>
                &#9654;
            </button>
        </div>
    );
});


