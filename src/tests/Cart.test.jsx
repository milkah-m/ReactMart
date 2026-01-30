
import {fireEvent, render, screen, waitFor} from "@testing-library/react"
//had forgotten to import memory router
import { MemoryRouter } from "react-router-dom"
import App from "../App"
import Cart from "../pages/Cart/Cart"
import { CartProvider } from "../context/CartContext"
import { expect } from "vitest"

test ("shows empty cart message when cart is empty", () => {
    render(
        <MemoryRouter>
         <CartProvider>
            <Cart/>
         </CartProvider>
        </MemoryRouter>
    );
    expect(
        screen.getByText(/ready when you are/i)
    ).toBeInTheDocument();
    });
test ("total price updates correctly dynamically", async() => {
    render(
        <MemoryRouter initialEntries = {["/shop"]}>
            <CartProvider>
                <App/>
            </CartProvider>
        </MemoryRouter>
    );

           await waitFor(() => {
                expect (screen.queryByText(/Loading products/i)).not.toBeInTheDocument();
            }, {timeout: 2000});

    const addButtons = await screen.findAllByTestId("add");

    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1])

    //here i am trying to navigate to the cart page
   
    const cartLink = screen.getByTestId(/cart/i);
    fireEvent.click(cartLink)

    //here i am getting all the elements with the cart-item id and then looping through them to get their sum
    const cartPrices = screen.getAllByTestId("cart-item-price")
    const totalCartPrices = cartPrices
    //parse float turns letters into prices
    //how do parseFloat and price work together?
    .map(el => parseFloat(el.textContent.replace("$", "")))
    //here i am summing up all the prices that are now numbers
    //haven't completely understood exactly how this method works
    .reduce((sum, price) => sum + price, 0)
     //here i am getting the total Price so that i can expect it to be equal to the sum i just got
     const totalPrice = screen.getByTestId("cart-total")

     //here i am writing the final line where i expect the total price to have text content of the items i 
       //just mapped through
       expect(totalPrice).toHaveTextContent(`$${totalCartPrices.toFixed(2)}`);

})

