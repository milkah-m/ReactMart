ReactMart 🛒

Authors: Farhiya Mohamed Abdi

Deployment Link: https://the-react-mart.vercel.app/?_vercel_share=29mZs2usqUzoAnFS5fd0zpeZ6iX5tzqb


GitHub Repository:
https://github.com/milkah-m/ReactMart

📌 Project Overview

ReactMart is a React-based e-commerce application that allows users to browse products, add items to a shopping cart, and manage their cart across multiple pages.

The project demonstrates strong understanding of React fundamentals, including component architecture, global state management, routing, and testing.

✨ Features

Shop Page

Displays a list of products with names and prices

Supports product searching

Add-to-cart functionality with quantity controls

Cart Page

Displays items added to the cart

Shows quantity controls (+ / −)

Displays total price for all items

Shows an empty cart message when no items are present

Navigation

Seamless navigation between Home, Shop, Cart, and About pages

Global State Management

Cart state managed using React Context API

Prevents prop drilling and ensures consistent state across routes

Data Persistence

Cart data is persisted using localStorage, so cart items remain after refresh

Testing

Component and feature-level tests implemented using React Testing Library

Tests cover rendering, cart updates, badge updates, and cart behavior

🛠 Tech Stack

React 18

React Router DOM

Context API

Vite

JavaScript (ES6+)

CSS

React Testing Library

📂 Project Structure
ReactMart/
│
├─ public/
│
├─ src/
│  ├─ assets/          # Images and static assets
│  ├─ components/      # Reusable UI components
│  ├─ context/         # CartContext for global cart state
│  ├─ data/            # Static product data
│  ├─ pages/           # Home, Shop, Cart, About pages
│  ├─ tests/           # Application test files
│  ├─ App.jsx          # Main app layout and routes
│  ├─ main.jsx         # Entry point (Router + CartProvider)
│  └─ index.css        # Global styles
│
├─ package.json
└─ README.md

⚙️ Setup & Installation

Clone the repository

git clone https://github.com/milkah-m/ReactMart.git


Navigate into the project folder

cd ReactMart


Install dependencies

npm install


Start the development server

npm run dev


Open in browser

Navigate to the URL shown in the terminal

🧠 How the Application Works

main.jsx wraps the app with:

BrowserRouter for routing

CartProvider for global cart state

App.jsx defines routes:

/ → Home

/shop → Shop

/cart → Cart

/about → About

Product data is loaded from a static data file

Cart state is shared globally using Context API

Cart updates trigger UI updates across pages (cart badge, cart page, totals)

Tests verify critical user interactions and state updates

🧪 Testing Overview

The testing suite validates core features, including:

App rendering without crashing

Adding items to the cart

Cart badge count updates

Items appearing on the cart page

Empty cart state handling

Tests are written using React Testing Library and focus on user-visible behavior.

🚀 Future Improvements

Add advanced product filtering (categories, price ranges)

Integrate a backend payment and checkout system

Connect to a backend API for dynamic product data

📄 License

This project is for educational purposes only.
