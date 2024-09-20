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
                    <li className='line-through'>BIO</li>
                    <li className='line-through'>EDITORIAL</li>
                    <li className='line-through'>CREATIVE</li>
                    <li className='line-through'>CHARACTER</li>
                    <li className='line-through'>HAIRSTYLES</li>
                    <li className='line-through'>BEAUTY</li>
                    <li className='line-through'>CONTACT</li>
                </ul>
            </nav>
        </div>
    </>
  )
}



/*<li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>BIO</NavLink ></li> */