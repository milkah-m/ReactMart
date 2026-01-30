import React from "react";
import { useNavigate } from "react-router-dom";
import basketImg from "../assets/basket.png";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  // Simple placeholder click handler
  const handleCategoryClick = (category) => {
    alert(`${category} category filtering coming soon!`);
  };

  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          REACTMART <br /> Groceries Done Right
        </h1>

        <button
          className="hero-cta"
          onClick={() => navigate("/shop")}
        >
          Start shopping
        </button>

        <div className="hero-image-wrapper">
          <img src={basketImg} alt="Grocery basket" />
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div
          className="category-card meat"
          onClick={() => handleCategoryClick("Meat & Seafood")}
        >
          <span className="badge">Coming Soon</span>
          <p>Meat & Seafood</p>
        </div>

        <div
          className="category-card baked"
          onClick={() => handleCategoryClick("Baked Goods")}
        >
          <span className="badge">Coming Soon</span>
          <p>Baked Goods</p>
        </div>

        <div
          className="category-card dairy"
          onClick={() => handleCategoryClick("Dairy Products")}
        >
          <span className="badge">Coming Soon</span>
          <p>Dairy Products</p>
        </div>

        <div
          className="category-card veggies"
          onClick={() => handleCategoryClick("Vegetables & Fruits")}
        >
          <span className="badge">Coming Soon</span>
          <p>Vegetables & Fruits</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 REACTMART. Fresh food, delivered fast. Made as a group project By Farhiya, Eugene, Milkah, and Jabari</p>
      </footer>
    </main>


  );
}