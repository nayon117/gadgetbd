import ProductCard from "@/components/shared/ProductCard";
import Search from "@/components/shared/Search";
import Pagination from "@/components/shared/pagination";
import { getProducts } from "@/lib/actions/product.action";
import { ProductType } from "@/lib/actions/shared.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page of GadgetBd Store",
};

const Products = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const product = await getProducts();

  // Get pagination parameters from search params or set default values
  const page = searchParams.page ?? "1";
  const perPage = searchParams.perPage ?? "5";

  // Calculate start and end indices for slicing the products array
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  // Get the products for the current page
  const products = product.slice(start, end);

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
      <div className="mt-10 flex w-full items-center justify-center">
        <Pagination
          hasNextPage={end < product.length}
          hasPrevPage={start > 0}
        />
      </div>
    </div>
  );
};

export default Products;
