export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
    return await products.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`)
    return await product.json()
  }

  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}/related`)
    return await relatedProducts.json()
  }