import React from 'react'
import './BurguerMenu.css'


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

