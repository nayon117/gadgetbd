export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/customers/${customerId}`,{
        cache:"no-store"
      })
    return await orders.json()
  }