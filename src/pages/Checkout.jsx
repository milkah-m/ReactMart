import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation(); // useLocation hook is used to access the state passed via navigation
  const navigate = useNavigate(); // useNavigate hook is used to help with navigation between routes

  if (!state) { // if the items or total data is not available in the state it returns a message saying no data found
    return (
      <div>
        <h2>No checkout data found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const { items, total } = state;

  return (
    <div className="checkout-page">
      <h1>Checkout Summary</h1>

      {items.map(item => ( // this maps through the items array and displays each item's name, quantity, and price
        <div key={item.id}>
          <p>
            {item.name} × {item.quantity} — $
            {(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <h3>Total Paid: ${total.toFixed(2)}</h3>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
