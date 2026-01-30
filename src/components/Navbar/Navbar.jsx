import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  const [showTooltip, setShowTooltip] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Simple search: navigate to Shop with search term as state
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/shop", { state: { search: searchTerm } });
      setSearchTerm(""); // optional: clear input
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">{/* Add logo here */}</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search groceries..."
          className="nav-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />

        <NavLink
          to="/cart"
          className="cart-link"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaShoppingCart className="cart-icon"/>
          {cartItemCount > 0 && (
            <>
              <span className="cart-count" data-testid="cart-badge">{cartItemCount}</span>
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

