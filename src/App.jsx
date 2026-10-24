import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from "./Pages/HomePages/HomePages";
import AboutPages from './Pages/AboutPages/AboutPages';
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path='home' element={<HomePages />} />
            <Route path='about' element={<AboutPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App