
import ProductCard from '@/components/shared/ProductCard'
import { getSearchedProducts } from '@/lib/actions/product.action'
import { ProductType } from '@/lib/actions/shared.types'

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
      <p className='h3-bold text-dark200_light800 my-6'>Search results for {decodedQuery}</p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='h3-bold text-dark200_light800 my-5'>No result found</p>
      )}
      <div className='mb-8 flex flex-wrap gap-16'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage