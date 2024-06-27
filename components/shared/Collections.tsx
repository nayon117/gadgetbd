import { getCollections } from "@/lib/actions/collection.action";
import { CollectionType } from "@/lib/actions/shared.types";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 px-5 py-8">
      <p className="h1-bold text-dark200_light800 mt-6">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-dark200_light800 font-bold">No collections found</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="cursor-pointer rounded-lg"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
