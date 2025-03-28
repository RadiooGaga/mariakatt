import React from 'react'
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