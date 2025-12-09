"use client";

import { ProductType, UserType } from "@/lib/actions/shared.types";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeartFavoriteProps {
  product: ProductType;
  signedInUser?: UserType | null; // pass user from parent
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, signedInUser, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Set liked state from parent user
  useEffect(() => {
    if (signedInUser) {
      setIsLiked(signedInUser.wishlist.includes(product._id));
    }
  }, [signedInUser, product._id]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!user) {
      router.push("/sign-in");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/users/wishlist", {
        method: "POST",
        body: JSON.stringify({ productId: product._id }),
      });
      const updatedUser = await res.json();
      setIsLiked(updatedUser.wishlist.includes(product._id));
      updateSignedInUser && updateSignedInUser(updatedUser);
    } catch (err) {
      console.log("[wishlist_POST]", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLike}>
      {loading ? (
      <span className="animate-spin text-purple-500">⏳</span>
    ) : (
      <Heart fill={isLiked ? "purple" : "white"} />
    )}
    </button>
  );
};

export default HeartFavorite;
