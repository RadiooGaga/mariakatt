import React from 'react'
import { micloudinary } from '../../utils/config';
import './CoverPicture.css'


export const CoverPicture = () => {

  return (
    <div className='coverPictureDiv'>
      <img 
      className='coverImage' 
      src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1748787152/makeup/pics/orange_puppet_cwebsa.webp`} 
      alt="coverImage" />
    </div>
  )
}

