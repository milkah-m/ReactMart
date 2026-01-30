

//1. import context creation feature and useState
import {createContext, useState, useEffect} from 'react';

//2. export the CartContext variable which has created the context
export const CartContext = createContext ()

//cart provider function that wraps all state logic
export function CartProvider ({children}){
    //3. set state and initiate local storage
const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems"); // this line retrieves the cart items from local storage
    return storedCart ? JSON.parse(storedCart) : [] // if there are stored items, return them, otherwise return an empty array
})


useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems])


//1. the add to cart function takes in a product as the parameter and is an arrow function
const addToCart = (product) => {
//2. use .find to look for matching products and assign this value to a variable
    setCartItems(prevItems => {const existingItem = prevItems.find(item => item.id === product.id);
 //3. for an existing item, map through the previous items array and for the item that matches the product id, spread
    //out the object and update the quantity by adding 1. for all the other items return them as they are
       if (existingItem) { return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity+1} : item);

    }
//4. otherwise if there is no existing item. then to the previous items array, add a new product and set its quantity to 1
    return [...prevItems, {...product, quantity:1}]; // this line adds the new product to the cart with an initial quantity of 1 and the spread operator (...) is used to copy all properties of the product object into the new object

    });
  
}


    //1. the remove from cart function takes in the item id as an argument
    const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    
}


const updateCartQuantity = (id, newQuantity) => {
 newQuantity === 0
 ? removeFromCart(id)
: setCartItems(prevItems => prevItems.map( item => item.id === id ? {...item, quantity: newQuantity}
: item)) 


}

const clearCart = () => { // this function clears all items from the cart
  setCartItems([]);
};


return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart}}>
        {children}
    </CartContext.Provider>
)


}
