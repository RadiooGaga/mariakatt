import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { MainPage } from './pages/MainPage/MainPage';
import { Bio } from './pages/Bio/Bio';
import { Editorial } from './pages/Editorial/Editorial'
import { Creative } from './pages/Creative/Creative';
import { Character } from './pages/Character/Character';
import { Beauty } from './pages/Beauty/Beauty';
import { Hair } from './pages/Hair/Hair';
import { Contact } from './pages/Contact/Contact';
import { GalleryProvider } from './utils/galleryContext';



function App() {

  return (
    <>
      <GalleryProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/character" element={<Character />} />
          <Route path="/beauty" element={<Beauty />} /> 
          <Route path="/hair" element={<Hair />} /> 
          <Route path="/contact" element={<Contact />} /> 
            
          </Routes>
      </GalleryProvider>
    </>
  )
}

export default App
