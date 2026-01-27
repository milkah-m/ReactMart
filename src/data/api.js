import products from "./products";

// this function lets us make an API call to fetch products.

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {     // setTimeout is used to make a delay like a real network request.
      resolve(products);    
    }, 500);   // 500 milliseconds (0.5 seconds) delay to simulate internet speed.
  });
}