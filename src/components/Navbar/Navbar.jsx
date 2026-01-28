

import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css"



function Navbar() {
 const {cartItems} = useContext(CartContext)
 const cartItemCount = cartItems.length


    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><NavLink to='/' end>Home</NavLink></li>
                 <li><NavLink to='/shop'>Shop</NavLink></li>
                 <li className="cart">
                    <NavLink to='/cart' className="cart-link">
                    Cart <FaShoppingCart className = "cart-icon"/>
                    {cartItemCount > 0 &&(
                    <span className="cart-count">{cartItemCount}</span>)}
                    </NavLink></li>
                 <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar