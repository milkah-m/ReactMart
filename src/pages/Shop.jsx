import react from "react";
//Jabari is gonna add the products he had here before the const shop


const Shop = () => {
    return (

        <div className="shop-page">
            <div className="shop-header">
                <p>Products</p>
            </div>

            <div className="shop-filter">
                <button className="filter active">All</button>
                <button className="filter">Fruits</button>
                <button className="filter">Vegetables</button>
                <button className="filter">Dairy</button>

            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default Shop;