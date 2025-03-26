import React from 'react'
import './Logo.css'
import { useNavigate } from 'react-router-dom'

export const Logo = ({width}) => {

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <div className='divLogo' onClick={handleClickLogo} style={{ width: width }}>
        <img className='logo' src="/assets/pics/MKlogoWebTransparente.png" alt="logo" />
    </div>
  )
}
