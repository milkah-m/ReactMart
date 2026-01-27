import { useState, useEffect } from "react"; 
import products from "./products";           

// Using a custom hook to fetch the API instead of the other fetch Method I used on the initial commit.

export const useProducts = () => {           // useProducts is the custom hook that fetches product data
  const [data, setData] = useState([]);         // state to store fetched products
  const [loading, setLoading] = useState(true); // state to track loading status

  useEffect(() => {                          // useEffect runs once when the component mounts
    const fetchProducts = () => {           // The function I originally wrote to fetch data from an API
      setTimeout(() => {                    // setTimeout is used to make a delay like a real network request.
        setData(products);                 
        setLoading(false);                  // set loading to false after data is "fetched"
      }, 500);                              // 500ms delay to simulate network latency
    };

    fetchProducts();                        
  }, []);                                    

  return { data, loading };                  
};                                           
