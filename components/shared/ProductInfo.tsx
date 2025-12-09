"use client";

import { useState} from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

import useCart from "@/lib/hooks/useCart";
import { ProductType, UserType } from "@/lib/actions/shared.types";
import HeartFavorite from "./HeartFavorate";

interface ProductInfoProps {
  productInfo: ProductType;
  signedInUser?: UserType | null;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductInfo = ({ productInfo, signedInUser, updateSignedInUser }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const cart = useCart();

  return (
    <div className="flex max-w-[400px] flex-col gap-4">
      {/* Title + Heart */}
      <div className="flex items-center justify-between">
        <p className="h3-bold text-dark200_light800">{productInfo.title}</p>
        <HeartFavorite
          product={productInfo}
          signedInUser={signedInUser}
          updateSignedInUser={updateSignedInUser}
        />
      </div>

      {/* Category */}
      <div className="flex gap-2">
        <p className="h3-bold text-dark200_light800">Category:</p>
        <p className="h3-bold text-dark200_light800">{productInfo.category}</p>
      </div>

      {/* Price */}
      <p className="h3-bold text-dark200_light800">$ {productInfo.price}</p>

      {/* Description */}
      <div className="text-dark200_light800 flex flex-col gap-2">
        <p className="h3-bold">Description:</p>
        <p className="font-medium">{productInfo.description}</p>
      </div>

      {/* Quantity Selector */}
      <div className="text-dark200_light800 flex flex-col gap-2">
        <p className="h3-bold">Quantity:</p>
        <div className="flex items-center gap-4">
          <MinusCircle
            className="cursor-pointer hover:text-red-500"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="h2-bold">{quantity}</p>
          <PlusCircle
            className="cursor-pointer hover:text-red-500"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        className="btn rounded-lg py-3 font-bold outline dark:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
          });
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductInfo;
