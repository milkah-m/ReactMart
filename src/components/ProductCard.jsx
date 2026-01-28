//1. imports
   //so here i am importing context to be able to implement the functions defined therein within my code
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

//2. getting the add to cart function from cart context


// {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
//3. implementing a button to test adding to the cart

export  const ProductCard = ({product}) =>{
    const {addToCart} = useContext (CartContext)
    return (<div >
                {/* <h4>name: {product.name}</h4>
                 <p>price: {product.price}</p> */}
        <button onClick= {() => addToCart(product)}>Add to Cart</button>
        </div>)
}


