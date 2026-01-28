

// const Shop = () => {
//     return (

//         <div className="shop-page">
//             <div className="shop-container">
//                 <div className="shop-header">
//                     <p>Products</p>
//                 </div>

//                 <div className="shop-filter">
//                     <button className="filter active">All</button>
//                     <button className="filter">Fruits</button>
//                     <button className="filter">Vegetables</button>
//                     <button className="filter">Dairy</button>

//                 </div>

//                 <div className="products-grid">
//                     {products.map((product) => (
//                         <div className="product-card" key={product.id}>
//                             <img src={product.image} alt={product.name} />
//                             <h3 className="product-name">{product.name}</h3>
//                             <p className="product-price">${product.price}</p>
//                             <button className="add-to-cart-btn">Add to Cart</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )

// };
// import { ProductCard } from "../components/ProductCard";

// function Shop (){
//     const products = [{id: 1, name: "Doughnuts", price: 50, },
//  {id: 2, name: "Croissants", price: 500 },
//    {id: 3, name: "Cinnamon Rolls", price: 250 }]

//     return(
//         <div>
//             {products.map((product) => (<ProductCard key={product.id} product={product} />))}
//         </div>
//     )
// }
import { ProductCard } from "../components/ProductCard.jsx";
import useProducts from "../data/api.js";

function Shop() {
  const { data, loading } = useProducts();

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
