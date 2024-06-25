import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="background-light900_dark200 shadow-light-300 dark:shadow-none">
      <div className="mx-auto max-w-screen-xl p-6 sm:px-14">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="site logo"
                  width={50}
                  height={50}
                />
              </Link>

              <p className="text-dark300_light700 mt-2 max-w-sm">
                Join 31,000+ other and never miss out on new tips, products, and
                more.
              </p>

              <div className="-mx-2 mt-6 flex">
                <Link
                  href="/"
                  className="text-dark400_light700 mx-2 transition-colors duration-300"
                >
                  <Image
                    src="icons/facebook.svg"
                    alt="facebook logo"
                    width={20}
                    height={20}
                  />
                </Link>

                <Link
                  href="/"
                  className="text-dark400_light700 mx-2 transition-colors duration-300"
                >
                  <Image
                    src="icons/linkedin.svg"
                    alt="linkedin logo"
                    width={20}
                    height={20}
                  />
                </Link>

                <Link
                  href="/"
                  className="text-dark400_light700 mx-2 transition-colors duration-300"
                >
                  <Image
                    src="icons/instagram.svg"
                    alt="instagram logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-dark200_light900 mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="uppercase ">About</h3>
                <a href="#" className="mt-2 block text-sm hover:underline ">
                  Company
                </a>
                <a href="#" className="mt-2 block text-sm hover:underline">
                  community
                </a>
                <a href="#" className="mt-2 block text-sm  hover:underline ">
                  Careers
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Blog</h3>
                <a href="#" className="mt-2 block text-sm  hover:underline ">
                  Tech
                </a>
                <a href="#" className="mt-2 block text-sm  hover:underline ">
                  Accessories
                </a>
                <a href="#" className="mt-2 block text-sm  hover:underline ">
                  Products
                </a>
              </div>

              <div>
                <h3 className="uppercase ">Products</h3>
                <Link href="/" className="mt-2 block text-sm  hover:underline ">
                  Laptop
                </Link>
                <Link href="/" className="mt-2 block text-sm  hover:underline ">
                  TV
                </Link>
                <Link href="/" className="mt-2 block text-sm  hover:underline ">
                  Watch
                </Link>
              </div>

              <div>
                <h3 className="uppercase ">Contact</h3>
                <span className="mt-2 block text-sm  hover:underline ">
                  +1 526 654 8965
                </span>
                <span className="mt-2 block text-sm  hover:underline ">
                gadgetbd@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-none bg-gray-200 dark:bg-gray-700" />

        <div>
          <p className="text-dark400_light700 text-center">
            © GadgetBD 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
