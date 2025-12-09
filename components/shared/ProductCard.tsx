import Image from "next/image";
import Link from "next/link";
import { ProductType, UserType } from "@/lib/actions/shared.types";
import HeartFavorite from "./HeartFavorate";

interface ProductCardProps {
  product: ProductType;
  signedInUser?: UserType | null;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, signedInUser, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link href={`/products/${product._id}`} className="flex w-[220px] flex-col gap-2">
      <Image
        src={product.media[0]}
        alt={product.title}
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="h3-bold text-dark200_light800">{product.title}</p>
        <p className="base-medium text-dark200_light800">{product.category}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="h3-bold text-dark200_light800">${product.price}</p>
        <HeartFavorite
          product={product}
          signedInUser={signedInUser}
          updateSignedInUser={updateSignedInUser}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
