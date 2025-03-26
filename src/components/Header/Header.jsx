import React, { useState, useEffect } from 'react'
import './Header.css'
import { Logo } from '../Logo/Logo'
import { MenuLinksComponent } from '../MenuLinks/MenuLinks'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'


export const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
      const checkIsMobile = () => {
          setIsMobile(window.innerWidth <= 768);
      };
      checkIsMobile(); 
  
      window.addEventListener('resize', checkIsMobile);
      return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('click o no')
  }

  return (
    <div className='divHeader'>
      {isMobile ? (
        <>
          <Logo />
          <BurguerMenu onClick={handleToggleMenu} />
          {isOpen && <MenuLinksComponent classNameNav="menuCustomLinks" className="customLinks" />}
        </>
      ) : (
        <>
          <Logo />
          <MenuLinksComponent classNameNav="menuCustomLinks" className="customLinks" />
        </>
      )}
    </div>
  );
};

