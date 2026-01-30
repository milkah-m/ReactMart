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
<<<<<<< HEAD
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h4>Ready when you are</h4>
          <p>Your cart will update as soon as you add your favorite products</p>
          <button onClick={() => navigate("/shop")}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="singular-cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
<<<<<<< HEAD
=======
    <div className="cart-item-details">
  <h4 className="cart-item-name" data-testid="cart-item-name">{item.name}</h4>
  <p className="cart-item-price">
    ${ (item.price * item.quantity).toFixed(2) }
  </p>
</div>
>>>>>>> fad0fd4ab75a97e67b3603c311443cfde4435b42
=======
    <main className="cart-page">
      {/* Cart items section */}
      <section className="cart-items">
        <h1>Your Cart</h1>
>>>>>>> 6e3e1c8c2a774d008c141b1fcfc4cfc35e2fef68

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h4 data-testid="cart-item-name">{item.name}</h4>
              <p className="price" data-testid="cart-item-price">Ksh {item.price}</p>

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
              <p className="item-total" data-testid="cart-item-total">
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
          <strong data-testid="cart-final-total">Ksh {totalPrice.toFixed(2)}</strong>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </aside>
    </main>
  );
}
