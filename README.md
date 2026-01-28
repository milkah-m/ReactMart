# ReactMart 🛒

**Author:** 
**GitHub:** 

---

## Project Overview

ReactMart is a **React-based e-commerce application** that allows users to:

- Browse a list of products
- View and manage a shopping cart
- Navigate between multiple pages (Home, Shop, Cart, About)

This project demonstrates **React fundamentals**, including:

- Component-based architecture
- Dynamic rendering of data
- Global state management using **Context API**
- Routing using **React Router**

Vite is used for fast development and hot-reloading.

---

## Features

- **Shop Page:** Displays products with name and price  
- **Cart Page:** Shows selected items; starts empty  
- **Navigation:** Navigate between Home, Shop, Cart, About pages  
- **Global State:** Cart state managed using Context API  
- **Reusable Components:** ProductCard, Header, Footer  

---

## Tech Stack

- React 18  
- React Router Dom  
- Context API  
- Vite  
- JavaScript (ES6+)  
- CSS  

---

## Project Structure
ReactMart/
│
├─ public/ # Root HTML template
├─ src/
│ ├─ assets/ # Images and static assets
│ ├─ components/ # Reusable UI components
│ ├─ context/ # CartContext for global cart state
│ ├─ data/ # Product data array
│ ├─ pages/ # Full-page components (Home, Shop, Cart, About)
│ ├─ App.jsx # Main app layout and route definitions
│ ├─ main.jsx # Entry point, sets up Router + CartProvider
│ └─ index.css # Global CSS styles
├─ package.json # Dependencies and scripts
└─ README.md # Project documentation

---

## Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/milkah-m/ReactMart.git
Navigate into the project folder:
   cd ReactMart
Install dependencies:
    npm install
Start the development server:
    npm run dev
Open in browser:
Navigate to the URL shown in terminal
How the Application Works
main.jsx sets up the React app, wrapping it in:
StrictMode for developer warnings
CartProvider for global cart state
BrowserRouter for routing
App.jsx defines page routing.
/ → Home
/Shop → Shop
/Cart → Cart
/About → About
Shop page dynamically renders products from src/data/.
Cart shows the selected items using global state from CartContext.
Important Note:
In the corrected App.jsx, <Shop /> and <Cart /> are rendered only inside <Routes>, preventing duplicate product and cart display on all pages.
Usage
Go to /Shop to view products.
Add items to the cart (if Add to Cart buttons are implemented).
Check /Cart to view selected items.
Navigate to /About or / for additional information.
Future Improvements
Add category filters for products
Implement total cart price calculation
Make the layout responsive for mobile devices
Add checkout functionality
License
This project is for educational purposes.

---




Project Name: ReactMart

Problem Statement: users want to view groceries and add them to a cart

Problem Solution: Create a React front-end app that implements routing, pages, and an interactive cart.

Features/Pages list: Home, Shop, Cart, About

