import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'
import { Logo } from '../Logo/Logo'
import { MenuLinksComponent } from '../MenuLinks/MenuLinks'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'


export const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const location = useLocation();
  const isBioPage = location.pathname === '/bio';


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
  }

  return (
    <div className={`divHeader ${isBioPage ? 'header-pink' : ''}`}>
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

