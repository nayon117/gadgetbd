import Image from "next/image";

const About = () => {
  return (
    <section className="background-light900_dark200 text-dark300_light700 relative mt-12 py-6 md:py-10">
      <div className="">
        <div className="grid grid-cols-12 items-center justify-center gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:px-7">
              <h1 className="h1-bold mb-2">ABOUT US</h1>
              <hr className="my-6 h-1 w-24 bg-black opacity-100 dark:bg-white" />
              <p className="my-2 text-lg leading-normal opacity-75">
                Welcome to GadgetBD! We are passionate about bringing you the
                latest and greatest in technology. Our mission is to provide
                innovative and high-quality products that enhance your digital
                lifestyle.
              </p>
              <p className="text-lg leading-normal opacity-75">
                At GadgetBD, we believe in customer-centricity and strive to
                exceed your expectations. Whether you are looking for
                cutting-edge smartphones, sleek laptops, or stylish accessories,
                we have got you covered.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative flex justify-center lg:flex-col lg:pl-20">
              <Image
                src="https://i.ibb.co/NsPk0FF/campaign-creators-OGOWDVLb-MSc-unsplash.jpg"
                alt="About us image"
                width={400}
                height={400}
                className="mt-16 hidden size-60 rotate-45 object-cover md:block lg:size-96"
              />
              <Image
                src="https://i.ibb.co/bsPHF4J/brooke-lark-W1-B2-Lp-QOBx-A-unsplash.jpg"
                alt="about us image"
                width={400}
                height={400}
                className="mt-16 size-60 rotate-45 object-cover lg:-mt-16 lg:size-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
