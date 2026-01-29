import { React } from 'react'

import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import About from './pages/About/About.jsx'
import Header from './components/Header.jsx'
import "./App.css"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("")
    return(
      <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Shop searchQuery={searchQuery}/>
      </>
    )
}

export default App
