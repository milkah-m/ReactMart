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
  const { addToCart, cartItems, updateCartQuantity } = useContext(CartContext);

  const cartItem = cartItems.find(item => item.id === product.id); // this helps to fid the product in the cart

  return (
    <div
      style={{
        border: "1px solid #434343",
        borderRadius: "8px",
        padding: "12px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        margin: "10px",
        backgroundColor: "#6e6e6e"
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

      <h3 style={{ margin: "10px 0 5px" }}>{product.name}</h3>
      <p>${product.price}</p>

      {cartItem ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "8px"
          }}
        >
          <button
            onClick={() =>
              updateCartQuantity(
                product.id,
                Math.max(cartItem.quantity - 1, 0)
              )
            }
          >
            −
          </button>

          <span>{cartItem.quantity}</span>

          <button
            onClick={() =>
              updateCartQuantity(product.id, cartItem.quantity + 1)
            }
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "8px",
            padding: "6px 12px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};


