import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <section className="text-dark200_light800">
      <div className="my-24">
        <section className="mb-32 text-center">
          <div className="flex flex-wrap justify-center">
            <div className=" w-full shrink-0 grow-0 md:w-10/12 md:px-3 lg:w-8/12 xl:w-6/12">
              <div className="primary-gradient  mb-6 inline-block rounded-full p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <h2 className="h1-bold text-dark100_light900 mb-6">
                Subscribe to the newsletter
              </h2>

              <p className="mb-12">
                We will write rarely and only high-quality content.
              </p>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div
                  className="relative mb-3 w-full md:mb-0 md:mr-3"
                  data-te-input-wrapper-init
                >
                  <Input type="text" placeholder="Enter your email" />
                </div>
                <Button type="submit" className="btn text-dark200_light800">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Newsletter;
