import { ProductCard } from "../../components/ProductCard.jsx";
import useProducts from "../../data/api.js";
import { useState } from "react";
import "./Shop.css";

function Shop() {
  // Fetch product data and loading state using custom hook
  const { data = [], loading } = useProducts([]);
  // Track the search input
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <div className="shop-loading">Loading fresh groceries…</div>;
  }

  // Filter products by search term
  const filteredProducts = data.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="shop-page">
      {/* Hero Section */}
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

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Shop;
