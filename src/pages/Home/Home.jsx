import React from 'react'
import './Home.css'

import { Header } from '../../components/Header/Header'



export const Home = () => {

  return (
    <section className='homeCover'>
      <img className='coverImage' src="/public/assets/pics/orange puppet.jpg" alt="coverImage" />
      <Header />
    </section>
  )
}

