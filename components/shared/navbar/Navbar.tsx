"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Theme from "./Theme";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const cart = useCart();
  return (
    <nav className="background-light900_dark200 fixed z-50 flex  w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/images/logo.png"
          alt="GadgetBD Logo"
          height={40}
          width={40}
        />
        <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">
          Gadget
          <span className="primary-text-gradient font-spaceGrotesk text-light-900">
            BD
          </span>
        </p>
      </Link>

      <div className="flex  gap-2">
        {navbarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900 " : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent md:p-2 `}
            >
              <p
                className={`${isActive ? "font-bold" : "text-dark200_light800 font-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center">
        <Theme />
        <SignedOut>
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button className="small-medium btn  min-h-[41px] w-full rounded px-4 py-3 shadow-none">
                <Image
                  src="/icons/account.svg"
                  alt="login"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="text-dark200_light800 max-lg:hidden">
                  Log In
                </span>
              </Button>
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-6 w-6",
              },
              variables: {
                colorPrimary: "#144272",
              },
            }}
          />
        </SignedIn>

        <div className="ml-2 flex items-center gap-2">
          <Link
            href={`/cart`}
            className="mr-1 flex items-center  dark:text-white "
          >
            <ShoppingCart />
            <p>({cart.cartItems.length})</p>
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
