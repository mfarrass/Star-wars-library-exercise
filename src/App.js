import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'

import './main.css' // cara langsung mengaplikasikan css global di file ini, buat main css di folder src

import Header from './Components/Header/Header'
import Movie from './Components/Pages/Movie'


const App = () => {


  return (
    <div className='app_container'>
      <BrowserRouter>
      <Header />
      <Routes>
          {/* untuk memberi informasi film di browse */}
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
