import React from 'react'
import './Header.css'
import { MenuLinks } from '../MenuLinks/MenuLinks';


export const Header = () => {

  return (
    <>
        <div className='divHeader'>
            <div className='divLogo'>
                <img className='logo' src="/assets/pics/MKlogoWebTransparente.png" alt="logo" />
            </div>
            <MenuLinks />
        </div>
    </>
  )
}

