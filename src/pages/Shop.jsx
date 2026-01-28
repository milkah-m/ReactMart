
import { ProductCard } from "../components/ProductCard.jsx";
import useProducts from "../data/api.js";

function Shop() {
  const { data, loading } = useProducts();

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className="Products-Page">
      <h1 className="product heading">Groceries</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
