import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Home } from './pages/Home/Home'
import { Bio } from './pages/Bio/Bio';
import { Editorial } from './pages/Editorial/Editorial'



function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/editorial" element={<Editorial />} />
        </Routes>
    </>
  )
}

export default App
