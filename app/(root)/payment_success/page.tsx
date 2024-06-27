"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <p className="h1-bold text-green-500">Successful Payment</p>
      <p className="text-dark200_light800">Thank you for your purchase</p>
      <Link href="/" className="h2-bold text-dark200_light800 border p-4">
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
