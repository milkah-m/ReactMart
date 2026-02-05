
import { ProductCard } from "../components/ProductCard.jsx";
import useProducts from "../data/api.js";

function Shop({ searchQuery }) {
  const { data, loading } = useProducts(); // this line uses the custom hook useProducts to fetch product data and loading state

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  const filteredProducts = data.filter((product) => // this line filters products based on the search query
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) // this line checks if the product name includes the search query (case-insensitive
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
