import React from 'react'
import './Logo.css'
import { useNavigate } from 'react-router-dom'
import { micloudinary } from '../../utils/config'

export const Logo = ({width}) => {

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <div className='divLogo' onClick={handleClickLogo} style={{ width: width }}>
        <img className='logo' src={`https://res.cloudinary.com/${micloudinary}/image/upload/v1748612335/makeup/logos/MKlogoWebTransparente_xzgwqv.png`} alt="logo" />
    </div>
  )
}
