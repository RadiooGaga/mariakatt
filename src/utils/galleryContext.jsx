import React, { createContext, useState, useContext } from 'react';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [galleryData, setGalleryData] = useState({});
  
  const setGalleryItems = (items, className ) => {
    setGalleryData(prevState => ({
      ...prevState,
      [className]: items,
    }));
    localStorage.setItem(`gallery-${className}`, JSON.stringify(items));
  };
  
  const getGalleryItems = (className) => {
    return galleryData[className] || JSON.parse(localStorage.getItem(`gallery-${className}`)) || [];
  };

  return (
    <GalleryContext.Provider value={{ setGalleryItems, getGalleryItems }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);