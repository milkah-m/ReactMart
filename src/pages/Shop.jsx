import useProducts from "../data/api.js";

function Shop() {
  // Get products + loading state from custom hook
  const { data, loading } = useProducts();

  // Show loading text while fetching
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      <div>
        {data.map((product) => ( // Loop through products and display each one
          <div
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />

            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
