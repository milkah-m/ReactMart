 //1. the remove from cart function takes in the item id as an argument
    const removeFromCart = (id) => {
    //2. the setter function maps through the previous items array taking in an individual item as a param:
    setCartItems(prevItems => 
        prevItems.map(item => 
        //3. if the id of an item matches the id passed in as an argument
        {if(item.id === id){
        //4. if the quantity is greater than 1, then modify the object by returning the quantity of the object minus 1
          if (item.quantity > 1) {return {...item, quantity: item.quantity-1}}
          //5. otherwise return null
            return null
        }
        return item
    })
    //6. this clears the null value from the array because it keeps truthy values and eliminates falsy ones
    .filter(Boolean)

    //7. otherwise return the item as it is
)
    
}



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

import Header from "./components/Header"; // keep it imported but not used for now

  // search state for Shop (or other pages if needed)
  // const [searchQuery, setSearchQuery] = useState("");

   {/* Header commented out for now to remove unwanted search */}
      {/*
      <Header
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
      />
      */}

       // searchQuery={searchQuery} 
              // setSearchQuery={setSearchQuery} 