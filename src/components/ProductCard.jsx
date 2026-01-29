

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  //1. pulling two functions and one state variable from cart context
  const { addToCart, cartItems, updateCartQuantity } = useContext(CartContext);

  //2. this guides in button decision making. should i show addToCart or (+/-) buttons
  const cartItem = cartItems.find(item => item.id === product.id); 

  return (
    <div

    //3. here i am doing inline styling for the product card itself
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
      {/* 4. here i am doing inline styling for the image */}
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
       {/* //5. here i am displaying the name with a bit of inline styling and the product price */}
      <h3 style={{ margin: "10px 0 5px" }}>{product.name}</h3>
      <p>${product.price}</p>
{/* 
       6. conditional rendering for the cartItem */}
      {cartItem ? (

        // 7. if the items is in the cart then...
        <div
        //8. inline styling for the quantity controls
          style={{
            display: "flex", //horizontal layout
            alignItems: "center", //vertical alignment inside the row which keeps numbers and buttons at the same height
            justifyContent: "center", //horizontal alignemnt: it centers everything inside the product card
            gap: "8px", //clean spacing between each child
            marginTop: "8px" //ensures quantity controls are not touching price
          }}
        >
          <button
            onClick={() =>
              updateCartQuantity(
                product.id,
                // Math.max here ensures that the quantity never goes below 0
                Math.max(cartItem.quantity - 1, 0) 
              )
            }
          >
            -
          </button>
           
          {/* i use a span here because spans are the best for displaying "small" displays */}
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


