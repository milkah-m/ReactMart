    import {useContext }from 'react'
    import { CartContext } from '../context/CartContext'
    

export default function Cart(){
const {cartItems, removeFromCart, updateCartQuantity} = useContext (CartContext)

    return (
        <div>
              {/* {products.map((product) => (<ProductCard key={product.id} product={product} />))} */}
            {cartItems.length === 0 ?( <p>Your cart is empty!</p>) : 
            (cartItems.map(item => 
            <div key={item.id} >  
                <h4>name: {item.name}</h4>
                 <p>price: {item.quantity * item.price}</p>
                 <p>quantity: {item.quantity}</p>
                 <button onClick ={() => updateCartQuantity(item.id, (item.quantity - 1))}>-</button>
                 <button onClick ={() => removeFromCart(item.id)}>Remove From Cart</button>
                  <button onClick ={() => updateCartQuantity(item.id, (item.quantity + 1))}>+</button>
                </div>))}
        </div>
    )
}