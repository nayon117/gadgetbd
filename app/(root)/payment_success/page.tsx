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
      <p className="h1-bold text-red-500">Successful Payment</p>
      <p>Thank you for your purchase</p>
      <Link
        href="/"
        className="h2-bold border p-4 hover:bg-black hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
