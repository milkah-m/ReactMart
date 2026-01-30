import { ProductCard } from "../../components/ProductCard.jsx";
import useProducts from "../../data/api.js";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Shop.css";

function Shop() {
  const { data = [], loading } = useProducts([]);
  const location = useLocation();

  // Get search term from navigation state (from Navbar)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (location.state?.search) {
      setSearchTerm(location.state.search);
    }
  }, [location.state]);

  if (loading) {
    return <div className="shop-loading">Loading fresh groceries…</div>;
  }

  const filteredProducts = data.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <h1>Shop Fresh Groceries</h1>
        <p>Hand-picked quality. Delivered to your door.</p>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search fruits, vegetables, snacks…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Shop;
