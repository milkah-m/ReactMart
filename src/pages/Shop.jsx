import react from "react";
//Jabari is gonna add the products he had here before the const shop
const products = [
    {
        id: 1,
        name: "Fresh Apples",
        price: "$2.00",
        image: "/images/apple.jpg",
    },
    {
        id: 2,
        name: "Organic Milk",
        price: "$1.50",
        image: "/images/milk.jpg",
    },
    {
        id: 3,
        name: "Bananas",
        price: "$1.20",
        image: "/images/banana.jpg",
    },
    {
        id: 4,
        name: "Tomatoes",
        price: "$1.80",
        image: "/images/tomato.jpg",
    },
    {
        id: 5,
        name: "Fresh Apples",
        price: "$2.00",
        image: "/images/apple.jpg",
    },
    {
        id: 6,
        name: "Organic Milk",
        price: "$1.50",
        image: "/images/milk.jpg",
    },
    {
        id: 7,
        name: "Bananas",
        price: "$1.20",
        image: "/images/banana.jpg",
    },
    {
        id: 8,
        name: "Tomatoes",
        price: "$1.80",
        image: "/images/tomato.jpg",
    },
    {
        id: 9,
        name: "Fresh Apples",
        price: "$2.00",
        image: "/images/apple.jpg",
    },
    {
        id: 10,
        name: "Organic Milk",
        price: "$1.50",
        image: "/images/milk.jpg",
    },
    {
        id: 11,
        name: "Bananas",
        price: "$1.20",
        image: "/images/banana.jpg",
    },
    {
        id: 12,
        name: "Tomatoes",
        price: "$1.80",
        image: "/images/tomato.jpg",
    },
];

const Shop = () => {
    return (

        <div className="shop-page">
            <div className="shop-container">
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
        </div>
    )

};

export default Shop;
