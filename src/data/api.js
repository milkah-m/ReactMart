import { useState, useEffect } from "react";
import products from "./products";

// Using Custom/Standard hooks to fetch the product data from the database on products.js
export default function useProducts() { // this is a custom hook named useProducts and we are using export default to make it available for import in other files
  // Stores product data
  const [data, setData] = useState([]); //this line initializes a state variable 'data' as an empty array and provides a function 'setData' to update it

  // manages the loading...
  const [loading, setLoading] = useState(true); // this line initializes a state variable 'loading' as true and provides a function 'setLoading' to update it

  // Async function to simulate API call
  const fetchProducts = async () => { // this line defines an asynchronous function named fetchProducts
    try {
      await new Promise(resolve => setTimeout(resolve, 1300));

      setData(products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { data, loading };
} 