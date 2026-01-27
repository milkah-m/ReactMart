import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<About />} />
      </Routes>

  );
}

export default App;

