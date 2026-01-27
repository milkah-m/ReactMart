// import { Routes, Route } from 'react-router-dom'
// Import your pages:

// jsx
// Copy code
// import Home from './pages/Home'
// import Shop from './pages/Shop'
// import Cart from './pages/Cart'
// import About from './pages/About'
// Inside the return:

// jsx
// Copy code
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/shop" element={<Shop />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/about" element={<About />} />
// </Routes>

import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import About from './pages/About'


function App() {
    return( <div>
        <Shop />
        <Cart />
        <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/' element ={<Shop />} />
            <Route path='/' element ={<Cart />} />
            <Route path='/' element ={<About />} />
        </Routes>
    </div>
         
       

    )
}

export default App
