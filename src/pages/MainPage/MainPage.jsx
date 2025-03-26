import React from 'react'
import { Navigate } from 'react-router-dom'
import './MainPage.css'
import { Logo } from '../../components/Logo/Logo'
import { MenuLinksComponent } from '../../components/MenuLinks/MenuLinks'
import { CoverPicture } from '../../components/CoverPicture/CoverPicture'


export const MainPage = () => {

  return (
    <section className='mainDiv'>
        <CoverPicture />
      <div className='coverMenu'>
        <Logo /> 
        <MenuLinksComponent />
      </div>
    </section>
  )
}