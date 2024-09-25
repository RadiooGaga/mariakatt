import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Home } from './pages/Home/Home'
import { Bio } from './pages/Bio/Bio';
import { Editorial } from './pages/Editorial/Editorial'
import { Creative } from './pages/Creative/Creative';
import { Character } from './pages/Character/Character';



function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/character" element={<Character />} />
        </Routes>
    </>
  )
}

export default App
