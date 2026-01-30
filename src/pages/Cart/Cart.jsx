import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity, clearCart } =
  useContext(CartContext);

  const navigate = useNavigate();

  // calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => { // this function handles the checkout process
  navigate("/checkout", {
    state: {
      items: cartItems,
      total: totalPrice
    }
  });

  clearCart();
};

  return (
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

              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    updateCartQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
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
          ))}

          {/* section for displaying total price and checkout button */}
          <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
        </button>
        </div>
        
        </div>
      )}
    </div>
  );
}
