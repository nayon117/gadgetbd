export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,{
      cache:"no-store"
    })
    return await products.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`,{
      cache:"no-store"
    })
    return await product.json()
  }

  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}/related`,{
      cache:"no-store"
    })
    return await relatedProducts.json()
  }


  export const getSearchedProducts = async (query: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search/${query}`);
      
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Response is not JSON");
      }
  
      // Parse the JSON response
      const searchedProducts = await response.json();
      return searchedProducts;
    } catch (error) {
      console.error("Error fetching searched products:", error);
      throw error; // Re-throw the error after logging it
    }
  };