import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPages from './Pages/HeroPages/HeroPages';
import ColectionPages from './Pages/ColectionPages/ColectionPages';
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout/ >}>
            <Route path='about' element={<HeroPages />} />
            <Route path='contact' element={<ColectionPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App