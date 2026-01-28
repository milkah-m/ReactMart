// import { ProductCard } from "../components/ProductCard";

// export default function Shop (){
//     const products = [{id: 1, name: "Tester Product", price: 50, }]

//     return(
//         <div>
//             {products.map((product) => (<ProductCard key={product.id} product={product} />))}
//         </div>
//     )
// }

import useProducts from "../data/api.js";
import { ProductCard } from "../components/ProductCard";

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
        {data.map((product) => (
    <ProductCard key={product.id} product={product} /> // rendering products with unique keys and with a component-based structure
  ))}
      </div>
    </div>
  );
}

export default Shop;
