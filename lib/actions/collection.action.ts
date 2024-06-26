export const getCollections = async () => {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections`,{
      cache:"no-store"
    })
    return await collections.json()
  }

  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}`,{
      cache:"no-store"
    })
    return await collection.json()
  }