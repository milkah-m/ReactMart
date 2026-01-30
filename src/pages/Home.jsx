import React from "react";
import { useNavigate } from "react-router-dom";
import basketImg from "../assets/basket.png";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">

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

      <section className="category-section">
        <div className="category-card meat">
          <span className="badge">New</span>
          <p>Meat & Seafood</p>
        </div>

        <div className="category-card baked">
          <span className="badge">New</span>
          <p>Baked Goods</p>
        </div>

        <div className="category-card dairy">
          <span className="badge">New</span>
          <p>Dairy Products</p>
        </div>

        <div className="category-card veggies">
          <span className="badge">New</span>
          <p>Vegetables & Fruits</p>
        </div>
      </section>
      <footer className="footer">
        <p>© 2026 REACTMART. Fresh food, delivered fast.Made as a group project By Farhiya, Eugene, Milkah, and Jabari</p>
      </footer>
    </main>


  );
}