import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Home } from './pages/Home/Home'



function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/bio" element={<ByLetter />} />*/}
        </Routes>
    </>
  )
}

export default App
