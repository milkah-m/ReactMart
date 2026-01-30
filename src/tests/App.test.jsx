import {render, screen, waitFor, fireEvent} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; //memory router is routing for tests but what about browser router
  //do we use them hand in hand or not?
import { CartProvider } from "../context/CartContext";
import App from "../App"


test ("renders the app without crashing", () => {
    render (
        <CartProvider>
            <MemoryRouter>
            <App />
        </MemoryRouter>
        </CartProvider>
        
    );
});


// test("adds item to cart when Add To Cart button is clicked", async () => {
//   render(
//     <MemoryRouter initialEntries={["/shop"]}>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </MemoryRouter>
//   );

//   // Wait for loading to disappear and products to appear
//   await waitFor(() => {
//     expect(screen.queryByText(/Loading products/i)).not.toBeInTheDocument();
//   }, { timeout: 2000 }); // give enough time for the 1.3s timeout

//   // Now the product button should exist
//   const addToCartButton = screen.getByRole("button", { name: /Add to Cart/i });

//   // Click the button
//   await userEvent.click(addToCartButton);

//   // Check cart badge
//   const cartBadge = screen.getByText("1");
//   expect(cartBadge).toBeInTheDocument();

//   screen.debug();
// });
test ("adds item to cart when Add To Cart button is clicked", async () =>{
    render (
        <CartProvider>
          <MemoryRouter initialEntries ={["/shop"]}>
            <App/>
             </MemoryRouter>
        </CartProvider>
       
        );

        await waitFor(() => {
            expect (screen.queryByText(/Loading products/i)).not.toBeInTheDocument();
        }, {timeout: 2000});

       
    //find button
    const addToCartButton =  screen.getAllByText(/add to cart/i);
    //simulate clicking event
    fireEvent.click(addToCartButton[0] )
//      const cartBadge = screen.getByText(/1/); // assuming badge shows '1'
//   expect(cartBadge).toBeInTheDocument();
const cartButton = screen.getAllByText(/1/);
expect (cartButton[0]).toBeInTheDocument()
    
})
