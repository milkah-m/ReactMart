// //1. imports
//    //so here i am importing context to be able to implement the functions defined therein within my code
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// //2. getting the add to cart function from cart context


// // {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
// //3. implementing a button to test adding to the cart

// export  const ProductCard = ({product}) =>{
//     const {addToCart} = useContext (CartContext)
//     return (<div>
//         <button onClick= {() => addToCart(product)}>Add to Cart</button>
//         </div>)
// }


// Updating how ProductCard.jsx will display product information along with the add to cart button

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart, cartItems, updateCartQuantity } = useContext(CartContext); // Getting addToCart, cartItems, and updateCartQuantity from CartContext

  const cartItem = cartItems.find(item => item.id === product.id); // This will help find if the product is already in the cart

  return (        //Basic css...
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.77)",
        margin: "10px"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "6px"
        }}
      />

      <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{product.name}</h3>
      <p>${product.price}</p>

      {!cartItem ? (
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#343434",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <button
            onClick={() => updateCartQuantity(product.id, cartItem.quantity - 1)}
            style={{
              padding: "4px 8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: "#343434"
            }}
          >
            −
          </button>

export  const ProductCard = ({product}) =>{
    const {addToCart} = useContext (CartContext)
    return (<div >
                {/* <h4>name: {product.name}</h4>
                 <p>price: {product.price}</p> */}
        <button onClick= {() => addToCart(product)}>Add to Cart</button>
        </div>)
}

          <button
            onClick={() => updateCartQuantity(product.id, cartItem.quantity + 1)}
            style={{
              padding: "4px 8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: "#343434"
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

