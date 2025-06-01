import React from 'react'
import './BurguerMenu.css'
import { micloudinary } from '../../utils/config'


export const BurguerMenu = ({onClick}) => {

  return (
    <>
        <div className="menu-mobile" onClick={onClick}>
            <img 
            src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1748787150/makeup/pics/menuburguerRed_ylypni.png`}
            alt='menu-hamburguesa' 
            className='burguerMenu'  />
        </div>
    </>
  )
}

