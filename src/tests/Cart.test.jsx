// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import Cart from "../pages/Cart/Cart";
// import { CartProvider } from "../context/CartContext";

// test("shows empty cart message when cart is empty", () => {
//   render(
//     <BrowserRouter>
//       <CartProvider>
//         <Cart />
//       </CartProvider>
//     </BrowserRouter>
//   );

//   expect(
//     screen.getByText(/ready when you are/i)
//   ).toBeInTheDocument();
// });

import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Cart from "../pages/Cart/Cart"
import { CartProvider } from "../context/CartContext"
import { expect } from "vitest"

test ("shows empty cart message when cart is empty", () => {
    render(
        <BrowserRouter>
         <CartProvider>
            <Cart/>
         </CartProvider>
        </BrowserRouter>
    );
    expect(
        screen.getByText(/ready when you are/i)
    ).toBeInTheDocument();
    });