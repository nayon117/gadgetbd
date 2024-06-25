"use client";
import React, { useState } from "react";
import { testimonialList } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleControl = (type: "prev" | "next") => {
    if (type === "prev") {
      setCurrentPage((prevPage) => (prevPage <= 0 ? 0 : prevPage - 1));
    } else if (type === "next") {
      setCurrentPage((prevPage) =>
        prevPage >= Math.ceil(testimonialList.length / 3) - 1
          ? Math.ceil(testimonialList.length / 3) - 1
          : prevPage + 1
      );
    }
  };

  return (
    <div className="text-dark200_light800 mt-16 py-6 md:py-10">
      <div className="container relative">
        <div className="flex justify-between">
          <div className="w-2/3 lg:max-w-lg">
            <h2 className="h1-bold mb-6 ">Our Customers&apos; Experience</h2>
            <p className="text-lg leading-relaxed">
              Discover what our valued customers have to say about their
              experiences shopping with us. From unparalleled product quality to
              exceptional customer service, read their testimonials below.
            </p>
          </div>
          <div className="w-1/3">
            <div className="relative flex h-full items-center justify-end">
              <button
                className="mr-4 flex size-12 items-center justify-center rounded-full bg-white text-lg opacity-75 shadow-xl hover:opacity-100 dark:bg-slate-800"
                onClick={() => handleControl("prev")}
                disabled={currentPage === 0}
              >
                <Image
                  src="icons/arrow-left.svg"
                  alt="Arrow Left"
                  width={20}
                  height={20}
                />
              </button>
              <button
                className="flex size-12 items-center justify-center rounded-full bg-white text-lg opacity-75 shadow-xl hover:opacity-100 dark:bg-slate-800"
                onClick={() => handleControl("next")}
                disabled={
                  currentPage === Math.ceil(testimonialList.length / 3) - 1
                }
              >
                <Image
                  src="icons/arrow-right.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-6 gap-y-6 md:gap-x-6">
          {testimonialList
            .slice(currentPage * 3, currentPage * 3 + 3)
            .map((item, i) => (
              <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                <div className="h-full rounded-xl p-6 shadow-xl duration-300 hover:-translate-y-1">
                  <div className="mt-4">
                    <p className="mb-2 text-xl font-bold">{item.name}</p>
                    <p className="mb-6 ">
                      {item.content}
                    </p>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          className="rounded-full "
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
