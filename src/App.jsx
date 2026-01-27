
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
            <Route path='/Shop' element ={<Shop />} />
            <Route path='/Cart' element ={<Cart />} />
            <Route path='/About' element ={<About />} />
        </Routes>
    </div>
         
       

    )
}

export default App
