import { useState, useEffect } from "react";
import products from "./products";

// Using Custom/Standard hooks to fetch the product data from the database on products.js
export default function useProducts() {
  // Stores product data
  const [data, setData] = useState([]);

  // manages the loading...
  const [loading, setLoading] = useState(true);

  // Runs once when the component using this hook mounts
  useEffect(() => {
    // Makes the API call Delay as if fetching from a real server
    setTimeout(() => {
      setData(products);     
      setLoading(false);
    }, 1300); // how long the loading takes (1.3 seconds)
  }, []);

  // Return product data and loading state
  return { data, loading };
}

