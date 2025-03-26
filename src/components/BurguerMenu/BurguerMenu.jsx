import React, { useState, useEffect} from 'react'
import './BurguerMenu.css'
import { MenuLinksComponent } from '../MenuLinks/MenuLinks';


export const BurguerMenu = ({onClick}) => {

  return (
    <>
        <div className="menu-mobile" onClick={onClick}>
            <img 
            src='/assets/pics/menuburguerRed.png' 
            alt='menu-hamburguesa' 
            className='burguerMenu'  />
        </div>
    </>
  )
}

