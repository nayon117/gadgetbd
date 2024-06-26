import ProductCard from "@/components/shared/ProductCard";
import { getCollectionDetails } from "@/lib/actions/collection.action";
import { ProductType } from "@/lib/actions/shared.types";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="flex flex-col items-center gap-8 px-10 py-5">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="h-[400px] w-full rounded-xl object-cover"
      />
      <p className="h1-bold text-dark100_light900">{collectionDetails.title}</p>
      <p className="h3-bold text-dark300_light700 max-w-[900px] text-center">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap justify-center gap-16">
        {collectionDetails?.products?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
