import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPages from './Pages/AboutPages/AboutPages';
import ContactPages from './Pages/ContactPages/ContactPages';
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout/ >}>
            <Route path='about' element={<AboutPages />} />
            <Route path='contact' element={<ContactPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App