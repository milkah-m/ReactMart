
import { ProductCard } from "../../components/ProductCard.jsx";
import useProducts from "../../data/api.js";
import {useState} from "react" //implementing useState for search functionality
import "./Shop.css"


function Shop() {
  const { data = [], loading } = useProducts([]);
  const [searchTerm, setSearchTerm] = useState("") //setting initial state to an empty string

   if (loading) {
    return <h2>Loading products...</h2>;
  }

const filteredProducts = data.filter(item =>
  item.name?.toLowerCase().includes(searchTerm.toLowerCase())
)

 

  return (
    <div className="Products-Page">
      <input
      type="text"
      placeholder="Search groceries..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
      />
      <h1 className="product heading">Groceries</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
