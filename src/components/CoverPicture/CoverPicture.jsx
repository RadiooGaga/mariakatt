import React from 'react'
import { micloudinary } from '../../utils/config';
import './CoverPicture.css'


export const CoverPicture = () => {

  return (
    <div className='coverPictureDiv'>
      <img 
      className='coverImage' 
      src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1742839856/makeup/creative/orange_puppet_gekj2f.webp`} 
      alt="coverImage" />
    </div>
  )
}

