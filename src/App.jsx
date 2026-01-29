import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import About from './pages/About/About.jsx'
import Header from './components/Header.jsx'
import "./App.css"

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop searchQuery={searchQuery} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
