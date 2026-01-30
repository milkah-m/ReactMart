
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css"

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="nav-logo"></div>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search groceries..."
          className="nav-search"
        />

        <NavLink to="/cart" className="cart-link">
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;


