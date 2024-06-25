import About from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import Newsletter from "@/components/shared/Newsletter";
import Testimonial from "@/components/shared/Testimonial";

const page = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Testimonial/>
      <Newsletter/>
    </div>
  );
};
export default page;
