import About from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import Collections from "@/components/shared/Collections";
import Newsletter from "@/components/shared/Newsletter";
import Testimonial from "@/components/shared/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page of GadgetBd Store",
};

const page = () => {
  return (
    <div>
      <Banner />
      <Collections/>
      <About/>
      <Testimonial/>
      <Newsletter/>
    </div>
  );
};
export default page;
