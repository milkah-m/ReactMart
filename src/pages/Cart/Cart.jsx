import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle checkout
  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        items: cartItems,
        total: totalPrice,
      },
    });
    clearCart();
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <section className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add fresh groceries and they’ll show up here.</p>
        <button onClick={() => navigate("/shop")}>Shop Groceries</button>
      </section>
    );
  }

  return (
    <main className="cart-page">
      {/* Cart items section */}
      <section className="cart-items">
        <h1>Your Cart</h1>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p className="price">Ksh {item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateCartQuantity(item.id, item.quantity - 1)
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateCartQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-item-actions">
              <p className="item-total">
                Ksh {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Order summary */}
      <aside className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="summary-row">
          <span>Total</span>
          <strong>Ksh {totalPrice.toFixed(2)}</strong>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </aside>
    </main>
  );
}
