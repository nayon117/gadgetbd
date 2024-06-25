"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { slides } from "@/constants";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

interface itemProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export default function Banner() {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="" style={bg}>
      <div className="">
        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ item }: { item: itemProps }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="">
          <Link href="/">
            <Image
              src={item.imgUrl}
              width={600}
              height={600}
              alt="image"
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center ">
          <div>
            <Link href="/">
              <p className="h3-bold text-dark200_light800 hover:text-gray-600 lg:text-6xl">
                {item.title}
              </p>
            </Link>
          </div>
          <p className="text-dark400_light700 py-3">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
