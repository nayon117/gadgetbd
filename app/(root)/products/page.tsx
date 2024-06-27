import ProductCard from "@/components/shared/ProductCard";
import Search from "@/components/shared/Search";
import { getProducts } from "@/lib/actions/product.action";
import { ProductType } from "@/lib/actions/shared.types";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="py-8">
      <div className="mb-12 flex items-center justify-between">
        <p className="h1-bold text-dark200_light800">Products</p>
        <Search />
      </div>
      {!products || products.length === 0 ? (
        <p className="h1-bold text-dark200_light800 ">No products found</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
