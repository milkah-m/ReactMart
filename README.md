ReactMart 🛒

Author: Farhiya Mohamed Abdi
GitHub: ReactMart

Live Demo: https://the-react-mart.vercel.app/?_vercel_share=29mZs2usqUzoAnFS5fd0zpeZ6iX5tzqb

Project Overview

ReactMart is a React-based e-commerce application that allows users to:

Browse a list of products

View and manage a shopping cart

Navigate between multiple pages (Home, Shop, Cart, About)

This project demonstrates React fundamentals, including:

Component-based architecture

Dynamic rendering of data

Global state management using Context API

Routing using React Router

Custom hooks for data fetching

Vite is used for fast development and hot-reloading.

Features

Shop Page: Displays products with name, image, and price

Cart Page: Shows selected items; starts empty

Navigation: Navigate between Home, Shop, Cart, About pages

Global State: Cart state managed using Context API

Reusable Components: CartItem, Navbar, ProductCard

Product Searching: Search bar on Navbar for filtering products

Checkout & Total Price: Items in cart show quantity and total price

Persistent Data: Cart state saved in local storage

Tech Stack

React 18

React Router Dom

Context API

Custom Hooks

Vite

JavaScript (ES6+)

CSS

Project Structure
ReactMart/
│
├─ public/                 # Root HTML template
├─ src/
│  ├─ assets/              # Images and static assets
│  ├─ components/          # Reusable UI components
│  ├─ context/             # CartContext for global cart state
│  ├─ data/                # Product data array
│  ├─ hooks/               # Custom React hooks
│  │   └─ useProducts.js   # Custom hook for fetching product data
│  ├─ pages/               # Full-page components (Home, Shop, Cart, About)
│  ├─ App.jsx              # Main app layout and route definitions
│  ├─ App.css              # Individual styling
│  ├─ main.jsx             # Entry point, sets up Router + CartProvider
│  └─ index.css            # Global CSS styles
├─ package.json            # Dependencies and scripts
└─ README.md               # Project documentation

Custom Hook: useProducts

The useProducts hook handles fetching product data and managing loading state:

import { useState, useEffect } from "react";
import products from "../data/products";

export default function useProducts() {
  // Stores product data
  const [data, setData] = useState([]);

  // Tracks loading state
  const [loading, setLoading] = useState(true);

  // Async function to simulate fetching products from an API
  const fetchProducts = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1300));
      setData(products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return { data, loading };
}


Breakdown (step by step):

useState([]) initializes an empty array for data and provides setData to update it.

useState(true) initializes the loading state as true.

fetchProducts is an async function that simulates an API call using a timeout, then sets the product data.

useEffect runs fetchProducts once on component mount.

Returns { data, loading } so any component can consume product data and loading state.

Setup & Installation

Clone the repository:

git clone https://github.com/milkah-m/ReactMart.git


Navigate into the project folder:

cd ReactMart


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser: Navigate to the URL shown in terminal

How the Application Works

main.jsx sets up the React app, wrapping it in:

StrictMode for developer warnings

CartProvider for global cart state

BrowserRouter for routing

App.jsx defines page routing:

/ → Home

/shop → Shop

/cart → Cart

/about → About

Shop page dynamically renders products using useProducts hook.

Cart page displays selected items with quantity and total price.

Navbar allows searching products in real-time.

Usage

Go to /shop to view products.

Add items to the cart.

Check /cart to view selected items and total price.

Navigate to /about or / for additional info.

Future Improvements

Add category filters for products

Add backend payment functionality

License

This project is for educational purposes.