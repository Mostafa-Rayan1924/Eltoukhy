"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
const SupplierSwiper = ({
  items,
  numOFSlides,
}: {
  items: { image: string; title: string }[];
  numOFSlides: number;
}) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      loop={true}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2.4,
        },
        768: {
          slidesPerView: 3.3,
        },
        1024: {
          slidesPerView: numOFSlides,
        },
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper2 ">
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[150px]   m-auto">
            <Image
              src={item.image}
              fill
              alt={item.title}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SupplierSwiper;
