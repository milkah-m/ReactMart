import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  // State to control tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo placeholder */}
      <div className="nav-logo">
        {/* Add your logo here if needed */}
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      {/* Search and Cart Actions */}
      <div className="nav-actions">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search groceries..."
          className="nav-search"
        />

        {/* Cart link with tooltip */}
        <NavLink
          to="/cart"
          className="cart-link"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaShoppingCart className="cart-icon" />
          {cartItemCount > 0 && (
            <>
              <span className="cart-count">{cartItemCount}</span>
              {showTooltip && (
                <span className="cart-tooltip">
                  {cartItemCount} item{cartItemCount > 1 ? "s" : ""}
                </span>
              )}
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;


