import ProductCard from "@/components/shared/ProductCard";
import { getProducts } from "@/lib/actions/product.action";
import { ProductType } from "@/lib/actions/shared.types";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10  py-8">
      <p className="h1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="h1-bold">No products found</p>
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
