import { ProductCard } from "../components/ProductCard";

function Shop (){
    const products = [{id: 1, name: "Doughnuts", price: 50, },
 {id: 2, name: "Croissants", price: 500 },
   {id: 3, name: "Cinnamon Rolls", price: 250 }]

    return(
        <div>
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
    )
}
// import { ProductCard } from "../components/ProductCard.jsx";
// import useProducts from "../data/api.js";



// function Shop() {
//   // Get products + loading state from custom hook
//   const { data, loading } = useProducts();

//   // Show loading text while fetching
//   if (loading) {
//     return <h2>Loading products...</h2>;
//   }

//   return (
//     <div>
//      {products.map((product) => (<ProductCard key={product.id} product={product} />))}
//       {/* <h1>Products</h1>

//       <div>
//         {data.map((product) => ( // Loop through products and display each one
//           <div
//             key={product.id}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{ width: "100%", height: "120px", objectFit: "cover" }}
//             />

//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

export default Shop;
