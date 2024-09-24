import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


const menuItems = [
    { name: "BIO", path: "/bio" },
    { name: "EDITORIAL", path: "/editorial" },
    { name: "CREATIVE", path: "/creative" },
    { name: "CHARACTER", path: "/character" },
    { name: "HAIRSTYLES", path: "/hairstyles" },
    { name: "BEAUTY", path: "/beauty" },
    { name: "CONTACT", path: "/contact" }
  ];

  
export const Header = () => {

  return (
    <>
        <div className='divHeader'>
            <div className='divLogo'>
                <img className='logo' src="/assets/pics/MKlogoWebTransparente.png" alt="logo" />
            </div>
            <nav>
                <ul className='navLinks'>
                {menuItems.map((item, index) => (
                    <li key={index}>
                    <NavLink 
                        to={item.path} 
                        className={({isActive}) => isActive ? "active" : ""}>
                        {item.name}
                    </NavLink>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    </>
  )
}

