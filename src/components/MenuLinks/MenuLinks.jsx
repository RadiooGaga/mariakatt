import React from 'react'
import './MenuLinks.css'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { name: "BIO", path: "/bio" },
  { name: "EDITORIAL", path: "/editorial" },
  { name: "CREATIVO", path: "/creative" },
  { name: "PERSONAJES", path: "/character" },
  { name: "BEAUTY", path: "/beauty" },
  { name: "PELO", path: "/hair" },
  { name: "FX", path: "/fx" },
  { name: "CONTACTO", path: "/contact" }
];


export const MenuLinksComponent = React.memo(({ classNameNav, className }) => {

  return (
    <>
    <nav className={classNameNav}> 
        <ul className={`menuLinks ${className}`}> 
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
    </>
  )
})

