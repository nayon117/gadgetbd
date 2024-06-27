import Gallery from "@/components/shared/Gallary";
import ProductCard from "@/components/shared/ProductCard";
import ProductInfo from "@/components/shared/ProductInfo";
import {
  getProductDetails,
  getRelatedProducts,
} from "@/lib/actions/product.action";
import { ProductType } from "@/lib/actions/shared.types";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <>
      <div className="flex items-start justify-center gap-16 px-5 py-10 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="h1-bold text-dark200_light800">Related Products</p>
        <div className="mx-auto mt-8 flex flex-wrap gap-16">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
