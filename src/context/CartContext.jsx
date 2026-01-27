// import { createContext, useState } from 'react';

// // Create the context
// export const CartContext = createContext();

//1. import context creation feature and useState
import {createContext, useState} from 'react';

//2. export the CartContext variable which has created the context
export const CartContext = createContext ()

//cart provider function that wraps all state logic
export function CartProvider ({children}){
    //3. set state
const [cartItems, setCartItems] = useState([])


//1. the add to cart function takes in a product as the parameter and is an arrow function
const addToCart = (product) => {
//2. use .find to look for matching products and assign this value to a variable
    setCartItems(prevItems => {const existingItem = prevItems.find(item => item.id === product.id);
 //3. for an existing item, map through the previous items array and for the item that matches the product id, spread
    //out the object and update the quantity by adding 1. for all the other items return them as they are
       if (existingItem) { return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity+1} : item);

    }
//4. otherwise if there is no existing item. then to the previous items array, add a new product and set its quantity to 1
    return [...prevItems, {...product, quantity:1}];

    });
  
}


//5. create function that allows me to remove from the cart
    //crossing out unwanted items
    //here i know i definitely need to implement a decrementing sort of situation but how do i do this?
    
//     const removeFromCart = (id) => {
//     setCartItems(prevItems => 
//         prevItems.map(item => {
//             if (item.id === id) {
//                 // If quantity > 1, decrement
//                 if (item.quantity > 1) {
//                     return { ...item, quantity: item.quantity - 1 }
//                 }
//                 // If quantity is 1, filter it out later
//                 return null
//             }
//             return item
//         })
//         .filter(Boolean) // removes any null values (items with quantity 1 that were "removed")
//     )
// }
    //1. the remove from cart function takes in the item id as an argument
    const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    
}

//6. create a function to update the quantity of an item in the cart
   //to tell the cart that a product has so many units

//
const updateCartQuantity = (id, newQuantity) => {
 newQuantity === 0  
 ? removeFromCart(id)
: setCartItems(prevItems => prevItems.map( item => item.id === id ? {...item, quantity: newQuantity} 
: item)) 
console.log("quantity updated!");

}
   

   
  

return (
    <CartContext.Provider value = {{cartItems, addToCart, removeFromCart, updateCartQuantity}}>
         {children}
    </CartContext.Provider>
)

}

