"use client";

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";



const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  // Calculate total price of items in the cart
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  // Handle checkout process
  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`,
          {
            method: "POST",
            body: JSON.stringify({ cartItems: cart.cartItems, customer }),
          }
        );
        const data = await res.json();
        window.location.href = data.url;
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 px-10 py-16 max-lg:flex-col max-sm:px-3 ">
      <div className="w-2/3 max-lg:w-full">
        <p className="h1-bold text-dark200_light800">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="h1-bold text-dark200_light800">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.item._id}
                className="flex w-full items-center justify-between px-4 py-3  max-sm:flex-col max-sm:items-start max-sm:gap-3"
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="size-32 rounded-lg object-cover"
                    alt="product"
                  />
                  <div className="ml-4 flex flex-col gap-3">
                    <p className="h3-bold text-dark200_light800">
                      {cartItem.item.title}
                    </p>

                    <p className="h3-bold text-dark200_light800">
                      ${cartItem.item.price}
                    </p>
                  </div>
                </div>

                <div className="text-dark200_light800 flex items-center gap-4">
                  <MinusCircle
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="h3-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="cursor-pointer hover:text-green-500"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="cursor-pointer dark:text-white"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-1/3 flex-col gap-8 rounded-lg bg-gray-200 px-4 py-5 max-lg:w-full">
        <p className="pb-4 font-bold">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between font-semibold">
          <span>Total Amount</span>
          <span>$ {totalRounded}</span>
        </div>
        <button
          className="w-full rounded-lg border bg-white py-3 font-bold hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
