    import {useContext }from 'react'
    import { CartContext } from '../../context/CartContext'
    import { useNavigate } from 'react-router-dom';
    import "./Cart.css"
    

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h4>Ready when you are</h4>
          <p>Your cart will update as soon as you add your favorite products</p>
          <button onClick={() => navigate("/shop")}>Start Shopping</button>
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

              <h4>Item: {item.name}</h4>
              <p>Price: {item.quantity * item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Cart
              </button>
              <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="cart-total">
              <h3>Total: {totalPrice.toFixed(2)}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
