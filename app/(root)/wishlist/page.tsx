"use client";
import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/shared/ProductCard";
import { getProductDetails } from "@/lib/actions/product.action";
import { ProductType, UserType } from "@/lib/actions/shared.types";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  // Fetches the signed-in user's details from the API
  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data: UserType = await res.json();
      setSignedInUser(data);
    } catch (err) {
      console.error("[users_GET]", err);
      setSignedInUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Retrieve wishlist products for the signed-in user
  const getWishlistProducts = async () => {
    if (!signedInUser) return;

    if (!signedInUser.wishlist || signedInUser.wishlist.length === 0) {
      setWishlist([]);
      return;
    }

    try {
      setLoading(true);
      const wishlistProducts: ProductType[] = await Promise.all(
        signedInUser.wishlist.map(async (productId) => {
          const res = await getProductDetails(productId);
          return res;
        })
      );
      setWishlist(wishlistProducts);
    } catch (err) {
      console.error("[wishlist_GET]", err);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user details when user changes
  useEffect(() => {
    if (!user) {
      setSignedInUser(null);
      setWishlist([]);
      setLoading(false);
    } else {
      getUser();
    }
  }, [user]);

  // Fetch wishlist products when signedInUser is loaded
  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="text-dark200_light800 px-10 py-5">
      <p className="h1-bold my-10">Your Wishlist</p>

      {(!signedInUser || wishlist.length === 0) && (
        <p>No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            signedInUser={signedInUser}
            updateSignedInUser={updateSignedInUser}
          />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;
