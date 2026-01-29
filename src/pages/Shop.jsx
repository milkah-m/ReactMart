
import { ProductCard } from "../components/ProductCard.jsx";
import useProducts from "../data/api.js";

function Shop({ searchQuery }) {
  const { data, loading } = useProducts();

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Products-Page">
      <h1 className="product heading">Groceries</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
