import React from 'react'
//import { NavLink } from 'react-router-dom'
import './Header.css'


export const Header = () => {

  return (
    <>
        <div className='divHeader'>
            <div className='divLogo'>
                <img className='logo' src="/assets/pics/MKlogoWebTransparente.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>BIO</li>
                    <li>EDITORIAL</li>
                    <li>CREATIVE</li>
                    <li>CHARACTER</li>
                    <li>HAIRSTYLES</li>
                    <li>BEAUTY</li>
                </ul>
            </nav>
        </div>
    </>
  )
}



/*<li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>BIO</NavLink ></li> */