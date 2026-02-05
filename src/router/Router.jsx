import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Cart from '../pages/Cart.jsx';
import About from '../pages/About.jsx';
import Checkout from "./pages/Checkout";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
};

export default Router;