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




