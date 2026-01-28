    import {useContext }from 'react'
    import { CartContext } from '../context/CartContext'
    

export default function Cart(){
const {cartItems, removeFromCart, updateCartQuantity} = useContext (CartContext)

/* <div className="cart">
  {cartItems.length === 0 ? (
    <div className="cart-empty">
      ...
    </div>
  ) : (
    <div className="cart-items">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          ...
        </div>
      ))}
    </div>
  )}
</div> */
   return (
  <div className='cart'>
    {cartItems.length === 0 ? (
      <div className='empty-cart'>
        <h4>Ready when you are</h4>
        <p>Your cart will update as soon as you add your favorite products</p>
        <button>Start Shopping</button>
      </div>
    ) : (
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className='singular-cart-item'>  
            <h4>name: {item.name}</h4>
            <p>price: {item.quantity * item.price}</p>
            <p>quantity: {item.quantity}</p>
            <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
            <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
        ))}
      </div>
    )}
  </div>
);
}
