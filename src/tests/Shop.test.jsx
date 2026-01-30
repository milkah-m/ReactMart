import {render, screen, waitFor, fireEvent} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; //memory router is routing for tests but what about browser router
  //do we use them hand in hand or not?
import { CartProvider } from "../context/CartContext";
import App from "../App"

beforeEach(() => {
  localStorage.clear();
});

test ("adds item to cart when Add To Cart button is clicked", async () =>{
    render (
        <CartProvider>
          <MemoryRouter initialEntries ={["/shop"]}>
            <App/>
             </MemoryRouter>
        </CartProvider>
       
        );

        await waitFor(() => {
            expect (screen.queryByText(/Loading fresh groceries/i)).not.toBeInTheDocument();
        }, {timeout: 2000});

  const addToCartButton =  await screen.findAllByText(/add to cart/i);
     fireEvent.click(addToCartButton[0] )

    const firstProductName = screen.getAllByTestId("product-name")[0].textContent.trim()

    const cartLink = screen.getByTestId(/cart/i);
    fireEvent.click(cartLink);

    const cartItem = await screen.findAllByTestId("cart-item-name");
    expect(cartItem[0]).toHaveTextContent(firstProductName)

    
})

test ("cart counter updates correctly", async () =>{
    render (
        <CartProvider>
          <MemoryRouter initialEntries ={["/shop"]}>
            <App/>
             </MemoryRouter>
        </CartProvider>
       
        );

        await waitFor(() => {
            expect (screen.queryByText(/Loading fresh groceries/i)).not.toBeInTheDocument();
        }, {timeout: 2000});

       

    const addToCartButton =  await screen.findAllByText(/add to cart/i);

    fireEvent.click(addToCartButton[0] )
    fireEvent.click(addToCartButton[1] )

const cartBadge = screen.getByTestId("cart-badge");
expect (cartBadge).toHaveTextContent("2")
    
})