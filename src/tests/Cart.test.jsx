
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
        screen.getByText(/Add fresh groceries and they’ll show up here./i)
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
                expect (screen.queryByText(/Loading fresh groceries/i)).not.toBeInTheDocument();
            }, {timeout: 2000});

    const addButtons = await screen.findAllByTestId(/add/);

    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1])

    //here i am trying to navigate to the cart page
   
    const cartLink = screen.getByTestId(/cart/i);
    fireEvent.click(cartLink)

    //here i am getting all the elements with the cart-item id and then looping through them to get their sum
   const cartPrices = screen.getAllByTestId("cart-item-price");

const totalCartPrices = cartPrices
  .map(el => parseFloat(el.textContent.replace("Ksh ", ""))) // convert text to numbers
  .reduce((sum, price) => sum + price, 0); // sum numbers
   
  const totalPrice = screen.getByTestId("cart-final-total");
expect(totalPrice).toHaveTextContent(`Ksh ${totalCartPrices.toFixed(2)}`);

})

